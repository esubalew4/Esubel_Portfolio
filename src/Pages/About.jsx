import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { assets } from "../assets/assets";
const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold  text-accent text-center"
      >
        About Me
      </motion.h2>
      <section
        id="About"
        className="mx-auto px-6 py-14 text-white flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border-4 border-accent"
        >
          <img
            src={assets.myPic}
            alt="Esubalew"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div className="flex-1 space-y-6 text-text-primary text-lg leading-relaxed">
          {/* Points with icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
          >
            <motion.p
              custom={1}
              variants={aboutVariants}
              className="flex items-center gap-3"
            >
              <FaUserCircle className="text-accent text-2xl flex-shrink-0" />I
              am a passionate frontend developer who crafts clean,
              user-friendly, and performant websites.
            </motion.p>

            <motion.p
              custom={2}
              variants={aboutVariants}
              className="flex items-center gap-3"
            >
              <FaLaptopCode className="text-accent text-2xl flex-shrink-0" />
              Skilled in modern JavaScript frameworks like React, CSS, and
              smooth animations.
            </motion.p>

            <motion.p
              custom={3}
              variants={aboutVariants}
              className="flex items-center gap-3"
            >
              <FaLightbulb className="text-accent text-2xl flex-shrink-0" />
              Constant learner driven by problem-solving and elegant solutions.
            </motion.p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.05, duration: 0.6, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href={`${assets.CSS}`}
              className="bg-accent hover:brightness-110 text-white cursor-pointer px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
