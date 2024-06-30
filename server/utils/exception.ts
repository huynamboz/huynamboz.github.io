import { type H3Error, createError } from 'h3'
export const errorHandler = (error: { statusCode: number; message: string }): H3Error<unknown> => {
  return createError({
    statusCode: error.statusCode,
    statusMessage: error.message,
  })
}
