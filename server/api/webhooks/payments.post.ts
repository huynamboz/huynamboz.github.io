import { serverSupabaseClient } from '#supabase/server'
import { callWebhooks } from '~/server/plugins/webhooks'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { transactions } = await readBody(event) // Lấy mảng giao dịch từ body request
  const nitroApp = useNitroApp()
  const { data: webhooks } = await client.from('webhooks').select('*')

  if (!transactions || !Array.isArray(transactions)) {
    throw errorHandler({ statusCode: 400, message: 'Invalid transactions data' })
  }

  // Lấy thời gian giao dịch mới nhất trong database bằng transaction_time
  const { data: latestPayment, error: fetchError } = await client
    .from('payments')
    .select('created_at, transaction_time')
    .order('created_at', { ascending: false })
    .limit(1)

  if (fetchError) {
    throw errorHandler({ statusCode: 400, message: fetchError.message })
  }

  const latestTransactionTime = latestPayment?.[0]?.transaction_time || null

  // Đếm số giao dịch được thêm vào DB
  let addedTransactionsCount = 0

  // Duyệt qua các giao dịch
  for (const transaction of transactions) {
    const transactionTime = transaction.transactionTime // Sử dụng transactionTime từ body request

    if (!transactionTime) {
      throw errorHandler({ statusCode: 400, message: 'Invalid transaction time' })
    }

    // Nếu giao dịch cũ hơn giao dịch mới nhất, dừng hàm
    console.log(transactionTime, latestTransactionTime, transactionTime <= latestTransactionTime)
    if (latestTransactionTime && transactionTime <= latestTransactionTime) {
      break
    }

    // Thêm giao dịch mới vào database
    const { error } = await client.from('payments').insert({
      description: transaction.txnDesc || 'No description',
      price: transaction.txnAmount || 0,
      transaction_time: transactionTime, // Lưu transaction_time dưới dạng chuỗi
    } as any)

    if (error) {
      throw errorHandler({ statusCode: 400, message: error.message })
    }

    // Tăng số lượng giao dịch đã được thêm vào
    addedTransactionsCount++

    // Gửi thông báo qua Telegram
    // Gửi thông báo webhook

    // nitroApp.hooks.callHook('webhooks', {
    //   data: {
    //     amount: transaction.txnAmount,
    //     description: transaction.txnDesc,
    //     transaction_time: transaction.txnTimeTimestamp,
    //   },
    //   webhookUrls: webhooks ? webhooks.map((webhook) => (webhook as any).endpoint) : [],
    // })
    await callWebhooks({
      data: {
        amount: transaction.txnAmount,
        description: transaction.txnDesc,
        transaction_time: transaction.txnTimeTimestamp,
      },
      webhookUrls: webhooks ? webhooks.map((webhook) => (webhook as any).endpoint) : [],
    })
  }
  if (addedTransactionsCount > 0)
    nitroApp.hooks.callHook('telegram', `${addedTransactionsCount}$ processed successfully`)

  // Trả về số lượng giao dịch đã được thêm vào
  return { message: `${addedTransactionsCount} transactions processed successfully` }
})
