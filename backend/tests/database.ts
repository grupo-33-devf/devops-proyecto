import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongo: MongoMemoryServer

const connectDB = async () => {
  mongo = await MongoMemoryServer.create()
  const MONGO_URI = mongo.getUri()
  await mongoose.connect(MONGO_URI)
}

const disconnectDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
}

const clearDB = async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    await collections[key].deleteMany()
  }
}

export { clearDB, connectDB, disconnectDB }
