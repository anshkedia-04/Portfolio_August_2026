"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "@/providers/CursorProvider";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    if (!containerRef.current || !introRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate intro paragraph
      tl.fromTo(
        introRef.current,
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power3.out" }
      );

      // Animate main heading words
      const words = textRef.current?.querySelectorAll(".word-reveal");
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, filter: "blur(10px)", y: 30 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.6"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center px-4 md:px-12 pt-32 pb-20"
    >
      <div
        ref={introRef}
        className="w-full max-w-4xl mb-16 opacity-0 filter blur-md grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">01 / Current</span>
          <p className="text-sm md:text-base text-fg-muted leading-relaxed pr-4">
            Software Engineer at <span className="text-fg font-medium">Capgemini</span> since August 2026.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">02 / Expertise</span>
          <p className="text-sm md:text-base text-fg-muted leading-relaxed pr-4">
            Custom websites, mobile & desktop apps, AI solutions, and ERP platforms.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">03 / Background</span>
          <p className="text-sm md:text-base text-fg-muted leading-relaxed pr-4">
            Computer Science and Engineering Graduate, Class of 2026.
          </p>
        </div>
      </div>

      <h1 ref={textRef} className="oi-display flex flex-wrap max-w-6xl">
        <span className="mr-4 word-reveal opacity-0 inline-block">
          <span
            className="text-accent cursor-none hover:italic transition-all duration-300 relative group"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            Custom Apps,
          </span>
        </span>
        <span className="mr-4 word-reveal opacity-0 inline-block">
          <span
            className="text-accent cursor-none hover:italic transition-all duration-300 relative group"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            AI Solutions
          </span>
        </span>
        <span className="mr-4 word-reveal opacity-0 inline-block">
          &amp;
        </span>
        <span className="mr-4 word-reveal opacity-0 inline-block">
          <span
            className="text-accent cursor-none hover:italic transition-all duration-300 relative group"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            ERP Systems.
          </span>
        </span>
        <div className="w-full h-0"></div>
        <span className="mr-4 word-reveal opacity-0 inline-block">
          <span className="font-serif italic font-light mr-4">Software</span>
          Engineer.
        </span>
      </h1>
    </section>
  );
}
