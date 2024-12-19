import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { description, amount } = await readBody(event)

  const { data, error } = await client.from('payments').insert({ description, price: amount })

  if (error) {
    throw errorHandler({ statusCode: 400, message: error.message })
  }

  return { data }
})
