import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Header from './header'
import Social from './social'
import BackButton from './back-btn'

interface PropsType {
  children: React.ReactNode,
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string,
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: PropsType) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {
        showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )
      }
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
