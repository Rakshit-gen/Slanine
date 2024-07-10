'use client'

import React,{useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div className='dark:bg-black'>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      <TemplateListSection searchInput={userSearchInput} />

    </div>
  )
}

export default Dashboard