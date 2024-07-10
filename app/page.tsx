'use client'

import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserButton, useSession } from "@clerk/nextjs";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbarb } from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";


export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "black" : "white");
  }, [theme]);
 
  return (
    <div className="h-full overflow-hidden dark:bg-black">
      <Navbarb />
      
    <section className="bg-slate-100 text-black overflow-hidden dark:bg-black dark:text-white h-full">
      <nav>
        <div className="justify-between items-center m-auto flex p-5">
          <div className="flex md:hidden lg:hidden">
          <UserButton />
          </div>
          <Link href={'https://github.com/Rakshit-gen/Slanine'}>
          <Button className="bg-transparent text-black hover:bg-slate-300 dark:text-white dark:hover:bg-black"><Github className="z-20" /></Button>
          </Link>
          <div className="z-10">
          <ModeToggle />
          </div>
        </div>
      </nav>
  <div className="h-screen mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen lg:items-center overflow-hidden">
    <div className="mx-auto max-w-3xl text-center mt-20 md:-mt-64 lg:-mt-64 mb-0">
    
      
      <h1
        className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl z-10"
      >
        Slanine: Your AI problem solver.
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-superbold">
      Gemini AI-powered solutions, pre-programmed for efficiency.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4 z-10">
      
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto z-10 dark:hover:text-slate-300"
          href="/dashboard"
        >
          Save time and boost productivity with AI
        </a>
        
      </div>
      
      
      
    </div>
  </div>
  
  
</section>


    <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />

</div>
  );
}
