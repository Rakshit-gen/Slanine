import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center h-screen justify-center self-center'>
    <SignUp />
    </div>
  )
}

export default page