"use client";
import { easeInOut, motion } from "motion/react";

export default function MePanel({ onBack }: { onBack: () => void }) {
  const interests = ["art", "cooking", "music", "time with friends"];

  const orangeChips = [
    "bg-orange-400 hover:bg-orange-500",
    "bg-orange-600 hover:bg-orange-700",
    "bg-orange-400 hover:bg-orange-500",
    "bg-orange-600 hover:bg-orange-700",
  ];

  return (
    <div className="flex flex-col h-full bg-white pl-5 pr-5">
      <button
        onClick={onBack}
        className="absolute top-5 right-5 shadow-md work-sans-italic text-xl border-2 font-semibold px-6 py-3 rounded-full hover:bg-orange-300 active:bg-orange-400 transition cursor-pointer"
      >
        BACK
      </button>

      {/* header div */}
      <div className="flex flex-row h-1/8 items-center justify-center mt-20 pl-6 pr-6">
        <motion.img
          src="about-me.png"
          alt="about me text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>

      {/* content box */}
      <div className="flex flex-col items-center justify-center p-8 ml-60 mr-60 mt-10 bg-orange-400/40 rounded-xl mr-10 ml-10 shadow-xl">
        <div className="flex flex-row">
          <img
            src="ananya_image.jpg"
            className="w-[25rem] h-auto object-cover rounded-xl"
          />

          <div className="flex flex-col">
            <h1 className="work-sans text-2xl ml-8 font-semibold">
              Hi! I'm Ananya Bhatia!
            </h1>

            <p className="work-sans text-lg ml-8 mt-2">
              I'm a fourth-year student at Northwestern University pursuing
              combined Bachelor's and Master's degrees in
              <b> Computer Science</b> with a minor in Art and a certificate in
              Integrated Marketing Communications from the Medill School of
              Journalism. My goal is to bring an interdisciplinary perspective
              to software engineering by incorporating principles from
              human-computer interaction, mathematics, consumer psychology, and
              graphical interface design.
            </p>

            <br />
            <h1 className="work-sans text-xl ml-8 font-semibold">
              My interests!
            </h1>

            {/* interests chips */}
            <div className="flex flex-wrap gap-2 ml-8 mt-2">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className={`px-3 py-1 rounded-full ${
                    orangeChips[i % orangeChips.length]
                  } transition-colors cursor-default duration-200 work-sans`}
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
