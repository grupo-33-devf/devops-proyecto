import express from 'express'
import authRouter from './routes/authRoutes'
import cors from 'cors'
import errorHandler from './errors/errorHandler'
import { globalLogger } from './utils/logger'

const api = express()

api.use(express.json())
api.use(cors())

api.use(globalLogger)

api.get('/', (req, res) => {
  res.json({
    msg: 'todo bien',
  })
})

api.use('/auth', authRouter)

// Custom error handler
api.use(errorHandler)

export default api
