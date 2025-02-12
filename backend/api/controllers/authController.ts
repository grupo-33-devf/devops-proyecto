import { Request, Response } from 'express'

const register = async (req: Request, res: Response) => {
  console.log(req.body)
  res.json({
    msg: 'Esto funciona',
  })
}

const login = async () => {}

export { register, login }
