import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data } = await client.from('reacts').select('*')
  console.log(data)
  if (data) {
    return { data: data[0] }
  } else {
    return { data: null }
  }
})
