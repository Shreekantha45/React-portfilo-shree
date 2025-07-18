import project3 from "/public/projects/Project3.png";
import Hero from "/public/projects/Hero.png";
import About from "/public/projects/About.png";
import Contact from "/public/projects/Contact.png";
import Create from "/public/projects/Create.page.png";
import Home from "/public/projects/Home.page.png";
import Resume from "/public/projects/Resume.png";
import Tech from "/public/projects/Tech.png";
import Update from "/public/projects/Update.page.png";
import Project from "/public/projects/Project.png";
import { create } from "framer-motion/client";




export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    images: [Hero, About, Contact, Tech, Resume, Project],
    description:
      "My personal portfolio website built using React.js and Tailwind CSS. The website showcases my projects, skills, and experience in an interactive and visually appealing manner. The project helped me improve my React skills, including component composition, routing, and state management. It also allowed me to practice responsive design and accessibility best practices.", 

    technologies: ["HTML", "JavaScript", "React", "Tailwind"],
    livelink: "https://react-portfilo-shree.vercel.app/",
    repolink: "https://github.com/Shreekantha45/React-portfilo-shree",
  },
  {
    title: "MERN-Stack E-commerce Product Management Platform",
    images: [Create, Home, Update],
    description:
      "Developed a full-stack web application for product management using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented complete CRUD (Create, Read, Update, Delete) functionality for products, featuring a responsive user interface built with Tailwind CSS and seamless navigation using React Router DOM. The application allows users to create, view, update, and delete products, with data stored in a MongoDB database. The project showcases my skills in full-stack development, including API integration, state management with React hooks, and responsive design principles.", 

    technologies: ["JavaScript", "React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    livelink: "https://product-store-frontend-h5hh.onrender.com",
    repolink: "https://github.com/Shreekantha45/Product-Store",
  },
];

export const CONTACT = {
  address: "Nagawara, Bangalore, Karnataka, India",
  phoneNo: "+91    8496945667 ",
  email: "kshreekanth45@gmail.com",
};
