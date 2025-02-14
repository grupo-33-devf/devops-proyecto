import express from 'express'
import authRouter from './routes/authRoutes'

const api = express()

api.use(express.json())

api.get('/', (req, res) => {
  res.json({
    msg: 'todo bien',
  })
})

api.use('/auth', authRouter)

export default api
