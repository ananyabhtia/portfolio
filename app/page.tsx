"use client";
import { useState } from "react";
import { motion } from "motion/react";
import LandingPanel from "./components/landingPanel";
import ProjectsPanel from "./components/projectsPanel";
import SocialsPanel from "./components/socialsPanel";
import FunPanel from "./components/funPanel";
import MePanel from "./components/mePanel";

export default function Home() {
  const [openPanel, setOpenPanel] = useState<
    "landing" | "projects" | "socials" | "fun" | "me"
  >("landing");
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* landing panel */}
      <motion.div
        initial={{ y: "0", x: "0" }}
        animate={{
          y:
            openPanel === "projects"
              ? "100%"
              : openPanel === "socials"
              ? "-100%"
              : "0",
          x: openPanel === "fun" ? "100%" : openPanel === "me" ? "-100%" : "0",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <LandingPanel
          onOpenProjects={() => setOpenPanel("projects")}
          onOpenSocials={() => setOpenPanel("socials")}
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

      {/* socials panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: openPanel === "socials" ? "0" : "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <SocialsPanel onBack={() => setOpenPanel("landing")} />
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
