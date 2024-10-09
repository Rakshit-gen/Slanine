import { SignIn, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
  
  return (
    <div className='flex items-center h-screen justify-center self-center'>
    <SignIn />
    </div>
  )
}

export default page