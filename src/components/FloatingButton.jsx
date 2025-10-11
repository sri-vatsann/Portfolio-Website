// src/components/FloatingButton.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <a href="mailto:srivatsan2910@gmail.com" className="p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition">
        <FaEnvelope size={20} />
      </a>
      <a href="https://github.com/sri-vatsann" target="_blank" className="p-4 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg transition">
        <FaGithub size={20} />
      </a>
      <a href="https://linkedin.com/in/srivatsan29" target="_blank" className="p-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition">
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default FloatingButton;
