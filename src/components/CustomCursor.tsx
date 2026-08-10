"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/providers/CursorProvider";
import { Play } from "lucide-react";

export default function CustomCursor() {
  const { cursorState } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Handle auto-hover over a and button elements
  const { setCursorState } = useCursor();
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorState("hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorState("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [setCursorState]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Don't render on touch devices
  }

  const variants = {
    default: {
      width: 16,
      height: 16,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "var(--fg)",
      mixBlendMode: "difference" as const,
      opacity: isVisible && cursorState !== "hidden" ? 1 : 0,
    },
    hover: {
      width: 48,
      height: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "var(--fg)",
      mixBlendMode: "difference" as const,
      opacity: isVisible && cursorState !== "hidden" ? 0.5 : 0,
    },
    play: {
      width: 80,
      height: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "var(--accent)",
      mixBlendMode: "normal" as const,
      opacity: isVisible && cursorState !== "hidden" ? 1 : 0,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-bg"
      animate={variants[cursorState === "hidden" ? "default" : cursorState]}
      transition={{
        type: "spring",
        stiffness: 750,
        damping: 40,
        mass: 0.5,
      }}
    >
      {cursorState === "play" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Play className="w-8 h-8 fill-current" />
        </motion.div>
      )}
    </motion.div>
  );
}
