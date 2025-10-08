"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text, colors }: { text: string, colors: string[] }) {

  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 5000); // switch every 5s
    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${toggle}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: toggle
          ? colors[index % colors.length]
          : colors[(index + 1) % colors.length], // alternate assignment
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
