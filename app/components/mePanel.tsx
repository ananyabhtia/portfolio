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
    <>
      <style jsx>{`
        .content-wrapper {
          display: flex;
          width: 100%;
          gap: max(2rem, 2vw);
          flex-direction: row;
        }

        .content-box {
          margin-left: 15rem;
          margin-right: 15rem;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }

          .content-box {
            margin-left: 10vw;
            margin-right: 10vw;
          }
        }
      `}</style>

      <div
        className="flex flex-col h-full bg-white overflow-auto"
        style={{
          paddingLeft: "max(1.25rem, 1.25vw)",
          paddingRight: "max(1.25rem, 1.25vw)",
          paddingBottom: "max(3rem, 6vh)",
        }}
      >
        <button
          onClick={onBack}
          className="absolute shadow-md work-sans-italic border-2 font-semibold rounded-full hover:bg-orange-300 active:bg-orange-400 transition cursor-pointer bg-white z-100"
          style={{
            top: "max(1.25rem, 1.5vh)",
            right: "max(1.25rem, 1.5vw)",
            fontSize: "clamp(0.875rem, 1.25vw, 1.25rem)",
            padding:
              "clamp(0.5rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)",
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
            src="about-me.png"
            alt="about me text"
            className="h-full w-auto object-contain will-change-transform"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
          />
        </div>

        {/* content box */}
        <div
          className="flex flex-col items-center justify-center bg-orange-400/40 rounded-xl shadow-xl content-box"
          style={{
            padding: "max(2rem, 2vw)",
            marginTop: "max(2.5rem, 3vh)",
          }}
        >
          <div className="content-wrapper">
            <img
              src="ananya_image.jpg"
              className="rounded-xl"
              style={{
                width: "clamp(15rem, 25vw, 25rem)",
                minWidth: "min(100%, 15rem)",
                height: "auto",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            <div className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
              <h1
                className="work-sans font-semibold"
                style={{
                  fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                }}
              >
                Hi! I'm Ananya Bhatia!
              </h1>

              <p
                className="work-sans"
                style={{
                  fontSize: "clamp(0.875rem, 1.125vw, 1.125rem)",
                  marginTop: "max(0.5rem, 1vh)",
                }}
              >
                I'm a fourth-year student at Northwestern University pursuing
                combined Bachelor's and Master's degrees in
                <b> Computer Science</b> with a minor in Art and a certificate
                in Integrated Marketing Communications from the Medill School of
                Journalism. My goal is to bring an interdisciplinary perspective
                to software engineering by incorporating principles from
                human-computer interaction, mathematics, consumer psychology,
                and graphical interface design.
              </p>

              <h1
                className="work-sans font-semibold"
                style={{
                  fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                  marginTop: "max(1.5rem, 2vh)",
                }}
              >
                My interests!
              </h1>

              {/* interests chips */}
              <div
                className="flex flex-wrap"
                style={{
                  gap: "max(0.5rem, 0.5vw)",
                  marginTop: "max(0.5rem, 1vh)",
                }}
              >
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className={`rounded-full ${
                      orangeChips[i % orangeChips.length]
                    } transition-colors cursor-default duration-200 work-sans`}
                    style={{
                      padding: "max(0.25rem, 0.35vh) max(0.75rem, 0.75vw)",
                      fontSize: "clamp(0.875rem, 1vw, 1rem)",
                    }}
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
