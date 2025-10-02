"use client";
import React from "react";
import { ColourfulText } from "./ui/colorful-text";
import { motion } from "framer-motion";
 
export function MainNameText() {
  return (
    <div className="text-xl lg:text-4xl md:text-4xl w-full flex items-center justify-center relative overflow-hidden">
      <ColourfulText text="Slanine: Your personal AI assistant" colors={["rgb(0,0,0)", "rgb(255,255,255)"]} /> <br />
    </div>
  );
}