import React from "react";
import profileP from "../assets/ProfileS.jpg"; // Adjust the path as necessary
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4 md:px-8 lg:mb-36">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div>
          <div className="w-full lg:w-2/2 text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl tracking-tight lg:mt-16 lg:text-7xl "
            >
              Shreekantha Kudlur
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl font-semibold text-transparent"
            >
              Frontend & Backend Developer
              <br />
              Full Stack Developer
              
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-sm md:text-base font-light tracking-tight"
            >
              I am a passionate Full Stack Developer with a knack for crafting
              robust and scalable web applications. As a fresher, I have honed
              my skills in front-end technologies like React.js and back-end
              technologies like Node.js, NoSQL, and MongoDB. My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences. I thrive
              on learning new technologies and building applications that solve
              real-world problems efficiently.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full w-48 h-48 object-cover md:w-72 md:h-72 lg:w-96 lg:h-96 shadow-lg"
              src={profileP}
              alt="Shreekantha K"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
