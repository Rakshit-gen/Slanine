"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    console.log(theme)
    if(theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark");
    }
  }

  return (
    <>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only" onClick={() => changeTheme()}>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => {
            console.log(theme)
              setTheme("light")
            }}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}

      <div onClick={()=>changeTheme()} className="cursor-pointer border-2 border-gray-500 rounded-lg h-[2.5rem] w-[2.5rem] flex justify-center items-center">
        {
          theme === 'light' ? 
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> :
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        }
      </div>
    </>

    
  )
}
