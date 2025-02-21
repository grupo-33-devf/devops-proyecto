import { NextFunction, Request, Response } from 'express'
import joi from 'joi'

const validateBody =
  (schema: joi.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    /**
     * Validar el body según un schema
     *
     * Si el body es válido, req.body = resultado validación llamamos la fn next()
     *
     * si no, respondemos un status 400
     */

    try {
      const value = await schema.validateAsync(req.body)
      req.body = value

      next()
    } catch (err) {
      res.status(400).json({
        msg: 'Body inválido',
        err,
      })
    }
  }

export default validateBody
