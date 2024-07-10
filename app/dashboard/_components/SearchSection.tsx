'use client'; 

import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-purple-500 flex flex-col justify-center items-center text-white dark:bg-gray-600'>
        <h2 className='text-3xl font-bold'>
            Browse Anything
        </h2>
        <p>What are you looking for?</p>
        <br />
        {/*<div>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl bg-white'>
                <Search className='text-gray-700' />
                <input type='text' placeholder='Search' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-gray-600' /> 
            </div>
        </div>*/}
    </div>
  )
}

export default SearchSection