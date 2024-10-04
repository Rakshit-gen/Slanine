import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-10 shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl dark:bg-white/10">
        <UserProfile />
      </div>

      {/* Floating Animation Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-indigo-500 rounded-full opacity-30 w-96 h-96 blur-3xl animate-float"></div>
        <div className="absolute bg-pink-500 rounded-full opacity-30 w-72 h-72 blur-2xl bottom-0 right-0 animate-float delay-1500"></div>
      </div>

      {/* Keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Page
