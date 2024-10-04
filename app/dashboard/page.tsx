'use client'

import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';
import { UsageTrack } from './_components/UsageTrack';
import Particles from '@/components/ui/particles';

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();

  return (
    <div className='dark:bg-black min-h-screen flex flex-col items-center p-5'>
      {/* Add a particles effect for a dynamic background */}
      <Particles className='absolute inset-0 z-0' />
      
      <div className='relative z-10 w-full max-w-3xl bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 mb-6'>
        <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      </div>

      <div className='relative z-10 w-full max-w-3xl bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg shadow-lg p-6 mb-6'>
        <TemplateListSection searchInput={userSearchInput} />
      </div>

      <UsageTrack />

      <p className='text-center text-gray-300 mt-5'>
        Many more on the way...
      </p>
      <br />
    </div>
  );
}

export default Dashboard;
