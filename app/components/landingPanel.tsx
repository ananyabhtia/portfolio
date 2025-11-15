"use client";
import NavButton from "./navButton";

type LandingPanelProps = {
  openPanel: string;
  setOpenPanel: (value: string) => void;
};

export default function LandingPanel({
  openPanel,
  setOpenPanel,
}: LandingPanelProps) {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-1/4">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-400/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/50 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/7">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-500/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/30 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-transparent opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100"></div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <h1>Ananya Bhatia</h1>
      </div>
      <NavButton buttonText="hello" onClick={() => setOpenPanel("projects")} />
    </div>
  );
}
