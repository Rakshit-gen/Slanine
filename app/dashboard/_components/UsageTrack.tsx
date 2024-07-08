import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
//import { currentUser } from '@clerk/nextjs/server'
import { UserButton, useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'

export const UsageTrack = () => {


  return (
    <div>
        
        <div className='bg-purple-600 text-white rounded-lg p-3 m-5'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-purple-400 w-full rounded-full mt-3'>
                <div className='h-2 bg-white w-full rounded-full' style={{width:'35%'}}>

                </div>
            </div>
            <h2 className='mt-3 text-sm'>300/10,000</h2>
        </div>
        <div className='p-3'>
        <Button className='w-full bg-slate-400 text-black'>Upgrade</Button>
        </div>
        <div className='items-center justify-center m-auto flex'>
        <UserButton />
        </div>
    </div>
  )
}
