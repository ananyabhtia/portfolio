"use client";
import { easeInOut, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

export default function ContactPanel({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="flex flex-col h-full bg-white will-change-transform overflow-auto"
      style={{
        paddingLeft: "max(1.25rem, 1.25vw)",
        paddingRight: "max(1.25rem, 1.25vw)",
      }}
    >
      <button
        onClick={onBack}
        className="absolute shadow-md work-sans-italic border-2 font-semibold rounded-full hover:bg-green-300 active:bg-green-400 transition cursor-pointer bg-white z-100"
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
        {/* centered image */}
        <motion.img
          src="contact-caps.png"
          alt="contact me text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center"
        style={{
          paddingRight: "max(1.5rem, 2vw)",
          paddingLeft: "max(1.5rem, 2vw)",
          marginTop: "max(1rem, 1.5vh)",
          marginBottom: "max(0.5rem, 1vh)",
        }}
      >
        <p
          className="work-sans font-semibold"
          style={{
            fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
            marginTop: "max(0.5rem, 0.75vh)",
            textAlign: "center",
          }}
        >
          I love meeting new people!
        </p>
        <p
          className="work-sans font-medium"
          style={{
            fontSize: "clamp(0.875rem, 1.125vw, 1.125rem)",
            textAlign: "center",
          }}
        >
          Connect with me on any of my socials below, and explore my resume for
          more about my work!
        </p>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(max(200px, 25vw), 1fr))",
          gap: "max(2rem, 2.5vw)",
          justifyContent: "center",
          marginLeft: "max(15vw, 5rem)",
          marginRight: "max(15vw, 5rem)",
          marginBottom: "max(3rem, 6vh)",
          marginTop: "max(1.25rem, 2vh)",
        }}
      >
        <a
          href="https://www.linkedin.com/in/ananyabhtia/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="flex flex-col justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300"
            style={{ height: "14rem" }}
          >
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              style={{ fontSize: "clamp(3rem, 4vw, 3.75rem)" }}
              className="text-green-800"
            />
            <h1
              className="work-sans font-semibold"
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                marginTop: "max(0.5rem, 0.75vh)",
                textAlign: "center",
                paddingLeft: "1vw",
                paddingRight: "1vw",
              }}
            >
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
          <div
            className="flex flex-col justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300"
            style={{ height: "14rem" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "clamp(3rem, 4vw, 3.75rem)" }}
              className="text-green-800"
            />
            <h1
              className="work-sans font-semibold"
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                marginTop: "max(0.5rem, 0.75vh)",
                textAlign: "center",
                paddingLeft: "1vw",
                paddingRight: "1vw",
              }}
            >
              My repositories
            </h1>
          </div>
        </a>
        <a href="mailto:ananyab@u.northwestern.edu" className="block">
          <div
            className="flex flex-col justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300"
            style={{ height: "14rem" }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "clamp(3rem, 4vw, 3.75rem)" }}
              className="text-green-800"
            />
            <h1
              className="work-sans font-semibold"
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                marginTop: "max(0.5rem, 0.75vh)",
                textAlign: "center",
                paddingLeft: "1vw",
                paddingRight: "1vw",
              }}
            >
              Email me
            </h1>
          </div>
        </a>
        <a
          href="/Ananya-Bhatia-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="flex flex-col justify-center items-center bg-green-100 rounded-xl shadow-xl cursor-pointer hover:bg-green-200 active:bg-green-300"
            style={{ height: "14rem" }}
          >
            <FontAwesomeIcon
              icon={faFile}
              style={{ fontSize: "clamp(3rem, 4vw, 3.75rem)" }}
              className="text-green-800"
            />
            <h1
              className="work-sans font-semibold"
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                marginTop: "max(0.5rem, 0.75vh)",
                textAlign: "center",
                paddingLeft: "1vw",
                paddingRight: "1vw",
              }}
            >
              View my resume
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
