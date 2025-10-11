// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <p className="text-center mb-6">Feel free to reach out for collaborations or just to say hi 👋</p>
      <motion.div
        className="flex justify-center gap-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <a href="mailto:srivatsan2910@gmail.com" className="p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition">
          <FaEnvelope size={20} />
        </a>
        <a href="https://github.com/sri-vatsann" target="_blank" className="p-4 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg transition">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/srivatsan29" target="_blank" className="p-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition">
          <FaLinkedin size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
