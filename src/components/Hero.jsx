import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "Tailwind", "Node.js", "JavaScript", "TypeScript", "MongoDB"];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-800 transition-colors">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >
        Hi, I'm Srivatsan
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
      >
        Full Stack Developer
      </motion.p>

      {/* Skill gradient badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
