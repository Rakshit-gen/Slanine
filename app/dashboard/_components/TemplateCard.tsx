import React, { useRef, useState, useEffect }  from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    // <div className='dark:flex rounded-xl overflow-hidden relative z-10 p-[1.5px]'>
    //   <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
    //   <Link href={'/dashboard/content/'+item?.slug}>
    //   {/* <div className='dark:flex bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800'> */}
    //     <div className='z-20 dark:bg-[#36454F] p-10 font-semibold shadow-md rounded-sm border bg-slate-100 flex-col text-center gap-3 cursor-pointer dark:hover:bg-slate-700 transition-smooth hover:shadow-2xl dark:bg-transparent hover:bg-slate-300'>
    //         <div className='items-center justify-center left-[50%] flex m-auto mb-3'>
    //           <item.icon />
    //         </div>
    //         <h2 className='text-lg font-bold'>{item.name}</h2>
    //         <p>{item.desc}</p>
    //     </div>
    //   </Link>
    // </div>
    <div>
      <div ref={ref} className={`mx-auto flex h-full w-full max-w-lg items-center outline-none justify-center rounded-xl transition-opacity duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        {isVisible ? <div
            className="relative z-10 border-none flex w-full outline-none h-full cursor-pointer items-center overflow-hidden rounded-xl p-[2px] dark:shadow-gray-400 transition-shadow delay-75 ease-out"
          >
            <div
              className="animate-rotate absolute border-none inset-0 h-full w-full rounded-xl -z-10 bg-[conic-gradient(#36454F_20deg,transparent_120deg)] dark:bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"
            ></div>

            <Link href={'/dashboard/content/'+item?.slug} className='h-full w-full rounded-lg hover:scale-100 transition-all delay-100 ease-linear'>
              <div className='dark:flex h-full rounded-lg outline-none dark:bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800'>
                <div className='z-20 rounded-xl dark:bg-[#36454F] h-full p-10 font-semibold border bg-stone-100 flex-col text-center gap-3 cursor-pointer dark:hover:bg-slate-600 transition-smooth dark:bg-transparent hover:bg-gray-200'>
                    <div className='items-center justify-center left-[50%] flex m-auto mb-3'>
                      <item.icon />
                    </div>
                    <h2 className='text-lg font-bold'>{item.name}</h2>
                    <p>{item.desc}</p>
                </div>
              </div>
            </Link>
          </div> : <div>loading</div>}
      </div>
    </div>
  )
}

export default TemplateCard