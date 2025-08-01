import React from "react";
import resumeImage from "../assets/Shreekantha_Resume.jpg"; // update path if needed
import { Award } from "lucide-react"; // Optional icon if using lucide-react

const Resume = () => {
  return (
    <div className="min-h-screen py-1 px-1 md:px-16 text-white bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center">My Resume</h1>

      <p className="mb-4 text-center max-w-2xl mx-auto">
        I am a passionate Full Stack Developer with a knack for crafting robust
        and scalable web applications.
      </p>

      <div className="flex justify-center mb-6">
        <a
          href="/Shreekantha_Resume.pdf"
          target="_blank"
          download="Shree_Resume"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
        >
          📥 Download Resume
        </a>
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-10">
        <img
          src={resumeImage}
          alt="Shreekantha Resume"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Certifications Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Certifications
        </h2>

        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            {/* Optional Oracle Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png"
              alt="Oracle Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Issued by Oracle – <span className="italic">May 21, 2025</span><br />
                Credential ID:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">
                  101666901OCI25AICFA
                </code>
              </p>
              <a
                href="/eCertificate.pdf"
                target="_blank"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
              >
                📄 View Certificate (PDF)
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            {/* Optional Oracle Logo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                MERN Stack programming
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Issued by Oracle – <span className="italic">March, 2024</span><br />
              </p>
              <a
                href="/MERN Stack.pdf"
                target="_blank"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
              >
                📄 View Certificate (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
