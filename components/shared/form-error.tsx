import React from 'react'
import { PiWarningCircle } from 'react-icons/pi'

interface PropsType {
  message?: string
}

const FormError = ({ message }: PropsType) => {
  if (!message) return null;
  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <PiWarningCircle className='h-5 w-5' />
      <p>{message}</p>
    </div>
  )
}

export default FormError
