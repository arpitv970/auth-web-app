import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

interface PropsType {
  label: string,
}

const Header = ({ label }: PropsType) => {
  return (
    <div
      className='flex flex-col justify-center items-center w-full gap-y-4'
    >
      <h1 className={cn(
        'text-3xl font-semibold',
        font.className
      )}>
        Auth
      </h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  )
}

export default Header
