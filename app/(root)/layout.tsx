
import { isAuthenticated } from '@/lib/action.ts/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const RootLayout = async ({children}:{children:ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap2'>
       <Image 
            src="logo.svg"
            alt='logo'
            className='flex items-center gap-2'
            width={38}
            height={32}
        />
       <h2 className='gap-5 text-primary-100'>PrepMate</h2>
        </Link>

      </nav>
      {children}
    </div>
  )
}

export default RootLayout;