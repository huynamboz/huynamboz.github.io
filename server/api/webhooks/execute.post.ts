import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { id, payload } = await readBody(event)
  const { data } = (await client.from('webhooks').select('*').eq('id', id)) as any

  if (!id || !payload || !data[0]) {
    throw errorHandler({ statusCode: 400, message: 'Missing id or payload' })
  }

  console.log(data[0], payload)
  return await $fetch(data[0].endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  })
})
