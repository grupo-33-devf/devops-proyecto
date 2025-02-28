import dotenv from 'dotenv'

dotenv.config()

const config = {
  database: {
    uri: process.env.MONGO_URI,
  },
  token: {
    secret: process.env.JWT_SECRET,
  },
  env: process.env.NODE_ENV,
}

if (config.env === 'development') {
  console.log(config)
}

export default config
