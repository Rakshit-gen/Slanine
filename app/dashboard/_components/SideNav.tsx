"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  History,
  Home,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { UsageTrack } from "./UsageTrack";
import Link from "next/link";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icons: Home,
      path: "/",
    },
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
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 h-screen">
      <div className="h-full p-5 shadow-lg bg-white dark:bg-transparent dark:text-white rounded-l-xl">
        <div className="flex justify-center gap-3 pr-3 mb-6">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        <div className="font-bold">
          {MenuList.map((menu, index) => (
            <Link key={index} href={menu.path}>
              <div
                className={`flex items-center rounded-lg mb-2 p-3 border-b border-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out ${
                  path === menu.path && "text-white bg-blue-600"
                }`}
              >
                <menu.icons className="mr-2" />
                <h2>{menu.name}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-10 left-0 w-full">
          <UsageTrack />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
