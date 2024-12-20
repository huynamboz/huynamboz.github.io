import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data } = await client.from('payments').select('*')
  console.log(data)
  if (data) {
    return data
  } else {
    return null
  }
})
