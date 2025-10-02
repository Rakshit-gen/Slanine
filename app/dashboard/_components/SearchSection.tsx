'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { UsageTrack } from './UsageTrack';
import MovingCards from '@/components/InfiniteCards2';
import { Button } from '@/components/ui/button';
import { ColourfulText } from '@/components/ui/colorful-text';

const SearchSection = ({ onSearchInput }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchInput(value); // Call the parent handler to update search input state
  };

  return (
    <div className="bg-gray-300 text-black">
      <div className="p-8 bg-transparent flex flex-col justify-center items-center text-black dark:text-gray-300 dark:bg-[#050d36]">
        <h1 className="bg-clip-text text-2xl font-mono text-transparent z-10 hidden md:flex">
          <ColourfulText text="Cool Prompts for you" colors={["rgb(131, 179, 32)","rgb(47, 195, 106)","rgb(42, 169, 210)","rgb(4, 112, 202)","rgb(107, 10, 255)","rgb(183, 0, 218)","rgb(218, 0, 171)","rgb(230, 64, 92)","rgb(232, 98, 63)","rgb(249, 129, 47)"]} />
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
        <div className="dark:bg-slate-800 w-[80%] md:w-[50%] my-4 rounded-lg">
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
