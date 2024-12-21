import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { id } = await readBody(event)
  // delete the webhook to the database
  if (!id) {
    return { error: 'No id provided' }
  }
  const { data } = await client.from('webhooks').delete().match({ id })
  console.log(data)
  if (data) {
    return data
  } else {
    return []
  }
})
