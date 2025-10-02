"use client";
import React from "react";
import { ColourfulText } from "./ui/colorful-text";
import { motion } from "framer-motion";
 
export function MainNameText() {
  return (
    <div className="text-4xl w-full flex items-center justify-center relative overflow-hidden">
      <ColourfulText text="Slanine: Your personal AI assistant" /> <br />
    </div>
  );
}