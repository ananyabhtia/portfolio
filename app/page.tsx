"use client";
import LandingPanel from "./components/landingPanel";
import { useState } from "react";

export default function Home() {
  const [openPanel, setOpenPanel] = useState<
    "landing" | "projects" | "socials" | "fun" | "me"
  >("landing");
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <LandingPanel />
    </div>
  );
}
