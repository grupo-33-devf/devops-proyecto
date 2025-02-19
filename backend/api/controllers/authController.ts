import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { Request, Response } from 'express'

import UserModel from '../models/User.model'

import config from '../config'

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

const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (user) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (passwordMatch) {
        const token = jwt.sign(
          {
            userID: user.id,
          },
          config.token.secret as string
        )
        res.json({
          token,
        })
        return
      }
    }

    res.status(401).json({
      msg: 'Invalid credentials',
      user,
      pass: req.body.password,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      msg: 'BadLogin',
    })
  }
}

export { register, login }
