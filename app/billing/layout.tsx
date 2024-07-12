'use client'
import React, { useState } from 'react'
import SideNav from '../dashboard/_components/SideNav'
import { ThemeProvider } from '@/components/ThemeProv'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import Header from '../dashboard/_components/Header'


function layout({children,}:Readonly<{children:React.ReactNode}>) {

  const [total,setTotal]=useState<Number>(0)
  return (
    <TotalUsageContext.Provider value={{total,setTotal}}>
    <div className='bg-slate-100 h-screen dark:bg-black' suppressHydrationWarning={true}>
        <div className='md:w-64 hidden md:block fixed bg-white'>
            <SideNav />
        </div>
        <div className='md:ml-64'>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            </ThemeProvider>
        </div>
    </div>
    </TotalUsageContext.Provider>
  )
}

export default layout