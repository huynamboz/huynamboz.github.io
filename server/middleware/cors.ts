export default defineEventHandler((event) => {
  const { req, res } = event.node

  // Set CORS headers
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Origin': '*', // Replace '*' with specific origin in production
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Expose-Headers': '*',
  })

  // Handle preflight (OPTIONS) requests
  if (req.method === 'OPTIONS') {
    res.statusCode = 204 // No Content
    res.statusMessage = 'No Content'
    return null // End the request
  }

  // Your normal logic for other request types (GET, POST, etc.)
  console.log('event.method:', req.method)
})
