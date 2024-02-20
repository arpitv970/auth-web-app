import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string({
    required_error: 'Email is requried',
    invalid_type_error: 'Enter a valid Email Address'
  }).email(),
  password: z.string().min(1, {
    message: 'Password is required'
  })
})

export const RegisterSchema = z.object({
  name: z.string({
    required_error: 'Enter your Name',
  }),
  email: z.string({
    required_error: 'Email is requried',
    invalid_type_error: 'Enter a valid Email Address'
  }).email(),
  password: z.string().min(1, {
    message: 'Password is required'
  })
})
