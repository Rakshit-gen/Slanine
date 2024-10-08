'use client'

import React,{useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import { UsageTrack } from './_components/UsageTrack'
import Particles from '@/components/ui/particles'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div className='dark:bg-[#080d2b]'>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      <TemplateListSection searchInput={userSearchInput} />

      <p className='text-center'>Many more on the way...</p>
      <br />

    </div>
  )
}

export default Dashboard