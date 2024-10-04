import { Search } from 'lucide-react';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@/components/ModeToggle';

const Header = () => {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <UserButton />
          <h2 className="bg-blue-500 p-2 rounded-md text-xs text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-400">
            🔥 Join Membership for just $7.99/month 🔥
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-md bg-white dark:bg-slate-700 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition duration-200"
            />
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
