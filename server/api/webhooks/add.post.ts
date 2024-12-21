import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { endpoint } = await readBody(event)
  // add the webhook to the database
  const { data } = await client.from('webhooks').insert({ endpoint })
  console.log(data)
  if (data) {
    return data
  } else {
    return []
  }
})
