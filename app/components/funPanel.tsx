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
    <div
      className="flex flex-col h-full bg-white overflow-auto"
      style={{
        paddingLeft: "max(1.25rem, 1.25vw)",
        paddingRight: "max(1.25rem, 1.25vw)",
      }}
    >
      <button
        onClick={onBack}
        className="absolute shadow-md work-sans-italic border-2 font-semibold rounded-full hover:bg-purple-300 active:bg-purple-400 transition cursor-pointer bg-white z-100"
        style={{
          top: "max(1.25rem, 1.5vh)",
          right: "max(1.25rem, 1.5vw)",
          fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
          padding: "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
        }}
      >
        BACK
      </button>

      {/* header div */}
      <div
        className="flex flex-row items-center justify-center"
        style={{
          height: "max(8vh, 6.5rem)",
          marginTop: "max(5rem, 6vh)",
          paddingLeft: "max(1.5rem, 1.5vw)",
          paddingRight: "max(1.5rem, 1.5vw)",
        }}
      >
        <motion.img
          src="artwork.png"
          alt="artwork text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>

      {/* purple container */}
      <div
        className="flex-1 bg-purple-300 rounded-xl shadow-xl"
        style={{
          marginRight: "2vw",
          marginLeft: "2vw",
          marginBottom: "4vh",
          marginTop: "4vh",
          padding: "max(1.5rem, 1.5vw)",
        }}
      >
        {/* masonry grid */}
        <div
          style={{
            columnCount: "auto",
            columnWidth: "max(250px, 25vw)",
            columnGap: "max(1.5rem, 1.5vw)",
            columnFill: "balance",
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`image-${i}`}
              className="w-full rounded-xl shadow-md break-inside-avoid"
              style={{ marginBottom: "max(1.5rem, 1.5vw)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
