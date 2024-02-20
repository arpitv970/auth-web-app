import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-dark">
      <section className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold drop-shadow-md",
          font.className,
        )}
        >Auth</h1>
        <p className="text-lg">A simple Authentication Service</p>

        <div>
          <LoginButton>
            <Button size={'lg'}>Sign In</Button>
          </LoginButton>
        </div>
      </section>
    </main>
  );
}
