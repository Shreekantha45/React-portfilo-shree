import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
       className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -100}}
              transition={{ duration: 1.5}}
             className="w-full lg:w-1/3 mt-14">
              <img
                src={project.image}
                width={550}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial={{ opacity: 0, x: 100}}
              transition={{ duration: 1.5}}
             className="w-full max-w-xl lg:w-1/2 lg:px-8">
              <h6 className="mb-6 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="break-words sm:text-base mr-3 rounded bg-neutral-200 px-1 py-1 text-sm font-bold text-blue-800 transition"
                >
                  {tech}
                </span>
              ))}

              <div className="mt-4 flex gap-2">
                <a href={project.livelink} target="blank" rel="noopener noreffer">
                  <button className="px-4 py-2 bg-black-500 text-white rounded-xl hover:bg-purple-950 transition">
                    Live Demo
                  </button>
                </a>
                <a href={project.repolink} target="blank" rel="noopener noreffer">
                  <button className="px-4 py-2 bg-black-500 text-white rounded-xl hover:bg-purple-950 transition">
                    GitHub Repo
                  </button>
                </a>

              </div>
              
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
