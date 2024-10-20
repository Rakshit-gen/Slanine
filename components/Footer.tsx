"use client";
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const StarryNight = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); 


  useEffect(() => {
    const canvas:any = canvasRef.current;
    if (!canvas) return; 

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars:any = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5,
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star:any) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

const AnimatedTitle = () => {
  return (
    <h1 className="text-purple-300 text-5xl font-bold lg:text-6xl mb-4 relative">
      <span className="absolute inset-0 animate-float">Slanine</span>
      <span className="relative z-10">Slanine</span>
    </h1>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  return (
    <footer className="bg-black text-white relative overflow-hidden py-8">
      <StarryNight />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <AnimatedTitle />
            <p className="text-sm text-gray-400 leading-tight mb-2">
              Always helping people through AI tools and developing a fast pace towards a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rakshit-gen/Slanine" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <GitHubLogoIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <InstagramLogoIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <TwitterLogoIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium text-purple-300 text-sm mb-2">Quick Links</p>
            <nav className="flex flex-col space-y-1 text-xs text-gray-400">
              <a className="hover:text-purple-300 transition-colors" href="/">Home</a>
              <a className="hover:text-purple-300 transition-colors" href="/dashboard">Dashboard</a>
              <a className="hover:text-purple-300 transition-colors" href={"https://rakshit-portfolio-one.vercel.app/"} target="_blank">Other projects</a>
              <a className="hover:text-purple-300 transition-colors" href={"https://github.com/Rakshit-gen/Slanine"} target="_blank">Contribute</a>
            </nav>
          </div>
          <div>
          <p className="text-xl font-semibold text-center text-white mb-4">
                Subscribe to our website
              </p>
            <p className="font-medium text-purple-300 text-sm mb-2">Stay Updated</p>
            
            <form className="flex items-center" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full text-xs h-8 rounded-l-md border-gray-700 bg-gray-800 text-white focus:border-purple-300 focus:ring-purple-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button name="message" type="submit" size="sm" className="h-8 rounded-l-none bg-purple-600 hover:bg-purple-700">
                <Send className="h-3 w-3" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-center text-xs text-gray-400">© 2024 Rakshit Sisodiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
