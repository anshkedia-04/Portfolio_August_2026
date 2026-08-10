"use client";

import { useRef, useState, useEffect } from "react";
import { useCursor } from "@/providers/CursorProvider";
import { motion, useScroll, useTransform } from "framer-motion";

const TERMINAL_LINES = [
  "anshkedia@system ~ % init_ai_core --deploy",
  "> [INFO] Booting up neural network...",
  "> [INFO] Loading custom ERP modules...",
  "> [OK] 142 dependencies resolved.",
  "> [WARN] Bypassing manual overrides...",
  "> [OK] AI Engine online.",
  "anshkedia@system ~ % execute_deployment",
  "> Deploying to production...",
  "> Build successful in 1.4s.",
  "> Ready. System is optimized for maximum efficiency."
];

export default function ShowreelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();
  
  // Terminal typing state
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      // Loop the animation after a long delay when finished
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentLine = TERMINAL_LINES[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) newLines[currentLineIndex] = "";
          newLines[currentLineIndex] += currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, Math.random() * 20 + 10); // Random fast typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.startsWith(">") ? 150 : 600); // Pause longer after commands
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <section ref={containerRef} className="relative w-full px-4 md:px-8 py-12">
      <motion.div
        style={{ scale }}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#080808] border border-[#222] shadow-2xl"
        onMouseEnter={() => setCursorState("hover")} // Subtle hover cursor
        onMouseLeave={() => setCursorState("default")}
      >
        {/* Terminal Header */}
        <div className="absolute top-0 w-full h-12 bg-[#121212] border-b border-[#222] flex items-center px-4 gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <div className="absolute left-0 w-full text-center text-[#666] text-xs font-medium font-mono pointer-events-none">
            bash - root@anshkedia
          </div>
        </div>

        {/* Terminal Body */}
        <div className="absolute inset-0 pt-16 p-6 md:p-10 font-mono text-sm md:text-base lg:text-lg overflow-hidden flex flex-col shadow-inner">
          {displayedLines.map((line, i) => (
            <div key={i} className="mb-1 flex items-start break-words break-all md:break-normal whitespace-pre-wrap">
              <span className={line.startsWith(">") ? "text-[#888]" : "text-[#4af626] font-semibold"}>
                {line}
              </span>
            </div>
          ))}
          {/* Blinking Cursor */}
          {currentLineIndex < TERMINAL_LINES.length && (
            <div className="flex items-center h-6 mt-1">
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-[#4af626] ml-1"
              />
            </div>
          )}
        </div>
        
        {/* Subtle glow / reflection to make it look like a physical screen */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_150px_rgba(74,246,38,0.03)]"></div>
      </motion.div>
    </section>
  );
}
