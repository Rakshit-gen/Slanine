"use client";
import React from "react";
import { FloatingNav } from './ui/FloatingNavbar';
export function Navbarb() {
  const navItems = [
    {
      name: "Home",
      link: "/",
     
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Settings",
      link: "/settings",
      
    },
  ];
  return (
    <div className="relative  w-full ">
      <FloatingNav navItems={navItems} className="bg-transparent font-bold hidden md:flex lg:flex" />
    </div>
  );
}