import express from 'express'
import authRouter from './routes/authRoutes'
import cors from 'cors'

const api = express()

api.use(express.json())
api.use(cors())

api.get('/', (req, res) => {
  res.json({
    msg: 'todo bien',
  })
})

api.use('/auth', authRouter)

// Custom error handler
// api.use((err, req, res, next) => {})

export default api
