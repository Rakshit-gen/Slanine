import { Search } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between'>
        <div className='flex gap-2 items-center p-2 border rounded-lg max-w-lg'>
            <Search />
            <input type='text' placeholder='Search...'
            className='outline-none '
            />
        </div>
        
    <div className='flex gap-4'>
    <UserButton />
        <h2 className='mt-2 bg-blue-400 p-1 rounded text-xs text-white px-2 hidden md:block lg:block w-fit h-fit'>Join Membership for just $7.99/month
          🔥🔥
        </h2>
    </div>
    
    </div>
  )
}

export default Header