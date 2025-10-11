// src/components/ProjectPopup.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectPopup = ({ project, close }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg w-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
        <p className="mb-4">{project.desc}</p>
        <div className="flex gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Live Demo
            </a>
          )}
          {project.git && (
            <a
              href={project.git}
              target="_blank"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              GitHub Repo
            </a>
          )}
        </div>
        <button
          onClick={close}
          className="mt-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectPopup;
