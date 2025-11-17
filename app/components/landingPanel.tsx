"use client";
import { easeInOut, motion } from "motion/react";

type LandingPanelProps = {
  onOpenProjects: () => void;
  onOpenSocials: () => void;
  onOpenFun: () => void;
  onOpenMe: () => void;
};

export default function LandingPanel({
  onOpenProjects,
  onOpenSocials,
  onOpenFun,
  onOpenMe,
}: LandingPanelProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <motion.img
        src="site-text.png"
        alt="hi, i'm ananya text"
        className="w-3/5"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
      />
      <h1 className="work-sans font-semibold text-4xl mt-5">
        computer science, marketing, art
      </h1>
      <h1 className="work-sans text-3xl">@ northwestern university</h1>
      <div className="absolute top-0 mt-5">
        <button
          onClick={onOpenProjects}
          className="px-6 py-3 rounded-full bg-pink-300 hover:bg-pink-400 transition"
        >
          Projects ↓
        </button>
      </div>
      <div className="absolute bottom-0 mb-5">
        <button
          onClick={onOpenSocials}
          className="px-6 py-3 rounded-full bg-green-300 hover:bg-green-400 transition"
        >
          Socials ↑
        </button>
      </div>
      <div className="absolute left-0 ml-1">
        <button
          onClick={onOpenFun}
          className="rotate-[-90deg] px-6 py-3 rounded-full bg-blue-300 hover:bg-blue-400 transition"
        >
          Fun →
        </button>
      </div>
      <div className="absolute right-0 mr-1">
        <button
          onClick={onOpenMe}
          className="rotate-[90deg] px-6 py-3 rounded-full bg-orange-300 hover:bg-orange-400 transition"
        >
          ← Me
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
