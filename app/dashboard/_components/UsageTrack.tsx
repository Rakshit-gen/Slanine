import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import Link from 'next/link'

export const UsageTrack = () => {
  const { user } = useUser()
  const { total, setTotal } = useContext(TotalUsageContext)

  useEffect(() => {
    user && getUserData(user.primaryEmailAddress?.emailAddress ?? 'none')
  }, [user])

  const getUserData = async (userEmail: string) => {
    const userData = await db.query.AIOutput.findMany({
      where: eq(AIOutput.createdBy, userEmail),
      columns: {
        id: true,
        formData: true,
        aiResponse: true,
      },
      orderBy: (AIOutput, { desc }) => [desc(AIOutput.createdAt)],
    })
    let res = 0
    for (let i = 0; i < userData.length; i++) {
      res = res + (userData[i]?.aiResponse?.split(' ').length ?? 0)
    }
    setTotal(res)
    return res
  }

  const calcUsage = async () => {
    const usage = await getUserData(user?.primaryEmailAddress?.emailAddress ?? 'none')
    setTotal(usage)
    const usagelimiter = (total / 100000) * 100
    return usagelimiter
  }

  const usagevalue = calcUsage()
  let perc = Math.round(total / 1000)
  if (perc >= 100) {
    perc = 100
  }

  return (
    <div className="p-5 space-y-5">
      <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-purple-900 text-white rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="font-bold text-xl">Credits</h2>
        <div className="relative h-2 w-full rounded-full bg-purple-400 mt-3">
          <div
            className="h-2 bg-gradient-to-r from-white to-purple-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: perc + '%' }}
          ></div>
        </div>
        <h2 className="mt-3 text-lg font-light">{total}/100,000 words</h2>
      </div>

      <div className="text-center">
        <Link href={'/billing'}>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-900 transition-all duration-300">
            Upgrade
          </Button>
        </Link>
      </div>

      <div className="items-center justify-center flex mt-5">
        <div className="animate-pulse bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400 rounded-full h-4 w-4 mr-2"></div>
        <div className="text-white font-light">Your current usage level</div>
      </div>
    </div>
  )
}
