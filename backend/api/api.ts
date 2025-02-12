import express from 'express'
import authRouter from './routes/authRoutes'

const api = express()

api.get('/', (req, res) => {
  res.json({
    msg: 'todo bien',
  })
})

api.use('/auth', authRouter)

export default api
