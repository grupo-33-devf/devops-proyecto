import { Schema, model } from 'mongoose'

export type User = {
  firstName: string
  lastName: string
  birthday: Date
  phone?: number
  address?: string
  email: string
  password: string
}

const userSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default model('User', userSchema)
