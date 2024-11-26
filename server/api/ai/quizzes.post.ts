import { z } from 'zod'
import { genByHyperbolic } from '~/server/utils/hyperbolic'
import { sendTelegram } from '~/server/utils/telegram'

const quizTypesSchema = z.enum(['TRUE_FALSE', 'MULTIPLE_CHOICE'])
const modelEnum = z.enum([
  'gemini',
  'meta-llama/Meta-Llama-3.1-8B-Instruct',
  'meta-llama/Meta-Llama-3.1-70B-Instruct',
  'meta-llama/Meta-Llama-3-70B-Instruct',
  'Qwen/Qwen2.5-Coder-32B-Instruct', // coding knowledge
])

const quizSchema = z.object({
  language: z.string().default('en'),
  quizzes: z.array(z.string()).default([]),
  option: z.object({
    numberOfQuestion: z.number().default(1),
    theme: z.string(),
    quizTypes: z.array(quizTypesSchema),
  }),
  model: z.string().refine((value) => modelEnum.safeParse(value).success),
})

export default defineEventHandler(async (event) => {
  // const { history, language, option } = await readBody(event)
  let responseTextTemp = ''
  try {
    const result = await readValidatedBody(event, (body) => quizSchema.safeParse(body)) // or `.parse` to directly throw an error

    if (!result.success) {
      sendTelegram('❌Generate quiz: Validation failed', result.error)
      throw errorHandler({ statusCode: 400, message: 'Validation failed' })
    }

    const { language, quizzes, option, model } = result.data

    //     if (model) {
    //       const responseText = await genByHyperbolic(language, quizzes.join(','), option, model)
    //       if (!responseText) {
    //         throw errorHandler({ statusCode: 400, message: 'Generate quiz error' })
    //       }

    //       const res = JSON.parse(responseText)
    //       await sendTelegram(
    //         `Generate quiz: ${res.length} questions
    // ${res.map((q: any) => q.content).join('\n')}
    // `,
    //       )
    //       return res
    //     }

    let responseText = ''

    if (model && model !== 'gemini') {
      responseText = (await genByHyperbolic(language, quizzes.join(','), option, model)) || ''
    } else {
      responseText = (await generateQuiz(language, quizzes.join(','), option)) || ''
    }

    // handle remove ```json and ``` from responseText
    responseText = responseText
      ?.replace(/```json/g, '')
      .replace(/```/g, '')
      .trim()

    responseTextTemp = responseText
    if (!responseText) {
      throw errorHandler({ statusCode: 400, message: 'Generate quiz error' })
    }

    const res = JSON.parse(responseText)
    await sendTelegram(
      `Generate quiz: ${res.length} questions, model: ${model}
${res.map((q: any) => q.content).join('\n')}
`,
    )
    return res
  } catch (error: any) {
    await sendTelegram(`❌Generate quiz: ${responseTextTemp || error?.message || 'Unknown error'}`)
    throw errorHandler({ statusCode: 400, message: error?.message || 'Unknown error' })
  }
})
