
"use client";

import { SignIn } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import Particles from "@/components/ui/particles";
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link'; 
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";


const page = () => {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const changeTheme = () => {
    if(theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark");
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      changeTheme();
    }
  }

  return (
    <div className='relative flex items-center h-screen justify-center dark:bg-[#040715] bg-slate-100'>
      <Particles
        className="absolute inset-0 h-full"
        quantity={350}
        ease={90}
        color={color}
        refresh
      />
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-4 top-3 z-20"
      >
        <Link href="/">
          <Button 
            variant="ghost" 
            className="group flex items-center gap-2 text-base hover:text-orange-400 text-orange-500 font-bold transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10"
          >
            <IoArrowBack className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>
        </Link>
      </motion.div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute right-4 top-3 z-20"
      >
        <div 
          onClick={changeTheme} 
          onKeyDown={handleKeyDown}
          className="cursor-pointer border-2 border-gray-500 rounded-lg h-[2.5rem] w-[2.5rem] flex justify-center items-center hover:border-orange-400 transition-all duration-300 hover:scale-110"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          role="button"
          tabIndex={0}
        >
          {theme === 'light' ? 
            <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" /> :
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-400" />
          }
        </div>
      </motion.div>
      <div className='absolute z-10 flex items-center h-screen justify-center self-center'>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-black dark:text-white">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default page;
