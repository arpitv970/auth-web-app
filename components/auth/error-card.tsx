import CardWrapper from '@/components/shared/CardWrapper'
import { PiWarningCircle } from 'react-icons/pi'

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! something went wrong'
      backButtonHref='/auth/login'
      backButtonLabel='Back to Login'
    >
      <div className='w-full flex justify-center items-center'>

        <PiWarningCircle size={50} className='text-destructive' />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
