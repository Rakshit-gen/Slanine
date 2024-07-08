import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='p-10 shadow-md rounded-lg border bg-slate-100 flex-col text-center gap-3 cursor-pointer hover:scale-105 transition-smooth hover:shadow-2xl'>
        <div className='items-center justify-center left-[50%] flex m-auto mb-3'>
        <item.icon />
        </div>
        <h2 className='text-lg'>{item.name}</h2>
        <p>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard