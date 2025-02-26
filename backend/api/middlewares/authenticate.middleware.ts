import { NextFunction, Request, Response } from 'express'

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.get('Authorization')

  // if (!token) {
  //   // throw
  // }
}
