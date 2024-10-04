'use client'; 

import { Search } from 'lucide-react';
import React from 'react';
import { UsageTrack } from './UsageTrack';
import MovingCards from '@/components/InfiniteCards2';

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className='bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400 text-white'>
      <div className='flex flex-col justify-center items-center p-10'>
        <h1 className="bg-gradient-to-l from-indigo-400 via-pink-500 to-yellow-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl transition-transform transform hover:scale-110 z-10">
          Hot Today
        </h1>
        <br />
        
        <div className='w-full max-w-4xl mx-auto'>
          <div className='relative flex items-center border border-white rounded-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 transition-transform duration-300 hover:text-white' />
            <input
              type='text'
              placeholder='Search...'
              onChange={(event) => onSearchInput(event.target.value)}
              className='pl-10 pr-4 py-2 w-full bg-transparent outline-none text-gray-300 placeholder-gray-500 transition-colors duration-300 focus:text-white focus:border-b-2 focus:border-white'
            />
          </div>
        </div>

        <div className='mt-8 w-full'>
          <MovingCards />
        </div>

        <div className='dark:bg-slate-700 w-[70%] md:hidden lg:hidden mt-8'>
          <UsageTrack />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
