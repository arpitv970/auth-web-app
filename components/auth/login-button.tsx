'use client'

import { useRouter } from "next/navigation"

interface LoginButtonProps {
  children: React.ReactNode,
  mode?: 'modal' | 'redirect',
  asChild?: boolean
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild
}: LoginButtonProps) => {

  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login')
    console.log('Login button clicked')
  }
  if (mode === 'modal') {
    return (
      <span>
        TODO: Implement Modal
      </span>
    )
  }
  return (
    <span
      onClick={handleLogin}
      className="cursor-pointer">
      {children}
    </span>
  )
}
