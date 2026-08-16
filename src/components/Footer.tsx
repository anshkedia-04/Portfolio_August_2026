"use client";

import { useCursor } from "@/providers/CursorProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const { setCursorState } = useCursor();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatting time as HH:MM
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#111111] text-[#f4f4f4] py-24 px-4 md:px-12 flex flex-col relative z-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Side: Image/Video */}
        <div className="w-full md:w-auto shrink-0 relative">
          <div className="w-full md:w-[320px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/profile.png" 
              alt="Ansh Kedia"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-10">
            Want to work <span className="font-serif italic font-light">together?</span>
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6">
            


            {/* About button */}
            <Link
              href="/about"
              className="bg-[#222222] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#333] transition-colors"
              onMouseEnter={() => setCursorState("hover")}
              onMouseLeave={() => setCursorState("default")}
            >
              About
            </Link>

            {/* Email */}
            <div className="flex flex-col gap-2 ml-0 sm:ml-4">
              <a 
                href="mailto:anshkedia.04@gmail.com"
                className="text-lg font-medium opacity-90 hover:opacity-100 transition-opacity"
                onMouseEnter={() => setCursorState("hover")}
                onMouseLeave={() => setCursorState("default")}
              >
                anshkedia.04@gmail.com
              </a>
              <a 
                href="mailto:ansh.kedia@capgemini.com"
                className="text-lg font-medium opacity-90 hover:opacity-100 transition-opacity"
                onMouseEnter={() => setCursorState("hover")}
                onMouseLeave={() => setCursorState("default")}
              >
                ansh.kedia@capgemini.com
              </a>
            </div>

            {/* Phone */}
            <a 
              href="tel:8758838722"
              className="text-lg font-medium opacity-90 hover:opacity-100 transition-opacity ml-0 sm:ml-4"
              onMouseEnter={() => setCursorState("hover")}
              onMouseLeave={() => setCursorState("default")}
            >
              +91 8758838722
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ansh-kedia-249843266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium opacity-90 hover:opacity-100 transition-opacity ml-0 sm:ml-4"
              onMouseEnter={() => setCursorState("hover")}
              onMouseLeave={() => setCursorState("default")}
            >
              LinkedIn
            </a>

            {/* Time & Location */}
            <div className="text-sm font-medium opacity-50 ml-auto hidden xl:block">
              {time} <span className="text-white opacity-100 font-semibold ml-1">India</span>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-24 pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center text-xs font-medium opacity-50 uppercase tracking-widest gap-4">
        <span>© 2026 Ansh Kedia</span>
      </div>
    </footer>
  );
}
