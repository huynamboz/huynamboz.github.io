import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { transaction } = await readBody(event) // Lấy body chứa thông tin giao dịch

  // Trích xuất thông tin giao dịch từ body
  const amount = transaction.txnAmount || 0 // Số tiền giao dịch
  const description = transaction.txnDesc || 'No description' // Mô tả giao dịch
  const transactionTime = new Date(transaction.txnTimeTimestamp) // Thời gian giao dịch

  if (!transactionTime) {
    throw errorHandler({ statusCode: 400, message: 'Transaction time is missing' })
  }

  // Lấy thời gian giao dịch mới nhất trong database
  const { data: latestPayment, error: fetchError } = await client
    .from('payments')
    .select('created_at')
    .order('created_at', { ascending: false })
    .limit(1)

  if (fetchError) {
    throw errorHandler({ statusCode: 400, message: fetchError.message })
  }

  // Kiểm tra nếu giao dịch mới có thời gian mới hơn giao dịch trong database
  const latestTransactionTime =
    latestPayment && latestPayment[0] ? new Date(latestPayment[0].created_at) : null

  if (!latestTransactionTime || transactionTime > latestTransactionTime) {
    // Ghi thông tin vào database
    const { data, error } = await client
      .from('payments')
      .insert({ description, price: amount, created_at: transactionTime } as any)

    console.log({ data, error })
    if (error) {
      throw errorHandler({ statusCode: 400, message: error.message })
    }

    return {
      description,
      amount,
      transactionTime,
    }
  } else {
    // Nếu giao dịch không mới hơn, không thêm vào database
    return {
      message: 'Transaction is older than the latest one in the database.',
    }
  }
})
