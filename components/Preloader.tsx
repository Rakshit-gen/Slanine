"use client"
import { LoaderCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2500);
    
      return () => {
        clearTimeout(timeout)
      }
    }, [])
    
    
  return (
    <>
        {
            loading && <div className="absolute top-0 left-0 inset-0 flex dark:bg-[#080d2b] items-center h-[100vh] w-[99vw] justify-center bg-white z-[10000]">
            {/* Add your loader here, e.g., a spinner */}
                <div className="loader animate-spin text-blue-500"><LoaderCircle height={40} width={40} /></div>
            </div>
        }
    </>
  );
};

export default Preloader;