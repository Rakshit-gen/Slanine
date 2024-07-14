import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='dark:flex bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800'>
    <div className='p-10 font-semibold shadow-md rounded-sm border bg-slate-100 flex-col text-center gap-3 cursor-pointer dark:hover:bg-slate-700 transition-smooth hover:shadow-2xl dark:bg-transparent hover:bg-slate-300'>
        <div className='items-center justify-center left-[50%] flex m-auto mb-3'>
        <item.icon />
        </div>
        <h2 className='text-lg font-bold'>{item.name}</h2>
        <p>{item.desc}</p>
    </div>
    </div>
    </Link>
  )
}

export default TemplateCard