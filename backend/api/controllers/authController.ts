import bcrypt from 'bcrypt'

import { Request, Response } from 'express'

import UserModel from '../models/User.model'

const register = async (req: Request, res: Response) => {
  try {
    const newPassword = await bcrypt.hash(req.body.user.password, 10)

    await UserModel.create({
      ...req.body.user,
      password: newPassword,
    })

    res.status(201).json({
      code: 'NEW_USER',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: 'Error General',
    })
  }
}

const login = async () => {}

export { register, login }
