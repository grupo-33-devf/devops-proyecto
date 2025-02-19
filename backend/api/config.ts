import dotenv from 'dotenv'

dotenv.config()

const config = {
  database: {
    uri: process.env.MONGO_URI,
  },
  token: {
    secret: process.env.JWT_SECRET,
  },
}

export default config
