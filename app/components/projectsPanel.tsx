"use client";
import { easeInOut, motion } from "motion/react";

export default function ProjectsPanel({ onBack }: { onBack: () => void }) {
  const projects = [
    {
      title: "snaplet",
      logo: "snaplet-logo.png",
      image: "snaplet-random.png",
      skills: [
        "React.js",
        "dnd-kit",
        "HTML",
        "Tailwind CSS",
        "NoSQL",
        "Firestore",
        "Firebase",
      ],
    },
    {
      title: "salad",
      logo: "salad-logo-01.svg",
      image: "salad-random.png",
      skills: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS EC2",
        "SSL",
      ],
    },
    {
      title: "Good Neighbor",
      image: "good-neighbor.png",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Google Maps API",
        "JavaScript",
        "HTML",
        "CSS",
        "Firebase",
        "Realtime Database",
        "Firebase Authentication",
      ],
    },
    {
      title: "Ignite",
      logo: "ignite-logo.png",
      image: "ignite-preview.png",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript",
        "Realtime Database",
        "Firebase Authentication",
        "Vite",
      ],
    },
    {
      title: "course-match",
      image: "course-mktplc-ss.png",
      skills: [
        "Ruby on Rails",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Kaminari",
        "Google Omniauth",
        "Faker",
        "Cucumber",
      ],
    },
  ];

  const rainbow = [
    "bg-pink-300 hover:bg-pink-500",
    "bg-red-300 hover:bg-red-500",
    "bg-orange-300 hover:bg-orange-500",
    "bg-yellow-200 hover:bg-yellow-400",
    "bg-green-300 hover:bg-green-500",
    "bg-blue-300 hover:bg-blue-500",
    "bg-purple-300 hover:bg-purple-500",
  ];

  return (
    <div className="flex flex-col h-full bg-white pl-5 pr-5 will-change-transform overflow-auto">
      <button
        onClick={onBack}
        className="absolute top-5 right-5 shadow-md work-sans-italic text-xl border-2 font-semibold px-6 py-3 rounded-full hover:bg-blue-300 active:bg-blue-400 transition cursor-pointer"
      >
        BACK
      </button>
      {/* header div */}
      <div className="flex flex-row h-1/6 items-center justify-center mt-10 pl-6 pr-6">
        {/* centered image */}
        <motion.img
          src="projects-caps.png"
          alt="projects text"
          className="h-full w-auto object-contain will-change-transform"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        />
      </div>
      <div className="flex flex-row items-center justify-center pr-6 pl-6 mt-4 mb-2">
        <p className="work-sans text-lg font-medium">
          Scroll to explore my research, class, and personal software projects.
          Click on a project to learn more (coming soon)!
        </p>
      </div>
      {/* body grid div */}
      <div className="grid grid-cols-3 gap-10 p-6">
        {/* card div */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full h-[30rem] rounded-xl shadow-xl p-4 bg-blue-100 hover:bg-blue-200  overflow-auto"
          >
            <img
              className="h-[16rem] w-full rounded-xl object-cover shrink-0"
              src={project.image || "file.svg"}
            />
            {project.logo ? (
              <img src={project.logo} className="h-1/9 object-cover mt-4" />
            ) : project.title === "Good Neighbor" ? (
              <h1 className="manrope font-extrabold text-3xl mt-4 text-indigo-900">
                {project.title}
              </h1>
            ) : (
              <h1 className="work-sans font-semibold text-3xl mt-4">
                {project.title}
              </h1>
            )}
            {/* skills div */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {project.skills.map((skill, i) => (
                <div
                  key={i}
                  className={`px-3 py-1 rounded-full ${
                    rainbow[i % rainbow.length]
                  } transition-colors cursor-default duration-200 work-sans`}
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
