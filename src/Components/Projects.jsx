import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const allTechs = [
  "All",
  ...new Set(PROJECTS.flatMap(project => project.technologies))
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  // Filter projects based on selected tech
  const filteredProjects = selectedTech === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.technologies.includes(selectedTech));

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
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

      <div>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-8"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-lg cursor-pointer"
              onClick={() => setModalProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded shadow-lg w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:px-8"
            >
              <h6 className="mb-4 font-semibold text-2xl">{project.title}</h6>
              <p className="mb-6 text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="break-words text-sm font-bold text-blue-800 bg-neutral-200 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-lg max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="rounded mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-3xl font-semibold mb-3">{modalProject.title}</h3>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">{modalProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {modalProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm font-bold text-blue-800 bg-neutral-200 rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
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
        </div>
      )}
    </div>
  );
};

export default Projects;

