export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('telegram', async (message: string, code?: object) => {
    try {
      console.log('Call tele')
      await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        body: {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `
  <b> ${message}</b>
  ${code ? `<code>${JSON.stringify(code, null, 2)}</code>` : ''}
  `,
          parse_mode: 'HTML',
        },
      })
    } catch (error) {
      console.error('Send telegram error:', error)
    }
  })
})
