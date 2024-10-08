"use client";

import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { History, Home, LayoutDashboard, MonitorSmartphone, Settings, Wallet,SidebarClose, ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation';
import { UsageTrack } from './UsageTrack';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

const SideNav = () => {
    const MenuList=[{
        name:'Dashboard',
        icons:LayoutDashboard,
        path:'/dashboard'
    },{
        name:'History',
        icons:History,
        path:'/dashboard/history'
    },{
        name:'Billing',
        icons:Wallet,
        path:'/billing'
    },{
        name:'Settings',
        icons:Settings,
        path:'/dashboard/settings'
    }]
    const path = usePathname();

    useEffect(()=>{
        console.log(path)
    },[])
    

  return (
    <div className='bg-[#080d2b]'>
    {/* <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'> */}
    <div className='h-screen p-5 shadow-lg border bg-white dark:bg-transparent dark:text-white'>
        
        <div className='flex justify-center gap-3 pr-3'>
        <Link href="/"><Image src='/logo.svg' alt='logo' width={100} height={100}></Image></Link>
        {/*
        <h1 className='mt-1 text-3xl dark:text-white'>
        <span className='text-teal-500 dark:text-teal-300'>S</span>la<span className='text-teal-500 dark:text-teal-300'>ni</span>ne
        </h1>
        */}
        </div>
        
        
        <hr className='my-6' />

        <div className=' font-bold'>
            {MenuList.map((menu,index)=>(
                <Link key={index} href={menu.path}>
                <div className={`flex rounded-2xl gap-2 mb-2 p-3 border-b hover:bg-blue-500 hover:text-white rounded-lg${path===menu.path&&'m-2 text-white bg-blue-500'}`}>
                    <menu.icons />
                    <h2>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack />
        </div>
    </div>
    </div>

  )
}

export default SideNav


