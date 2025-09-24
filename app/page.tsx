"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { UserButton, useSession } from "@clerk/nextjs";
import Link from "next/link";
import { Navbarb } from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import MovingCards from "@/components/InfiniteCards";
import { Bent } from "@/components/Grid";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { IconBrandGithub } from "@tabler/icons-react";
import { MarqueeDemo } from "@/components/Passers";
import ScrollToTopButton from '@/components/ScrollToTopButton';

import MainComponent from "@/components/Projects";
import Preloader from "@/components/Preloader";
export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
declare const item: any;
export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme == "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div className="h-full w-full dark:bg-[#040715]">
      <div className="h-full overflow-hidden ">
        <Navbarb />
        <section
          className="bg-slate-100 text-black overflow-hidden dark:bg-[#090e2c] p-4 dark:text-white min-h-fit h-full w-full"
          suppressHydrationWarning
        >
          <nav>
            <div className="flex justify-between items-center m-auto p-5">
              <div className="flex md:hidden lg:hidden">
                <UserButton />
              </div>
              <Link href={"https://github.com/Rakshit-gen/Slanine"}>
                <Button name="github" className="bg-transparent text-black hover:bg-slate-300 dark:text-white dark:hover:bg-black">
                  <IconBrandGithub className="z-20" />
                </Button>
              </Link>
              <div className="z-10">
                <ModeToggle />
              </div>
            </div>
          </nav>

          <div className="min-h-fit mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
            <div className="mx-auto max-w-3xl text-center mt-14">
              <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 text-transparent bg-clip-text text-3xl font-extrabold sm:text-5xl z-10">
                Slanine: Your AI problem solver.
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-superbold">
                Gemini AI-powered solutions, pre-programmed for efficiency.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 z-10">
                <a
                  className="block w-full rounded-full border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto z-10 dark:hover:text-slate-300"
                  href="/dashboard"
                >
                  Save time and boost productivity with AI
                </a>
              </div>
            </div>
          </div>

          <div className="w-screen min-h-fit mt-12">
            <MovingCards />
          </div>

          <br />
          </section>
        <br />
        <div className="mt-24 p-4">
          <Bent />
        </div>

        <br />
        <br />

        <Pricing />
        <MainComponent/>
        <div className="dark:bg-black">
        <MarqueeDemo/>
        </div>


        <div className="p-4">
          <Footer />
        </div>
      </div>
      <div className="hidden md:grid">
      <Particles
        className="absolute inset-0 h-full object-cover"
        quantity={150}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Particles
        className="absolute inset-0 h-full"
        quantity={150}
        ease={80}
        color={"#090e2c"}
        refresh
      />
      </div>
      <div className="grid md:hidden">
      <Particles
        className="absolute inset-0 h-full object-cover"
        quantity={30}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Particles
        className="absolute inset-0 h-full"
        quantity={30}
        ease={80}
        color={"#090e2c"}
        refresh
      />
      </div>
      <ScrollToTopButton /> {/* Add this line */}
    </div>
  );
}
