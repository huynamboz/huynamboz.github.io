interface WebhookData {
  data: {
    amount: number
    description: string
    transaction_time: string
  }
  webhookUrls: string[]
}
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('webhooks:call', async (data: WebhookData) => {
    const { data: webhookData, webhookUrls } = data
    console.log('Webhook executing --------------->>>', webhookUrls)
    nitroApp.hooks.callHook('telegram', webhookUrls.join(','))
    try {
      await Promise.all(
        webhookUrls.map((url) =>
          $fetch(url, {
            method: 'POST',
            body: webhookData,
            headers: {
              'Content-Type': 'application/json',
            },
          }).catch((error) => {
            console.error(`Error with URL ${url}:`, error)
            nitroApp.hooks.callHook('telegram', 'Webhook error', error)
            return null // Trả về null nếu có lỗi để không làm reject Promise.all
          }),
        ),
      )
    } catch (error) {
      console.error('Webhook error:', error)
    }
  })
})
