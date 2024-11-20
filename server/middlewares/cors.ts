export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*', // Cho phép tất cả các nguồn gốc
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  })

  // Xử lý các yêu cầu OPTIONS
  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204 // No Content
    event.node.res.end()
  }
})
