"use client";

import Link from "next/link";
import { useCursor } from "@/providers/CursorProvider";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar, ExternalLink, ChevronDown, Briefcase, ArrowRight } from "lucide-react";

export default function Header() {
  const { setCursorState } = useCursor();
  const [activePopup, setActivePopup] = useState<"work" | "contact" | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePopup = (popup: "work" | "contact") => {
    setActivePopup(prev => prev === popup ? null : popup);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:px-8 md:py-5 flex flex-col md:flex-row items-center justify-between text-fg gap-4 bg-bg/80 backdrop-blur-lg border-b border-border/10 shadow-sm">

      {/* Left Side: Logo */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-lg md:text-xl tracking-tight link-hover flex items-baseline gap-2"
          onMouseEnter={() => setCursorState("hover")}
          onMouseLeave={() => setCursorState("default")}
          onClick={() => setActivePopup(null)}
        >
          <span className="font-bold">Ansh Kedia</span>
          <span className="opacity-50 text-sm font-normal">
            Software Engineer
          </span>
        </Link>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm opacity-100 md:relative" ref={popupRef}>
        <div className="md:relative">
          <button
            onClick={() => togglePopup("work")}
            className="flex items-center gap-1 hover:opacity-100 transition-opacity outline-none font-medium"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            Work
            <ChevronDown size={14} className={`transition-transform duration-300 ${activePopup === "work" ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {activePopup === "work" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 md:mt-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-[380px] bg-fg text-bg p-6 rounded-2xl shadow-2xl cursor-default border border-bg/5"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setCursorState("default")}
              >
                <div className="flex flex-col gap-5 text-left">

                  {/* Job Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Briefcase size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">Capgemini</h3>
                      <p className="text-sm font-medium opacity-70">Software Engineer</p>
                      <p className="text-xs font-semibold opacity-40 mt-1 uppercase tracking-wider">Aug 2026 - Present</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-bg/10" />

                  {/* Description */}
                  <p className="text-sm leading-relaxed opacity-80">
                    Leading development of scalable enterprise platforms and AI-augmented workflows. Specializing in robust ERP solutions, intelligent agentic systems, and Generative AI integrations from early prototyping to production scale.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href="/blog"
          className="hover:opacity-100 transition-opacity"
          onMouseEnter={() => setCursorState("hover")}
          onMouseLeave={() => setCursorState("default")}
          onClick={() => setActivePopup(null)}
        >
          Writing
        </Link>

        <Link
          href="/about"
          className="hover:opacity-100 transition-opacity hidden sm:block"
          onMouseEnter={() => setCursorState("hover")}
          onMouseLeave={() => setCursorState("default")}
          onClick={() => setActivePopup(null)}
        >
          About
        </Link>

        <div className="md:relative">
          <button
            onClick={() => togglePopup("contact")}
            className="bg-fg text-bg px-4 sm:px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform outline-none flex items-center gap-2 shadow-lg"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            Contact <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1"></span>
          </button>
          <AnimatePresence>
            {activePopup === "contact" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 md:mt-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 w-[90vw] md:w-max max-w-[380px] md:max-w-[90vw] bg-fg text-bg p-6 rounded-xl shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setCursorState("default")}
              >
                <div className="flex flex-col gap-4 text-left">
                  <h3 className="text-lg font-medium tracking-tight mb-2">Get in touch</h3>

                  <a href="mailto:anshkedia.04@gmail.com" className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity break-all">
                    <Mail size={16} className="shrink-0" /> <span className="break-all">anshkedia.04@gmail.com</span>
                  </a>

                  <a href="mailto:ansh.kedia@capgemini.com" className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity break-all">
                    <Mail size={16} className="shrink-0" /> <span className="break-all">ansh.kedia@capgemini.com</span>
                  </a>

                  <a href="https://www.linkedin.com/in/ansh-kedia-249843266" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity">
                    <ExternalLink size={16} /> LinkedIn
                  </a>

                  <hr className="border-bg/10 my-2" />

                  <a href="tel:8758838722" className="flex items-center gap-3 text-sm font-medium hover:opacity-70 transition-opacity">
                    <Calendar size={16} /> +91 8758838722
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

    </header>
  );
}
