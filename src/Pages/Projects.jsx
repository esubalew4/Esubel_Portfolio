import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { supabase } from "../SupabaseClient";
import Loading from "../Components/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //   hide scrollbar when pop ups
  if (activeProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const fetchedData = async () => {
    try {
      const { data, error: er } = await supabase
        .from("portfolio-projects")
        .select("*")
        .order("created_at", { ascending: true });
      if (er) throw er;
      setProjects(data);
    } catch (error) {
      console.error("Error while fetching:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <section className="py-14 text-text-primary relative" id="Projects">
      {/* box container */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-accent">Projects</span>
        </motion.h2>
        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* single box */}
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-bg-nav rounded-xl overflow-hidden shadow-lg shadow-gray-900/20 hover:shadow-accent/50  transition-all flex flex-col justify-between"
              >
                <div
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={`${project.image_url}`}
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
        )}
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
              {activeProject.challenges}
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
