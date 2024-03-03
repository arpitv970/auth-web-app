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

const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

export const RegisterSchema = z.object({
  name: z.string({
    required_error: 'Enter your Name',
  }),
  email: z.string({
    required_error: 'Email is requried',
    invalid_type_error: 'Enter a valid Email Address'
  }).email(),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(passwordRegex, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    })
    .refine(value => value.trim().length > 0, {
      message: 'Password is required'
    })
})
