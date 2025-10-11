import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "JavaScript", level: 95 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-4 bg-blue-500 dark:bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
