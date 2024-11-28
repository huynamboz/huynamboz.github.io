import { modelAI } from '~/server/utils/models'

export default defineEventHandler(() => {
  console.log('modelAI', modelAI)
  return modelAI
})
