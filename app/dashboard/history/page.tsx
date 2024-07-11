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
      aiResponse: true,
      createdAt:true
    },
    orderBy: (AIOutput, { desc }) => [desc(AIOutput.createdAt)],
    
  });
  const idu=[]
  const data=[]
  const result=[]
  const creator=[]
  for(let i=0;i<userData.length;i++){
  idu.push(userData[i].id)
  data.push(userData[i].formData)
  result.push(userData[i].aiResponse)
  creator.push(userData[i].createdAt)

  
}
const allValues=[idu,data,result,creator]

return allValues;

    
  }


  

const page = () => {
  const user = getUserData("sisodiarakshit456@gmail.com")
  console.log(user)
  
  return (
    <div className='text-sm text-black'>page</div>
  )
}

export default page;

