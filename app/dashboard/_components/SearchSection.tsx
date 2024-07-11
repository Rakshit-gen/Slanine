'use client'; 

import { Search } from 'lucide-react'
import React from 'react'
import { UsageTrack } from './UsageTrack';

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-blue-300 to-amber-300 text-black'>
    <div className='p-10 bg-transparent flex flex-col justify-center items-center text-black dark:text-gray-300 dark:bg-gray-600'>
    <div className='dark:bg-slate-700 w-[70%] md:hidden lg:hidden'>
      <UsageTrack />
      </div>
      <br />
        <h2 className='text-3xl font-bold'>
            Browse Anything
        </h2>
        <p className='font-semibold'>What are you looking for?</p>
        <br />
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