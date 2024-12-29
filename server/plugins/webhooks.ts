interface WebhookData {
  data: {
    amount: number
    description: string
    transaction_time: string
  }
  webhookUrls: string[]
}
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('webhooks', (data: WebhookData) => {
    callWebhooks(data)
  })
})

export const callWebhooks = async (data: WebhookData) => {
  const { data: webhookData, webhookUrls } = data
  console.log('Webhook executing --------------->>>', webhookUrls)
  sendTelegram('Send webhook')
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
          sendTelegram('Send webhook error', error)
          return null // Trả về null nếu có lỗi để không làm reject Promise.all
        }),
      ),
    )
  } catch (error) {
    console.error('Webhook error:', error)
    sendTelegram('Call webhook error', error as any)
  }
}
