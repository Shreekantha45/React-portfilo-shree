import React from "react";
import profilePic from "../assets/about.jpg";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div>
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me </span>
      </h1>
      
        <div
         className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Image Section */}
          <motion.img
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
            src={profilePic}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5}}
           className="w-full md:w-1/2 text-center md:text-left gap-6">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
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

export default Details;
