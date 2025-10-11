import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  // Initialize state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply/remove dark class on html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-20 bg-white dark:bg-gray-900 transition-colors sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-900 dark:text-white">Srivatsan</div>
      <ul className="flex gap-6 items-center">
        <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
