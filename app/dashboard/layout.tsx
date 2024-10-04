'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProv'
import { TotalUsageContext } from '../(context)/TotalUsageContext'

// Load the Inter font
const inter = Inter({ subsets: ['latin'] })

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [total, setTotal] = useState<number>(0)

  return (
    <TotalUsageContext.Provider value={{ total, setTotal }}>
      <div className="bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-600 h-screen overflow-hidden">
        {/* Side Navigation */}
        <div className="md:w-64 hidden md:block fixed bg-white/30 backdrop-blur-lg shadow-lg">
          <SideNav />
        </div>
        
        {/* Main Content */}
        <div className="md:ml-64 relative">
          <Header />
          
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className={`p-6 ${inter.className}`}>
              {children}
            </div>
          </ThemeProvider>
        </div>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-pink-400 rounded-full opacity-20 w-72 h-72 blur-3xl animate-pulse slow-spin"></div>
        <div className="absolute bg-indigo-400 rounded-full opacity-20 w-96 h-96 blur-2xl right-10 animate-pulse slow-spin-reverse"></div>
      </div>
      
      <style jsx>{`
        .slow-spin {
          animation: spin 20s linear infinite;
        }
        .slow-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </TotalUsageContext.Provider>
  )
}

export default Layout
