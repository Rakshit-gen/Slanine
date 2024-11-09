import Preloader from '@/components/Preloader'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center w-full justify-center h-full dark:bg-[#080d2b]'>
      <Preloader />
      <UserProfile />
    </div>
  )
}

export default page