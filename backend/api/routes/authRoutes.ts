import { Router } from 'express'
import { login, register, profile } from '../controllers/authController'

import validateBody from '../middlewares/bodyValidator.middleware'
import {
  loginSchema,
  registerUserSchema,
} from '../validatorSchemas/auth.schema'

const authRouter = Router()

authRouter.post('/register', validateBody(registerUserSchema), register)
authRouter.post('/login', validateBody(loginSchema), login)
authRouter.get('/profile', profile)

export default authRouter
