"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  History,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { UsageTrack } from "./UsageTrack";
import Link from "next/link";

const SideNav = ({setHidden, hidden}: any) => {
  const MenuList = [
    {
      name: "Dashboard",
      icons: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "History",
      icons: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icons: Wallet,
      path: "/billing",
    },
    {
      name: "Settings",
      icons: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="bg-[#080d2b]">
      {/* <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'> */}
      <div className="h-screen p-5 shadow-lg border flex-col flex items-center flex-grow bg-white dark:bg-transparent dark:text-white">
        <div className=" justify-center gap-3 pr-3 hidden md:flex">
          <Link href="/" className="flex gap-2">
            <h1 className="text-4xl text-transparent font-semibold m-3 bg-gradient-to-l from-yellow-400 via-green-200 to-purple-600 bg-clip-text">Slanine</h1>
          </Link>
          {/*
        <h1 className='mt-1 text-3xl dark:text-white'>
        <span className='text-teal-500 dark:text-teal-300'>S</span>la<span className='text-teal-500 dark:text-teal-300'>ni</span>ne
        </h1>
        */}
        </div>

        <hr className="my-6" />

        <div className=" font-bold w-[300px] md:w-full">
          {MenuList.map((menu, index) => (
            <Link key={index} href={menu.path} onClick={()=>setHidden(true)} >
              <div
                className={`flex rounded-2xl gap-2 mb-2 p-3 border-b hover:border-blue-500 hover:border transition duration-900 ease-in-out hover:text-white rounded-lg${
                  path === menu.path && "m-2 text-black dark:text-white border-blue-500"
                }`}
              >
                <menu.icons />
                <h2>{menu.name}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className=" w-[300px] md:w-full mt-auto">
          <UsageTrack setHidden={setHidden} hidden={hidden} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
