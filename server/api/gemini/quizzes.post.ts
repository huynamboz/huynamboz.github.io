import { z } from 'zod'
import { sendTelegram } from '~/server/utils/telegram'

const quizTypesSchema = z.enum(['TRUE_FALSE', 'MULTIPLE_CHOICE'])

const quizSchema = z.object({
  language: z.string().default('en'),
  quizzes: z.array(z.string()).default([]),
  option: z.object({
    numberOfQuestion: z.number().default(1),
    theme: z.string(),
    quizTypes: z.array(quizTypesSchema),
  }),
})

export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
  })
  // const { history, language, option } = await readBody(event)
  try {
    const result = await readValidatedBody(event, (body) => quizSchema.safeParse(body)) // or `.parse` to directly throw an error

    if (!result.success) {
      sendTelegram('Generate quiz: Validation failed', result.error)
      throw errorHandler({ statusCode: 400, message: 'Validation failed' })
    }

    const { language, quizzes, option } = result.data

    let responseText = (await generateQuiz(language, quizzes.join(','), option)) || ''
    // handle remove ```json and ``` from responseText
    responseText = responseText
      ?.replace(/```json/g, '')
      .replace(/```/g, '')
      .trim()
    if (!responseText) {
      sendTelegram('Generate quiz: Unknown error' + responseText)
      throw errorHandler({ statusCode: 400, message: 'Generate quiz error' })
    }

    const res = JSON.parse(responseText)
    await sendTelegram(
      `Generate quiz: ${res.length} questions`,
      res.map((q: any) => q.content),
    )
    return res
  } catch (error: any) {
    await sendTelegram(`Generate quiz: ${error?.message || 'Unknown error'}`)
    throw errorHandler({ statusCode: 400, message: error?.message || 'Unknown error' })
  }
})
