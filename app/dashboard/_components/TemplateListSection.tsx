//@ts-nocheck
import React, { useEffect,useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    aiPrompt:string,
    slug:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
declare const item: any

const TemplateListSection = ({userSearchInput}:any) => {
  const [templateList,setTemplateList]=useState(Templates)
  useEffect(()=>{
    if(userSearchInput){
      const filterData = Templates.filter(item=>
        item.name.toLowerCase()
        .includes(userSearchInput.toLowerCase()));
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Templates)
    }

  },[userSearchInput])

  return (
    <div className='grid dark:text-gray-100 text-slate-800 gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-3 md:mt-3 lg:m-3'>
        {Templates.map((item:TEMPLATE,index:number)=>(
            <TemplateCard key={index} {...item} />

        ))}
        
    </div>
  )
}

export default TemplateListSection