import { z } from 'zod'

import { serverSupabaseClient } from '#supabase/server'

// Chỉ có clap hoặc wow hoặc look
const paramsSchema = z.object({
  clap: z.string(),
  wow: z.string(),
  look: z.string(),
})

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const params = getRouterParam(event, 'name')

  if (!params) {
    throw errorHandler({ statusCode: 400, message: 'Invalid params' })
  }

  // Lấy giá trị hiện tại của cột
  const { data: currentData } = await client.from('reacts').select(params).eq('id', 1)

  if (currentData && currentData.length > 0) {
    // Tăng giá trị lên 1
    const currentValue = currentData[0][params]
    const newValue = currentValue + 1

    // Cập nhật giá trị mới
    const { data: updatedData } = await client
      .from('reacts')
      .update({ [params]: newValue })
      .eq('id', 1)
      .select(params)

    if (updatedData) {
      return { data: updatedData[0] }
    } else {
      return { data: null }
    }
  } else {
    return { data: null }
  }
})
