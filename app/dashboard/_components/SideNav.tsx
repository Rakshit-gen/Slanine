"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import { History, Home, MonitorSmartphone, Settings, Wallet } from 'lucide-react'
import { usePathname } from 'next/navigation';

const SideNav = () => {
    const MenuList=[{
        name:'Home',
        icons:Home,
        path:'/dashboard'
    },{
        name:'Billing',
        icons:Wallet,
        path:'/dashboard/billing'
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
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image src='/logo.svg' alt='logo' width={50} height={50}></Image>
        </div>
        <hr className='my-6' />

        <div className='mt-5'>
            {MenuList.map((menu,index)=>(
                <div className={`flex rounded-2xl gap-2 mb-2 p-3 border-b hover:bg-blue-500 hover:text-white rounded-lg${path===menu.path&&'text-white bg-blue-500'}`}>
                    <menu.icons />
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>

  )
}

export default SideNav