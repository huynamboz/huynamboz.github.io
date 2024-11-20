export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
  })

  // Xử lý các yêu cầu OPTIONS
  if (event.method === 'OPTIONS') {
    event.res.statusCode = 204
    event.res.statusMessage = 'No Content.'
    return 'OK'
  }
})
