import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { assets } from "../assets/assets";
import { FaX } from "react-icons/fa6";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  //   hide scrollbar when pop ups
  if (activeProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const projects = [
    {
      title: "React ToDo App",
      cover: `${assets.gsapWordmark}`,
      techs: ["React.js", "TailwindCSS"],
      features: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet. ",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet.",
      ],
      challenges: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor  adipisicing elit.",
        "Lorem ipsum, dolor sit amet  adipisicing elit.",
      ],
      live: "https://google.com",
      code: "https://github.com/",
    },
    {
      title: "React ToDo App",
      cover: `${assets.gsapWordmark}`,
      techs: ["React.js", "TailwindCSS"],
      features: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet. ",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusamus labore doloremque eveniet.",
      ],
      challenges: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor  adipisicing elit.",
        "Lorem ipsum, dolor sit amet  adipisicing elit.",
      ],
      live: "https://google.com",
      code: "https://github.com/",
    },
  ];

  return (
    <section className="py-20 text-text-primary relative" id="Projects">
      {/* box container */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-accent">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* single box */}
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              className="bg-bg-nav rounded-xl overflow-hidden shadow-lg shadow-gray-900/40 hover:shadow-accent/50  transition-all flex flex-col justify-between"
            >
              <div
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <span className="px-4 py-2 bg-accent text-white font-semibold rounded-lg">
                    View Details
                  </span>
                </div>
              </div>
              {/* text box */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-3 text-center">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/5 border-accent/40 border text-accent text-sm font-medium shadow-glow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-accent"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=" fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-[#12182b] p-6 rounded-xl max-w-2xl mx-2 max-h-[60vh] md:max-h-[90vh] w-full relative text-white overflow-y-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-xl hover:text-accent"
            >
              <FaX />
            </button>
            <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
            <h4 className="text-xl font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {activeProject.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-accent/5 border-accent/40 border text-accent text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h4 className="text-xl font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {activeProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mb-2">Challenges:</h4>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {activeProject.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-black hover:brightness-125 duration-150 font-semibold rounded-lg flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={activeProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 ${
                  activeProject.code
                    ? "bg-accent hover:brightness-125 duration-150 text-black"
                    : "bg-accent/20 text-black/50"
                } text-black font-semibold rounded-lg flex items-center gap-2`}
              >
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
