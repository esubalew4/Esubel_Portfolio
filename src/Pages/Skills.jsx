import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = (props) => {
  const isDark = props.isDark;

  const skills = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs
          className={`${isDark ? "text-gray-200" : "text-gray-800"}`}
        />
      ),
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
  ];

  return (
    <section id="Skills" className="py-16 bg-[var(--color-primary)] text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-accent">Skills & Technologies</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-bg-nav rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotate: 3, transition: { duration: 0.2 } }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-sm font-medium text-text-primary">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
