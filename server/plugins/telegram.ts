export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('telegram', async (data: any) => {
    try {
      console.log('Call tele')
      await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        body: {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `
  <b> dcmmm</b>
  `,
          parse_mode: 'HTML',
        },
      })
    } catch (error) {
      console.error('Send telegram error:', error)
    }

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
  })
  })
