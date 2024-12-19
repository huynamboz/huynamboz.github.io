import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { mailContent } = await readBody(event)

  // Dùng regex để trích xuất amount và description
  const amountMatch = mailContent.match(/tăng\s([\d,.]+)\sVND/)
  const descriptionMatch = mailContent.match(/Mô tả:\s*([^<]+)<\/p>/)

  // Xử lý số tiền: loại bỏ dấu phân cách (',' và '.')
  const amount = amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '').replace(/\./g, '')) : 0

  // Lấy mô tả giao dịch
  const description = descriptionMatch ? descriptionMatch[1].trim() : 'No description'

  // Ghi thông tin vào database
  const { data, error } = await client
    .from('payments')
    .insert({ description, price: amount } as any)

  console.log({ data, error })
  if (error) {
    throw errorHandler({ statusCode: 400, message: error.message })
  }

  return {
    description,
    amount,
  }
})
