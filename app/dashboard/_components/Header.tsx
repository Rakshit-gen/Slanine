import { Search } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/ModeToggle'

const Header = () => {
  return (
    <div>
    <div className='p-5 shadow-sm border-b-2 flex justify-between m-auto items-center bg-gray-200 dark:bg-slate-800'>
        
    <div className='flex gap-4 pl-4'>
    <UserButton />
        <h2 className='mt-0.5 bg-blue-400 p-1 rounded text-xs text-white px-2 md:block lg:block w-fit h-fit'>🔥 Join Membership for just $7.99/month 🔥
        </h2>
    </div>
    <div className='pr-3'>
    <ModeToggle />
    </div>
    
    </div>
    </div>
  )
}

export default Header