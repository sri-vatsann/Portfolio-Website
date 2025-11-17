// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectPopup from "./ProjectPopup";

const projects = [
  {
    name: "Aviate Clothing",
    desc: "Full-stack clothing e-commerce website built with React, TailwindCSS, and Firebase. Clean, responsive UI and modern design.",
    live: "https://aviate-clothing.vercel.app/#/home",
    git: "https://github.com/sri-vatsann/Aviate-Clothing.git",
  },
  {
    name: "Chuck Norris Joke App",
    desc: "Interactive app fetching dynamic jokes from the Chuck Norris API with category selection. Built with React, Redux Toolkit, Axios, and TailwindCSS.",
    live: "https://lnkd.in/gFMPyF6e",
    git: "https://lnkd.in/geHUbcTv",
  },
  {
    name: "Bulk Mail Application",
    desc: "Full-stack email automation app using React, Node.js, Express, MongoDB, and Nodemailer. Upload Excel files and send personalized emails in bulk.",
    live: "https://lnkd.in/gmUVA32W",
    git: "https://lnkd.in/gBt2u3RM",
  },
  {
    name: "Task Management App",
    desc: "Task manager with login/signup, add/edit/delete tasks, and responsive UI. Built with React, React Router DOM, and TailwindCSS.",
    live: "https://lnkd.in/g55kZn6s",
    git: "https://lnkd.in/gePyXRxa",
  },
  {
    name: "Movie Application",
    desc: "An Movie website with custom filters and many more functionalities alike Netflix",
    live: "https://movie-app-theta-sandy-94.vercel.app/",
    git: "https://github.com/sri-vatsann/Movie-app-.git"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(proj)}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>

      <ProjectPopup project={selectedProject} close={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
