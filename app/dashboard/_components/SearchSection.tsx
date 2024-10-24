'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { UsageTrack } from './UsageTrack';
import MovingCards from '@/components/InfiniteCards2';
import { Button } from '@/components/ui/button';

const SearchSection = ({ onSearchInput }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchInput(value); // Call the parent handler to update search input state
  };

  return (
    <div className="bg-gray-300 text-black">
      <div className="p-8 bg-transparent flex flex-col justify-center items-center text-black dark:text-gray-300 dark:bg-[#060b27]">
        <h1 className="bg-gradient-to-l from-indigo-400 via-pink-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl z-10 hidden md:flex">
          Cool Prompts for you
        </h1>
        <br />
        
        <div className="p-6 hidden">
          <a href={'/dashboard/history'}>
            <Button
              name="history"
              className="bg-white md:hidden font-bold text-black hover:bg-gray-600 hover:text-white"
            >
              History
            </Button>
          </a>
        </div>
        <div className="dark:bg-slate-800 w-[50%] my-4">
          <div className="flex gap-2 items-center p-3 border rounded-md max-w-xl bg-white shadow-md dark:bg-gray-800 w-[100%]">
            <Search className="text-gray-700 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-transparent w-full outline-none text-gray-600 dark:text-gray-300"
            />
          </div>
        </div>
        <div className="dark:bg-slate-700 w-[70%] hidden lg:hidden">
          <UsageTrack />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
