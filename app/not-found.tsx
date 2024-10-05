import React from 'react';
import Link from 'next/link';
import { Navbarb } from "@/components/Nav";
import Footer from "@/components/Footer";

const Custom404: React.FC = () => {
  return (
    <>
      <Navbarb />
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-gray-900 p-4">

        <div className="group relative flex flex-col items-center justify-center w-full max-w-lg h-[70%] md:max-w-3xl md:h-[480px] overflow-hidden rounded-xl bg-neutral-100 text-black dark:text-white cursor-pointer whitespace-normal dark:shadow-white border shadow-md z-20 hover:shadow-xl dark:bg-transparent">
          
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-8xl font-extrabold text-black dark:text-white mb-4">
              404
            </h1>
 
            <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl md:text-4xl font-semibold">
              Oops! Page not found
            </p>
            <p className="text-lg md:text-2xl font-medium text-black dark:text-white mt-2 break-words">
              The page you're looking for doesn't exist.
            </p>

            <Link href="/">
              <button className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-300 text-black dark:bg-slate-600 dark:text-white">
                Go Back Home
              </button>
            </Link>
          </div>

          <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(200px at 0px 0px, rgb(38, 38, 38), transparent 100%)' }}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
