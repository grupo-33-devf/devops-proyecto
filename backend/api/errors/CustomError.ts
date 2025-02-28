export default class CustomError extends Error {
  statusCode: number
  code: string

  constructor(message: string, statusCode: number, code: string) {
    super(message)
    this.statusCode = statusCode
    this.code = code
  }
}

export enum ERROR_CODES {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  DUPLICATED_USER = 'DUPLICATED_USER',
}

export const UserNotFound = new CustomError(
  'Usuario no encontrado',
  404,
  ERROR_CODES.USER_NOT_FOUND
)

export const InvalidCredentials = new CustomError(
  'Credenciales inválidas',
  401,
  ERROR_CODES.INVALID_CREDENTIALS
)

export const DuplicatedUser = new CustomError(
  'Usuario ya existente',
  409,
  ERROR_CODES.DUPLICATED_USER
)
