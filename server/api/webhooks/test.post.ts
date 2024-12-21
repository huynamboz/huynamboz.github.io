export default eventHandler(async (event) => {
  const { amount, description } = await readBody(event)
  console.log('Webhook test:', amount, description)
  return { amount, description }
})
