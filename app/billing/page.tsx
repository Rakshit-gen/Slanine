import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import Particles from "@/components/ui/particles"

export default function page() {
  return (
    
    <div className="justify-center items-center m-auto h-[100%] gap-8 md:flex lg:flex mt-10 bg-white dark:bg-[#080d2b] w-full ">
      <div className="justify-center items-center flex flex-col m-auto text-black md:flex-row">
        <div>
        <Card className="w-[350px] bg-slate-100 border shadow-md text-black rounded-xl dark:bg-transparent my-10 ml-5 dark:shadow-white hover:shadow-2xl dark:hover:shadow-white ">
      <CardHeader>
        <CardTitle className="dark:text-white text-black">Slanine</CardTitle>
        <CardDescription className="font-semibold dark:text-white">100000 words only</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="font-bold text-3xl dark:text-white">Price</Label>
              <Label className="font-semibold text-2xl dark:text-white">Free <span className="text-slate-300 text-lg"></span></Label>
            </div>
            <div className="flex flex-col space-y-1.5 dark:text-white">
            <Label className="text-xl">✔ 100000 Words</Label>
            <Label className="text-xl">✔ Bit slower Response</Label>
            <Label className="text-xl">✔ Restrictions</Label>
            <Label className="text-xl">✔ Selected Templates</Label>
              
            </div>
          </div>
        </form>
      </CardContent>
      <br />
      <CardFooter className="flex justify-between">
        <div className="w-full"><Link href='/dashboard'><Button className="bg-black text-white dark:text-black dark:bg-slate-200 dark:hover:bg-slate-600 rounded-xl w-full dark:hover:text-white hover:bg-white hover:text-black hover:border-2 hover:border-black font-bold">Explore</Button></Link></div>
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[350px] border shadow-md text-black rounded-xl dark:bg-transparent my-10 ml-5 bg-slate-100 dark:shadow-white hover:shadow-2xl dark:hover:shadow-white ">
      <CardHeader>
        <CardTitle className="dark:text-white">Slanine Pro</CardTitle>
        <CardDescription className="font-semibold dark:text-white">Get unlimited usage.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="font-bold text-3xl dark:text-white">Price</Label>
              <Label className="font-semibold text-2xl dark:text-white">$ 7.99 <span className="text-slate-400 text-lg">/ month</span></Label>
            </div>
            <div className="flex flex-col space-y-1.5 dark:text-white">
            <Label className="text-xl">✔ Unlimited Words</Label>
            <Label className="text-xl">✔ Faster Response</Label>
            <Label className="text-xl">✔ Answers to anything</Label>
            <Label className="text-xl">✔ New Templates</Label>
              
            </div>
          </div>
        </form>
      </CardContent>
      <br />
      <CardFooter className="flex justify-between">
        <div className="w-full"><Link href='https://buy.stripe.com/test_14keW25rNcK36as145'><Button className="bg-black dark:hover:bg-slate-600 dark:hover:text-white font-bold text-white dark:text-black dark:bg-slate-200 rounded-xl w-full  hover:bg-white hover:text-black hover:border-2 hover:border-black">Buy</Button></Link></div>
        
      </CardFooter>
      
    </Card>
    </div>
  </div>
    
    
    </div>
    
  )
}


