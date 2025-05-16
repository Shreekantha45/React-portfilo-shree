import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/ProfileP.jpg";

const About = () => {
  return (
    <div className="px-4 py-16 border-b">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white"
      >
        About<span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 p-6 lg:p-12  rounded-2xl shadow-lg">
        
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-neutral-600 shadow-md"
        >
          <img
            src={Profile}
            alt="Sreekantha"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/3 text-center lg:text-left"
        >
          <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed tracking-wide">
            I am a passionate and versatile full-stack developer dedicated to
            building efficient and user-friendly web applications. With
            experience in React, Node.js, and MongoDB, I constantly explore
            new technologies and refine my skills to stay ahead in the
            ever-evolving tech landscape. My journey in web development began
            with a deep curiosity about how things work, which has grown into
            a commitment to solving complex problems and delivering
            high-quality solutions. I thrive in collaborative environments and
            enjoy contributing to open-source projects. Beyond coding, I love
            staying active and continuously learning about emerging
            technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
