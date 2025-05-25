import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="w-full dark:text-white shadow-inner mt-auto py-6 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 h-28 object-contain" />
          </Link>
        </div>
        {/* Center: Info and Icons */}
        <div className="text-center">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Sreekantha. All rights reserved.
          </p>
          <br />
          <div className="flex justify-center space-x-4 text-2xl">
            <a
              href="https://github.com/Shreekantha45"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shreekantha-k-106088253"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kshreekantha45@gmail.com"
              className="hover:text-blue-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        {/* Right: Empty or Optional Section */}
        <div className="hidden md:block w-14" />{" "}
        {/* spacer for layout balance */}
      </div>
    </footer>
  );
};

export default Footer;
