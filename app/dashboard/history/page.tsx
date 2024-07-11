// lib/fetchUser.js
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { PgRelationalQuery } from 'drizzle-orm/pg-core/query-builders/query'
import React from 'react'
import { eq } from 'drizzle-orm';

interface AIOutputRecord {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const userEmail="sisodiarakshit456@gmail.com"

const getUserData = async (userEmail: string) => {
  const userData = await db.query.AIOutput.findMany({
    where: eq(AIOutput.createdBy, userEmail),
    columns: {
      id: true,
      formData: true,
      aiResponse: true
    },
    orderBy: (AIOutput, { desc }) => [desc(AIOutput.createdAt)],
    
  });
  let res=0
  for(let i=0;i<userData.length;i++){
    if(userData[i].aiResponse?.split(" ").length){
      res=res+(userData[i]?.aiResponse?.split(" ").length??0)
    }
  }
  console.log(res)
  return res
};

// Usage
  

const page = () => {
  const user = getUserData('sisodiarakshit456@gmail.com')
  console.log(user)
  return (
    <div className='text-6xl'>{user}</div>
  )
}

export default page;getUserData

