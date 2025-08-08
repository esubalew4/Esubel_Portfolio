import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const languages = ["JavaScript", "React", "TypeScript", "Tailwind CSS"];

const Hero = (props) => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6 mt-4 z-1"
    >
      <div className="max-w-4xl text-center">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-lg mb-4"
        >
          Hello, I'm Esubalew
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-text-primary leading-tight"
        >
          I Build Modern & Creative Websites
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-text-primary contrast-50 mt-6 max-w-2xl mx-auto"
        >
          I'm a frontend developer passionate about creating visually appealing,
          high-performance, and user-friendly web experiences.
        </motion.p>

        {/* Language/Skills list */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          {languages.map((lang) => (
            <li
              key={lang}
              className="bg-accent/5 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium"
            >
              {lang}
            </li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <AnchorLink href="#Projects">
            <button className="px-6 py-3 bg-accent hover:brightness-125 cursor-pointer rounded-full text-white font-medium transition">
              View My Work
            </button>
          </AnchorLink>
          <AnchorLink href="#contact">
            <button className="px-6 py-3 border border-accent cursor-pointer text-accent hover:bg-accent hover:text-white rounded-full font-medium transition">
              Contact Me
            </button>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
