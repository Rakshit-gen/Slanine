import { SignIn, useAuth } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  
  return (
    <div className='flex items-center h-screen justify-center self-center'>
     <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      forceRedirectUrl="/dashboard"          // 👈 after sign-in, always go here
      signUpForceRedirectUrl="/dashboard"    // 👈 after sign-up, always go here
    />
    </div>
  )
}

export default page