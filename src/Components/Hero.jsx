import profileP from "../assets/ProfileS.jpg";
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
    <div className="min-h-screen flex items-center border-b border-neutral-900 px-4 md:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-5xl tracking-tight lg:text-7xl font-bold"
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
            I'm a passionate Full Stack Developer with a strong focus on building robust and scalable web applications. I specialize in front-end technologies like React.js and back-end development using Node.js, MongoDB, and NoSQL databases.
            <br />
            As a fresher, I've dedicated my time to mastering modern development tools and best practices to deliver clean, maintainable, and efficient code. My goal is to create meaningful digital experiences that help businesses grow and engage users more effectively.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
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
  );
};

export default Hero;
