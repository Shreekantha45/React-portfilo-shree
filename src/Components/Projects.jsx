import React, { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const allTechs = [
  "All",
  ...new Set(PROJECTS.flatMap((project) => project.technologies)),
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    selectedTech === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  const openModal = (project) => {
    setModalProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === modalProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? modalProject.images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (!modalProject) return;
    if (e.key === "Escape") setModalProject(null);
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalProject]);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded font-semibold transition ${
              selectedTech === tech
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Zigzag Layout */}
      <div className="space-y-16 px-4">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 cursor-pointer`}
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl shadow-md hover:shadow-xl transition object-cover h-72"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {project.description.length > 180
                    ? project.description.slice(0, 180) + "..."
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-blue-800 bg-neutral-200 rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.livelink}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repolink}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal remains unchanged */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-xl max-w-5xl w-full grid md:grid-cols-2 gap-6 p-6 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 text-2xl hover:text-gray-800"
              >
                &times;
              </button>

              {/* Modal Image */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src={modalProject.images[currentImageIndex]}
                  alt={modalProject.title}
                  className="rounded-lg max-h-[400px] w-full object-contain"
                />
                {modalProject.images.length > 1 && (
                  <div className="flex justify-between items-center mt-4 w-full">
                    <button
                      onClick={prevImage}
                      className="text-sm px-3 py-1 bg-gray-200 dark:bg-neutral-800 rounded hover:bg-gray-300"
                    >
                      ⬅ Prev
                    </button>
                    <div className="flex gap-1">
                      {modalProject.images.map((_, idx) => (
                        <span
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                            currentImageIndex === idx
                              ? "bg-blue-600"
                              : "bg-gray-400 dark:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextImage}
                      className="text-sm px-3 py-1 bg-gray-200 dark:bg-neutral-800 rounded hover:bg-gray-300"
                    >
                      Next ➡
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {modalProject.title}
                  </h2>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                    {modalProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {modalProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={modalProject.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={modalProject.repolink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
