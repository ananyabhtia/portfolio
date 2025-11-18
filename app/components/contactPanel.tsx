"use client";
import { easeInOut, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

export default function ContactPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white pl-5 pr-5 will-change-transform">
      <button
        onClick={onBack}
        className="absolute top-5 right-5 shadow-md work-sans-italic text-xl border-2 font-semibold px-6 py-3 rounded-full hover:bg-green-300 active:bg-green-400 transition cursor-pointer"
      >
        BACK
      </button>
      {/* header div */}
      <div className="flex flex-row h-1/8 items-center justify-center mt-20 pl-6 pr-6">
        {/* centered image */}
        <motion.img
          src="contact-caps.png"
          alt="contact me text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>
      <div className="flex flex-col items-center justify-center pr-6 pl-6 mt-4 mb-2 ">
        <p className="work-sans text-2xl font-semibold mt-2">
          I love meeting new people!
        </p>
        <p className="work-sans text-lg font-medium">
          Connect with me on any of my socials below, and explore my resume for
          more about my work!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 h-5/6 justify-center ml-60 mr-60 mb-10 mt-5">
        <a
          href="https://www.linkedin.com/in/ananyabhtia/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col h-[14rem] justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300">
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              className="text-6xl text-green-800"
            />
            <h1 className="work-sans font-semibold text-2xl mt-2">
              Let's connect
            </h1>
          </div>
        </a>
        <a
          href="https://github.com/ananyabhtia"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col h-[14rem] justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-6xl text-green-800"
            />
            <h1 className="work-sans font-semibold text-2xl mt-2">
              My repositories
            </h1>
          </div>
        </a>
        <a href="mailto:ananyab@u.northwestern.edu" className="block">
          <div className="flex flex-col h-[14rem] justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-6xl text-green-800"
            />
            <h1 className="work-sans font-semibold text-2xl mt-2">Email me</h1>
          </div>
        </a>
        <a
          href="/Ananya-Bhatia-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col h-[14rem] justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300">
            <FontAwesomeIcon
              icon={faFile}
              className="text-6xl text-green-800"
            />
            <h1 className="work-sans font-semibold text-2xl mt-2">
              View my resume
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
