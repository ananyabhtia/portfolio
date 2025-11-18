"use client";
import { easeInOut, motion } from "motion/react";

export default function MePanel({ onBack }: { onBack: () => void }) {
  const images = [
    "blue.jpg",
    "encore.JPG",
    "FullSizeRender.jpg",
    "gallidividergirl.png",
    "hand.jpg",
    "IMG_8072.jpg",
    "IMG_2026.JPG",
    "IMG_4179.jpeg",
    "IMG_4924.JPG",
    "IMG_7681.jpg",
  ];

  return (
    <div className="flex flex-col h-full bg-white pl-5 pr-5 overflow-auto">
      <button
        onClick={onBack}
        className="absolute top-5 right-5 shadow-md work-sans-italic text-xl border-2 font-semibold px-6 py-3 rounded-full hover:bg-purple-300 active:bg-purple-400 transition cursor-pointer"
      >
        BACK
      </button>

      {/* header div */}
      <div className="flex flex-row h-1/8 items-center justify-center mt-20 pl-6 pr-6">
        <motion.img
          src="artwork.png"
          alt="artwork text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>

      {/* purple container */}
      <div className="flex-1 bg-purple-300 m-10 rounded-xl shadow-xl p-6">
        {/* masonry grid */}
        <div className="columns-3 gap-6 [column-fill:_balance]">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`image-${i}`}
              className="mb-6 w-full rounded-xl shadow-md break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
