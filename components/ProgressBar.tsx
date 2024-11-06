"use client";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="progress-bar-container"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "99999",
          height: "7.5px",
        }}
      >
        {/* Glowing Progress Bar */}
        <div
          className="progress-bar animate-glowingBar"
          style={{
            border: "none",
            borderRadius: "2rem",
            height: "100%",
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #2ec4b6, #f72585)",
            boxShadow: "0 0 15px #2ec4b6, 0 0 25px #f72585, 0 0 35px #ff00ffcc",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
