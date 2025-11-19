"use client";
import { easeInOut, motion } from "motion/react";

type LandingPanelProps = {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenFun: () => void;
  onOpenMe: () => void;
};

export default function LandingPanel({
  onOpenProjects,
  onOpenContact,
  onOpenFun,
  onOpenMe,
}: LandingPanelProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white will-change-transform overflow-auto">
      <motion.img
        src="site-text-caps.png"
        alt="hi, i'm ananya text"
        style={{ width: "min(60vw, 60%)" }}
        className="will-change-transform"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: easeInOut }}
      />
      <h1
        className="work-sans font-semibold mt-5"
        style={{
          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
          textAlign: "center",
          paddingLeft: "max(5vw, 3rem)",
          paddingRight: "max(5vw, 3rem)",
          maxWidth: "90%",
        }}
      >
        Computer Science, Marketing, Art
      </h1>
      <h1
        className="work-sans"
        style={{
          fontSize: "clamp(1.25rem, 2vw, 1.875rem)",
          textAlign: "center",
          paddingLeft: "max(5vw, 3rem)",
          paddingRight: "max(5vw, 3rem)",
          maxWidth: "90%",
        }}
      >
        @ Northwestern University
      </h1>
      <div className="absolute" style={{ top: "max(1.5vh, 1.25rem)" }}>
        <button
          onClick={onOpenProjects}
          className="shadow-md work-sans-italic border-2 font-semibold rounded-full hover:bg-blue-300 active:bg-blue-400 transition cursor-pointer bg-white"
          style={{
            fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
            padding:
              "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          PROJECTS
        </button>
      </div>
      <div className="absolute" style={{ bottom: "max(1.5vh, 1.25rem)" }}>
        <button
          onClick={onOpenContact}
          className="shadow-md work-sans-italic border-2 font-semibold rounded-full hover:bg-green-300 active:bg-green-400 transition cursor-pointer bg-white"
          style={{
            fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
            padding:
              "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          CONTACT ME
        </button>
      </div>
      <div className="absolute" style={{ left: "max(-2vw, -2rem)" }}>
        <button
          onClick={onOpenFun}
          className="shadow-md rotate-[-90deg] work-sans-italic border-2 font-semibold rounded-full hover:bg-purple-300 active:bg-purple-400 transition cursor-pointer bg-white"
          style={{
            fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
            padding:
              "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          ARTWORK
        </button>
      </div>
      <div className="absolute" style={{ right: "max(-2vw, -2rem)" }}>
        <button
          onClick={onOpenMe}
          className="shadow-md rotate-[90deg] work-sans-italic border-2 font-semibold rounded-full hover:bg-orange-300 active:bg-orange-400 transition cursor-pointer bg-white"
          style={{
            fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
            padding:
              "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          ABOUT ME
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="absolute top-0 left-0 w-full h-1/8">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/50 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/8">
        <div className="absolute inset-0 bg-gradient-to-t from-green-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/10">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/30 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div> */
}
