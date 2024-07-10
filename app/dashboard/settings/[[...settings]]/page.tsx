import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-full dark:bg-black'>
    <UserProfile />
    </div>
  )
}

export default page