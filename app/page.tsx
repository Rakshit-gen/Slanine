'use client'

import { Button } from "@/components/ui/button";
import { UserButton, useSession } from "@clerk/nextjs";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbarb } from "@/components/Nav";
import { ContainerScroll } from "@/components/ui/containerscroll";

export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();
  return (
    <div className="h-full overflow-hidden">
      <Navbarb />
      
    <section className="bg-[#D9AFD9] bg-gradient-to-b from-[#D9AFD9] to-[#97D9E1] text-black overflow-hidden">
      <nav>
        <div className="justify-between items-center m-auto flex p-5">
          <div className="flex md:hidden lg:hidden">
          <UserButton />
          </div>
          <Link href={'https://github.com/Rakshit-gen/Slanine'}>
          <Button className="bg-transparent text-black hover:bg-slate-300"><Github /></Button>
          </Link>
        </div>
      </nav>
  <div className="h-screen mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen lg:items-center overflow-hidden">
    <div className="mx-auto max-w-3xl text-center mt-20 md:-mt-64 lg:-mt-64 mb-0">
    
      
      <h1
        className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Slanine: Your AI problem solver.
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-bold">
      Gemini AI-powered solutions, pre-programmed for efficiency.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
      
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Save time and boost productivity with AI
        </a>
        
      </div>
      
      
      
    </div>
  </div>
  
  
</section>

</div>
  );
}
