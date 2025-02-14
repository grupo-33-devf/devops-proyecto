import dotenv from 'dotenv'

dotenv.config()

const config = {
  database: {
    uri: process.env.MONGO_URI,
  },
}

export default config
