import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-20 bg-bg-primary text-text-primary"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Work Together
      </motion.h2>

      {/* Sub Text */}
      <motion.p
        className="text-center text-lg mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Got a project idea or just want to say hi? Fill out the form or connect
        with me on social media.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="max-w-2xl mx-auto bg-bg-nav p-6 rounded-xl shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-accent outline-none placeholder:text-text-primary/60 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-accent outline-none placeholder:text-text-primary/60 transition"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-accent placeholder:text-text-primary/60 outline-none transition"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-accent text-white font-medium hover:scale-101 cursor-pointer hover:shadow-lg duration-150"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {[
          { icon: FaGithub, link: "https://github.com/esubalew4" },
          {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/esubalew-hussen-763927361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          { icon: FaTelegram, link: "https://t.me/esubalewhussen" },
        ].map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent transition transform hover:scale-125 hover:shadow-glow"
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
