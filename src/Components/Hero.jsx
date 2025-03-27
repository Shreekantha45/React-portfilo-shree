import React from "react";
import profileP from "../assets/Hero.webp";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl "
            >
              Shreekantha K
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            < motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter">
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
        <div className="w-full lg:w-1/2 lg:p-2 mt-40">
          <div className="flex justify-center">
            <motion.img
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
           className="rounded-2xl h-150" src={profileP} alt="Shree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
