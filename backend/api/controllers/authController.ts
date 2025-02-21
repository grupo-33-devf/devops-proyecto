import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { Request, Response } from 'express'

import UserModel from '../models/User.model'

import config from '../config'

type PayloadToken = {
  userId: string
  exp?: number
}

const register = async (req: Request, res: Response) => {
  const newPassword = await bcrypt.hash(req.body.user.password, 10)

  await UserModel.create({
    ...req.body.user,
    password: newPassword,
  })

  res.status(201).json({
    code: 'NEW_USER',
  })
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
        const payload: PayloadToken = {
          userId: user.id,
        }
        const token = jwt.sign(payload, config.token.secret as string)
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

const profile = async (req: Request, res: Response) => {
  console.log('Entrando a controller')

  const token = req.get('Authorization')

  if (token) {
    console.log('Token', token)

    try {
      const payload: PayloadToken = jwt.verify(
        token,
        config.token.secret as string
      ) as PayloadToken
      const user = await UserModel.findById(
        payload.userId,
        '-phone -address -password'
      )

      if (!user) {
        res.status(401).json({
          msg: 'InvalidToken',
        })
      }
      res.json({
        user,
      })
    } catch (error) {
      console.error(error)

      res.status(500).json({
        msg: 'Error al verificar token perfil',
      })
    }
  } else {
    res.status(401).json({
      msg: 'Missing token',
    })
  }
}

export { register, login, profile }
