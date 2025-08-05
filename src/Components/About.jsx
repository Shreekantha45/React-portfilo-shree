import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Shreekantha.jpg";

const About = () => {
  return (
    <div className="px-1 py-1 border-b">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white"
      >
        👨‍💻 About<span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 p-6 lg:p-12  rounded-2xl shadow-lg">
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
          {/* <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed tracking-wide">
            I'm Shreekantha Kudlur, a dedicated and enthusiastic Full Stack Developer with a deep interest in creating dynamic, user-friendly, and scalable web applications. <br />I have hands-on experience with the MERN Stack (MongoDB, Express.js, React.js, Node.js) and enjoy working across both frontend and backend. <br /> I take pride in writing clean, maintainable code and continuously improving my skills by building real-world projects. <br /> As a fresher, I’ve focused on gaining strong foundational knowledge in: <br /> 🌐 Frontend:       React.js, HTML5, CSS3, JavaScript, Tailwind CSS <br /> 🛠️ Backend: Node.js, Express.js, MongoDB, RESTful APIs <br /> ⚙️ Tools & Deployment: Git, GitHub, AWS, Vercel, Netlify I'm always eager to learn, collaborate, and contribute to impactful tech solutions. <br /> My goal is to join a team where I can grow, share my ideas, and help build great products. <br /> 📫 Let’s connect and create something amazing together!
          </p> */}

          <p>
            I'm <strong>Shreekantha Kudlur</strong>, a dedicated and
            enthusiastic <strong>Full Stack Developer</strong> with a deep
            interest in creating dynamic, user-friendly, and scalable web
            applications.
          </p>
          <p>
            I have hands-on experience with the <strong>MERN Stack</strong>{" "}
            (MongoDB, Express.js, React.js, Node.js) and enjoy working across
            both frontend and backend. I take pride in writing clean,
            maintainable code and continuously improving my skills by building
            real-world projects.
          </p>
          <p>
          As a fresher, I’ve focused on gaining strong foundational knowledge in:
          </p>
          <ul>
            <li>
              🌐 <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript,
              Tailwind CSS
            </li>
            <li>
              🛠️ <strong>Backend:</strong> Node.js, Express.js, MongoDB, RESTful
              APIs
            </li>
            <li>
              ⚙️ <strong>Tools & Deployment:</strong> Git, GitHub, AWS, Vercel,
              Netlify
            </li>
          </ul>
          <p>
            I'm always eager to learn, collaborate, and contribute to impactful
            tech solutions. My goal is to join a team where I can grow, share my
            ideas, and help build great products.
          </p>
          <p>📫 Let’s connect and create something amazing together!</p>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
