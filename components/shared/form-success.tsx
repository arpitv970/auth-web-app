import React from 'react'
import { PiCheckCircle } from 'react-icons/pi'

interface PropsType {
  message?: string
}

const FromSuccess = ({ message }: PropsType) => {
  if (!message) return null;
  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <PiCheckCircle className='h-5 w-5' />
      <p>{message}</p>
    </div>
  )
}

export default FromSuccess
