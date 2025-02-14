import mongoose from 'mongoose'

import config from './config'

mongoose.connection.on('open', () => {
  console.info('Database connected 💚')
})

mongoose.connection.on('disconnected', () => {
  console.info('Database disconnected 💖')
})

if (config.database.uri) {
  mongoose.connect(config.database.uri)
} else {
  throw new Error('MONGO_URI undefined in .env file')
}
