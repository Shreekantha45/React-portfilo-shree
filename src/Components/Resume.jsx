import React from "react";
import resumeImage from "../assets/Shree_Resume.jpg"; // update path if needed

const Resume = () => {
  return (
    <div className="min-h-screen py-1 px-1 md:px-16  text-black  dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">My Resume</h1>

      <p className="mb-4 text-center max-w-2xl mx-auto">
        I am a passionate Full Stack Developer with a knack for crafting robust
        and scalable web applications.
      </p>

      <div className="flex justify-center mb-6">
        <a
          href="/resume.pdf" // Place your resume PDF in the public/ folder
          target="_blank"
          download="Shree_Resume"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
        >
          📥 Download Resume
        </a>
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <img
          src={resumeImage}
          alt="Shreekantha Resume"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Resume;
