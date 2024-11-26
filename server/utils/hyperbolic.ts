import OpenAI from 'openai'
import { generateSummaryPrompt } from './gemini'

export async function genByHyperbolic(language: string, quizzes: string, option: Option, model: string) {
  const prompt = generateSummaryPrompt(language, quizzes, option)
  const client = new OpenAI({
    apiKey: process.env.HYPERBOLIC_API_KEY,
    baseURL: 'https://api.hyperbolic.xyz/v1',
  })
  const response = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: model || 'meta-llama/Meta-Llama-3-70B-Instruct',
  })

  const output = response.choices[0].message.content
  console.log(output)
  return output
}
