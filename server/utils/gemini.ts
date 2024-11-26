import { GoogleGenerativeAI } from '@google/generative-ai'

export interface Option {
  numberOfQuestion: number
  theme: string
  quizTypes: Array<string>
}
const modelMap = new Map<number, string>([
  [0, 'gemini-pro'],
  [1, 'gemini-1.5-flash'],
  [2, 'gemini-1.5-flash-latest'],
  [3, 'gemini-1.5-pro'],
  [4, 'gemini-1.5-pro-latest'],
])

export function generateSummaryPrompt(language: string, currentQuizzes: string, option: Option) {
  return `

### Instructions:
1. Generate an array of JSON objects following this structure:
   - **Quiz** object:
     - \`content\`: A string representing the question.
     - \`quiz_type\`: One of 'MULTIPLE_CHOICE' or 'TRUE_FALSE'.
     - \`answers\`: An array of objects containing:
       - \`content\`: A string representing the answer.
       - \`is_correct\`: A boolean indicating if the answer is correct.

2. Formatting Rules:
   - **Do not include any additional text, explanations, or formatting characters**. For example:
     - Do NOT include triple backticks (\`\\\`\\\`\\\`) or similar markdown-style characters.
     - The output should ONLY be valid JSON that can be parsed directly with \`JSON.parse\`.
     - Do NOT include extra context, comments, or explanations—only raw JSON is allowed.

3. Quiz Generation Rules:
   - For "MULTIPLE_CHOICE" quiz_type, always generate **exactly 4 answers** and only **1 correct answer**.
   - For "TRUE_FALSE" quiz_type, always generate **exactly 2 answers**, answering "True" or "False".
   - Position the correct answer randomly among the answers.
   - All questions must be unique and not overlap with the following list of current quizzes: ${currentQuizzes || 'None provided'}.

4. Language:
   - All quiz content must be written in language: ${language || 'Vietnamese'}.

5. Task:
   - Generate ${option.numberOfQuestion || 1} quiz${option.numberOfQuestion > 1 ? 'es' : ''}.
   - Theme: ${option.theme || 'General Knowledge'}.
   - Quiz types allowed: ${option.quizTypes.join(', ')}.
   - All questions must be real and factually accurate.

6. JSON Validation:
   - The output must be valid JSON, strictly adhering to the structure and rules above.
   - Invalid JSON or additional characters will be rejected.

7.Example output:
  [
    {
      "content": "Who is the main character in the novel 'To Kill a Mockingbird'?",
      "quiz_type": "MULTIPLE_CHOICE",
      "answers": [
        { "content": "Atticus Finch", "is_correct": false },
        { "content": "Scout Finch", "is_correct": true },
        { "content": "Tom Robinson", "is_correct": false },
        { "content": "Boo Radley", "is_correct": false }
      ]
    },
    {
      "content": "Is water wet?",
      "quiz_type": "TRUE_FALSE",
      "answers": [
        { "content": "True", "is_correct": true },
        { "content": "False", "is_correct": false }
      ]
    }
  ]
Only return the raw JSON data. Do not include any other text.
`
}

function generateChatPrompt(language: string) {
  return `
  You are a helpful and informative chatbot assistant. Your primary function is to analyze and understand subtitles from videos. You will use this information to engage in conversations with users, answering their questions about the video's content. 
  Please respond in ${language ?? 'Vietnamese'} and focus on providing clear and accurate information to the user.`
}

async function retryWithBackoff(
  modelFn: (modelName: string) => Promise<string | null>,
  retries = 5,
) {
  let attempt = 0
  let response = null

  while (attempt < retries && !response) {
    const modelName = modelMap.get(attempt) || 'gemini-1.5-flash'
    response = await modelFn(modelName)
    attempt += 1
  }
  return response
}

interface GeminiPayload {
  message?: string
  history?: any
  prompt: string
  modelName: string
}
async function callGeminiSummarize({ modelName, prompt }: GeminiPayload): Promise<string | null> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? '')
  const generationConfig = {
    temperature: 0.2,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  }

  try {
    const model = genAI.getGenerativeModel({
      model: modelName,
      // systemInstruction: 'You are a strict JSON quiz generator. Follow the instructions carefully:',
    })
    // const chatSession = model.startChat({
    //   generationConfig,
    //   history: [
    //     {
    //       role: 'user',
    //       parts: [{ text: prompt }],
    //     },
    //   ],
    // })

    // const result = await chatSession.sendMessage('')
    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error: any) {
    console.error('Call gemini error:', error.message)
    sendTelegram('❌Generate quiz: Gemini error', error.message)
    return null
  }
}

export async function generateQuiz(language: string, quizzes: string, option: Option) {
  const prompt = generateSummaryPrompt(language, quizzes, option)
  console.log('Prompt:', prompt)
  return await retryWithBackoff((modelName) => callGeminiSummarize({ modelName, prompt }))
}

export async function generateChat(language: string, history: any, message: string) {
  const prompt = generateChatPrompt(language)
  return await retryWithBackoff((modelName) =>
    callGeminiSummarize({ modelName, history, prompt, message }),
  )
}
