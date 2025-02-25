export default class CustomError extends Error {
  statusCode: number
  code: string

  constructor(message: string, statusCode: number, code: string) {
    super(message)
    this.statusCode = statusCode
    this.code = code
  }
}

export const UserNotFound = new CustomError(
  'Usuario no encontrado',
  404,
  'USER_NOT_FOUND'
)

export const InvalidCredentials = new CustomError(
  'Credenciales inválidas',
  401,
  'INVALID_CREDENTIALS'
)
