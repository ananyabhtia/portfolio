"use client";
import { easeInOut, motion } from "motion/react";

export default function ProjectsPanel({ onBack }: { onBack: () => void }) {
  const projects = [
    { title: "snaplet", skills: ["React", "Tailwind", "Firebase"] },
    { title: "salad", skills: ["Python", "Flask", "SQL"] },
    { title: "Good Neighbor", skills: ["Next.js", "Framer Motion"] },
    { title: "Ignite", skills: ["AWS", "Lambda", "API Gateway"] },
    { title: "Course Marketplace", skills: ["React", "Tailwind", "Firebase"] },
    { title: "TIDAL Lab", skills: ["Python", "Flask", "SQL"] },
    { title: "Project 3", skills: ["Next.js", "Framer Motion"] },
    { title: "Project 4", skills: ["AWS", "Lambda", "API Gateway"] },
    { title: "Project 1", skills: ["React", "Tailwind", "Firebase"] },
    { title: "Project 2", skills: ["Python", "Flask", "SQL"] },
    { title: "Project 3", skills: ["Next.js", "Framer Motion"] },
    { title: "Project 4", skills: ["AWS", "Lambda", "API Gateway"] },
  ];

  return (
    <div className="flex flex-col h-full bg-white pl-5 pr-5">
      {/* header div */}
      <div className="flex flex-row h-1/6 items-center justify-between mt-10 pl-6 pr-6">
        {/* spacer */}
        <div className="w-1/3" />

        {/* centered image */}
        <motion.img
          src="projects-text.png"
          alt="projects text"
          className="h-full w-auto object-contain flex-1 mx-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />

        {/* button on right */}
        <div className="flex justify-end w-1/3">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ↑ Back
          </button>
        </div>
      </div>
      {/* body grid div */}
      <div className="grid grid-cols-4 gap-6 p-6 h-full overflow-auto">
        {/* card div */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full h-full border-2 border-white rounded-xl shadow-xl p-3"
          >
            <img
              className="h-3/5 w-full rounded-xl object-cover"
              src={"file.svg"}
            />
            <h1 className="work-sans font-semibold text-xl mt-2">
              {project.title}
            </h1>
            {/* skills div */}
            <div className="flex flex-wrap gap-2 justify-center mt-2 overflow-auto">
              {project.skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-full bg-pink-300 hover:bg-pink-500 transition-colors cursor-default duration-200 work-sans"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
