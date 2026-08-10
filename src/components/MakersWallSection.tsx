"use client";

import { useCursor } from "@/providers/CursorProvider";
import Link from "next/link";
import { motion } from "framer-motion";

const experiments = [
  {
    id: "facemask",
    name: "FaceMask 360",
    tag: "Computer Vision · React · Streamlit",
    description: "A real-time face recognition attendance system built with Python, Streamlit, and React. Evaluates models like Custom CNN, MobileNet, and FaceNet for contactless tracking.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    repo: "https://github.com/anshkedia-04/Face_Mask_360"
  },
  {
    id: "voyageai",
    name: "VoyageAI",
    tag: "Agentic AI · LLMs · Streamlit",
    description: "An intelligent travel planning assistant that crafts personalized day-by-day itineraries. Features an LLM-driven agentic reasoning backend and a modern glassmorphic UI.",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    repo: "https://github.com/anshkedia-04/VoyageAI-Smart-Travel-Assistant"
  },
  {
    id: "visionmouse",
    name: "VisionMouse: Mouse Controller",
    tag: "Computer Vision · Deep Learning",
    description: "A touchless computer interaction tool that uses deep learning to track hand movements in real-time, allowing users to precisely control their mouse cursor without physical hardware.",
    img: "/visionmouse_app.png",
    repo: "https://github.com/anshkedia-04/Gesture_Mouse_Control"
  },
  {
    id: "airtune",
    name: "AirTune: Volume Controller",
    tag: "Computer Vision · HCI",
    description: "An intuitive system utility that leverages computer vision to adjust system volume through simple, natural hand gestures, offering a seamless and contactless user experience.",
    img: "/airtune_app.png",
    repo: "https://github.com/anshkedia-04/AirTune"
  }
];

export default function MakersWallSection() {
  const { setCursorState } = useCursor();

  return (
    <section className="relative w-full px-4 md:px-8 py-24 bg-fg text-bg overflow-hidden rounded-t-[3rem]">
      <div className="mb-16 max-w-2xl mx-auto text-center">
        <h2 className="oi-h2">
          A collection of <span className="font-serif italic font-light">student projects</span> and <span className="font-serif italic font-light">experiments</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {experiments.map((item, index) => (
          <Link
            key={item.id}
            href={item.repo || `/lab/${item.id}`}
            target={item.repo ? "_blank" : undefined}
            rel={item.repo ? "noopener noreferrer" : undefined}
            className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="w-full h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-white font-medium text-lg block leading-tight">{item.name}</span>
                    <span className="text-white/70 text-sm block mt-1">{item.tag}</span>
                  </div>
                  {item.repo && (
                    <div className="text-white/80 bg-white/20 p-2 rounded-full backdrop-blur-sm" title="View Source on GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-white/60 text-xs line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
