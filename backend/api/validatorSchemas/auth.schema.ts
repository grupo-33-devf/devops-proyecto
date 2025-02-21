import joi from 'joi'
const registerUserSchema = joi.object({
  user: joi
    .object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),

      birthday: joi.date().required(),
      phone: joi.string().optional(),
      address: joi.string(),
      email: joi.string().email().required(),
      password: joi.string().required(),
    })
    .required(),
})

const loginSchema = joi.object({})

export { registerUserSchema, loginSchema }
