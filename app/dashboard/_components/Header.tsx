import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between'>
        <div className='flex gap-2 items-center p-2 border rounded-lg max-w-lg'>
            <Search />
            <input type='text' placeholder='Search...'
            className='outline-none '
            />
        </div>
    <div>
        <h2 className='bg-blue-400 p-1 rounded text-xs text-white px-2 hidden md:block lg:block'>Join Membership for just $7.99/month</h2>
    </div>
    </div>
  )
}

export default Header