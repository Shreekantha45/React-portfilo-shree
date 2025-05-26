import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Technologies", path: "/tech" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow dark:text-white">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/">
          <img src={logo} alt="LOGO" className="w-32 h-auto" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 text-2xl mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/shreekantha-k-106088253"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shreekantha45"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition duration-300"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

