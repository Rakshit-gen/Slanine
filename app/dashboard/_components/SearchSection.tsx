'use client'; 

import { Search } from 'lucide-react'
import React from 'react'
import { UsageTrack } from './UsageTrack';
import MovingCards from '@/components/InfiniteCards2';
import { Button } from '@/components/ui/button';

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='bg-gradient-to-r from-purple-300 via-blue-200 to-amber-300 text-black'>
    <div className='p-8 bg-transparent flex flex-col justify-center items-center text-black dark:text-gray-300 dark:bg-[#060b27]'>
    <h1
        className="dark:text-white bg-gradient-to-l from-indigo-400 via-pink-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-black sm:text-5xl z-10 hidden md:flex"
      >
        Hot Today
      </h1>
      <br />
    <div className='w-full hidden md:flex'>
    <MovingCards />
    </div>
    <div className='p-6'>
      <a href={'/dashboard/history'}><Button className='bg-white md:hidden font-bold text-black hover:bg-gray-600 hover:text-white'>History</Button></a>
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
