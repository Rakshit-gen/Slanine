import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProv'

const inter= Inter({subsets:['latin']})

function layout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <body className={inter.className}>

    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed bg-white'>
            <SideNav />
        </div>
        <div className='md:ml-64'>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            </ThemeProvider>
        </div>
    </div>
    </body>
  )
}

export default layout