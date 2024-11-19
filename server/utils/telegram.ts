export async function sendTelegram(message: string, code?: object) {
  try {
    await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: '5388377771',
        text: `
<b> ${message}:</b>
${code ? `<code>${JSON.stringify(code, null, 2)}</code>` : ''}
`,
        parse_mode: 'HTML',
      },
    })
  } catch (error) {
    console.error('Send telegram error:', error)
  }
}
