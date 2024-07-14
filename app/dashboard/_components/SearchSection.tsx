'use client'; 

import { Search } from 'lucide-react'
import React from 'react'
import { UsageTrack } from './UsageTrack';
import MovingCards from '@/components/InfiniteCards2';

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-blue-300 to-amber-300 text-black'>
    <div className='p-8 bg-transparent flex flex-col justify-center items-center text-black dark:text-gray-300 dark:bg-gray-600'>
    <h1
        className="bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl z-10"
      >
        Hot Today
      </h1>
      <br />
    <div className='dark:bg-gray-600'>
    <MovingCards />
    </div>
    <div className='dark:bg-slate-700 w-[70%] md:hidden lg:hidden'>
      
      <UsageTrack />
      </div>
        {/*<div>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl bg-white'>
                <Search className='text-gray-700' />
                <input type='text' placeholder='Search' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-gray-600' /> 
            </div>
        </div>*/}
        
    </div>
    
    
    </div>
    
  )
}

export default SearchSection