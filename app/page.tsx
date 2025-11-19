"use client";
import { useState } from "react";
import { motion } from "motion/react";
import LandingPanel from "./components/landingPanel";
import ProjectsPanel from "./components/projectsPanel";
import ContactPanel from "./components/contactPanel";
import FunPanel from "./components/funPanel";
import MePanel from "./components/mePanel";

export default function Home() {
  const [openPanel, setOpenPanel] = useState<
    "landing" | "projects" | "contact" | "fun" | "me"
  >("landing");
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* cat logo watermark! */}
      <img
        src="logo-black.png"
        className="absolute opacity-25 z-100"
        style={{
          bottom: "max(1.25rem, 1.5vh)",
          right: "max(1.25rem, 1.5vw)",
          width: "clamp(3rem, 4vw, 4rem)",
        }}
      />
      {/* landing panel */}
      <motion.div
        initial={{ y: "0", x: "0" }}
        animate={{
          y:
            openPanel === "projects"
              ? "100%"
              : openPanel === "contact"
              ? "-100%"
              : "0",
          x: openPanel === "fun" ? "100%" : openPanel === "me" ? "-100%" : "0",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <LandingPanel
          onOpenProjects={() => setOpenPanel("projects")}
          onOpenContact={() => setOpenPanel("contact")}
          onOpenFun={() => setOpenPanel("fun")}
          onOpenMe={() => setOpenPanel("me")}
        />
      </motion.div>

      {/* projects panel */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: openPanel === "projects" ? "0" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ProjectsPanel onBack={() => setOpenPanel("landing")} />
      </motion.div>

      {/* contact panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: openPanel === "contact" ? "0" : "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ContactPanel onBack={() => setOpenPanel("landing")} />
      </motion.div>

      {/* fun panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: openPanel === "fun" ? "0" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <FunPanel onBack={() => setOpenPanel("landing")} />
      </motion.div>

      {/* me panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: openPanel === "me" ? "0" : "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <MePanel onBack={() => setOpenPanel("landing")} />
      </motion.div>
    </div>
  );
}
