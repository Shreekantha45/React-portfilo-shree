import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img src={logo} alt="LOGO" className="w-32 h-30" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <div>
          <a href="https://www.linkedin.com/in/shreekantha-k-106088253" target="blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaLinkedin size={34}/> 
          </a>
          </div>
          <div>
          <a href="https://github.com/Shreekantha45" target="blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaGithub size={34}/> 
          </a>
          </div>
          <div>
          <a href="#" target="blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaInstagram size={34}/> 
          </a>
          </div>
          <div>
          <a href="#" target="blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaSquareXTwitter size={34}/> 
          </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
