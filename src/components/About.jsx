import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-center text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I'm a passionate Full Stack Developer with experience in building responsive, user-friendly web applications using React, TailwindCSS, and Node.js. I love turning ideas into real-world applications with clean, maintainable code.
      </motion.p>
    </section>
  );
};

export default About;
