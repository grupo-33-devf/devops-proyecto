import { NextFunction, Request, Response } from 'express'
import CustomError from './CustomError'

export default (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  /**
   * Si es un error custom realizar acción custom
   */

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      msg: err.message,
      code: err.code,
    })
  } else {
    console.error(err)
    res.status(500).json({
      msg: 'Error desconocido',
      code: 'UNKNOWN_ERROR',
    })
  }
}
