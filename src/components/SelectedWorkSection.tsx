"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/providers/CursorProvider";
import Link from "next/link";

const freelanceProjects = [
  {
    id: "toastmaster",
    name: "Toastmaster",
    type: "Web · Client",
    year: "2026",
    isDemo: true,
    demoUrl: "https://flavourfall.onrender.com/",
    description: "A comprehensive café and bakery management system featuring seamless order tracking, inventory management, staff management, and real-time analytics dashboards.",
    images: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80",
    ],
  },
  {
    id: "brewraga",
    name: "BrewRaga",
    type: "Web · Client",
    year: "2025",
    isDemo: true,
    demoUrl: "https://brew-raga.onrender.com/",
    description: "A modern, responsive landing page for a premium rooftop café in Vadodara, complete with daily specials, menu browsing, and an integrated table reservation system.",
    images: [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
    ],
  },
];



export default function SelectedWorkSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { setCursorState } = useCursor();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const renderProjectList = (projectsList: typeof freelanceProjects) => (
    <div className="flex flex-col border-t border-border">
      {projectsList.map((project) => (
        <Link
          key={project.id}
          href={project.demoUrl || `/work/${project.id}`}
          target={project.demoUrl ? "_blank" : undefined}
          rel={project.demoUrl ? "noopener noreferrer" : undefined}
          className="group relative flex flex-col py-8 border-b border-border transition-colors hover:bg-fg/5"
          onMouseEnter={() => {
            setHoveredProject(project.id);
            setCursorState("hidden"); // hide default custom cursor to show strip
          }}
          onMouseLeave={() => {
            setHoveredProject(null);
            setCursorState("default");
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 group-hover:pl-4 transition-all duration-300">
              <span className="text-2xl md:text-4xl font-medium tracking-tight">
                {project.name}
              </span>
              {project.isDemo && (
                <span className="px-2 py-1 text-xs font-semibold bg-blue-500/10 text-blue-500 rounded-md uppercase tracking-wider shrink-0">
                  Demo version
                </span>
              )}
            </div>
            <div className="flex items-center gap-8 opacity-70 group-hover:opacity-100 transition-opacity group-hover:pr-4 duration-300">
              <span className="text-sm">{project.type}</span>
              <span className="text-sm font-mono">{project.year}</span>
            </div>
          </div>
          <div className="mt-4 max-w-2xl text-fg/60 text-sm md:text-base group-hover:pl-4 transition-all duration-300">
            {project.description}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section className="relative w-full px-4 md:px-8 py-24" onMouseMove={handleMouseMove}>
      
      {/* Freelance Work */}
      <div className="mb-20">
        <div className="mb-12 max-w-xl">
          <span className="oi-xs oi-faint block mb-4 uppercase tracking-widest text-blue-500">Freelance Work</span>
          <h2 className="oi-h2 text-3xl md:text-5xl">
            Bespoke <span className="font-serif italic font-light">web solutions</span> for clients.
          </h2>
        </div>
        {renderProjectList(freelanceProjects)}
      </div>



      {/* Hover Image Strip Portal */}
      <div className="hidden lg:block fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden">
        {freelanceProjects.map((project) => (
          <motion.div
            key={`strip-${project.id}`}
            className="absolute flex gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredProject === project.id ? 1 : 0,
              scale: hoveredProject === project.id ? 1 : 0.8,
              x: mousePos.x - 150, // Center relative to cursor
              y: mousePos.y - 100,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.2 }}
          >
            {project.images.map((img, i) => (
              <div
                key={i}
                className="w-48 h-32 md:w-64 md:h-40 relative rounded-xl overflow-hidden shadow-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
