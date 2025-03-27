import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    title: "Amazon Clone",
    image: project1,
    description:
      "Amazon Clone built using pure HTML & CSS!  This project helped me improve my front-end skills by focusing on Responsive Design – Optimized for different screen sizes Flexbox & Grid – Structured layout for a seamless shopping experience CSS Styling – Clean and modern UI with attention to detail.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livelink: "https://amazon-clone-tau-snowy.vercel.app/",
    repolink: "https://github.com/Shreekantha45/Amazon_Clone",
  },
  {
    title: "Rock-Paper-Scissors Game",
    image: project2,
    description:
      "This is a classic Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. The game allows users to play against a computer opponent that randomly selects Rock, Paper, or Scissors. The player's choice is compared with the computer’s choice, and the result is displayed instantly. The game also keeps track of the score, making it fun and engaging This project helped me improve my DOM manipulation, event handling, and logic-building skills in JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livelink: "https://mini-project-scissors-game.vercel.app/",
    repolink: "https://github.com/Shreekantha45/MiniProject---Scissors-Game",
  },
  {
    title: "TIC-TAC-TOE Game",
    image: project3,
    description:
      "A simple Tic-Tac-Toe game built using React.js. The game allows two players to take turns marking the board with 'X' and 'O'. The game logic checks for a winning combination after each move and declares the winner. The project helped me enhance my React skills, including state management, component lifecycle methods, and conditional rendering.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    livelink: "https://tic-tac-toe-ivory-iota.vercel.app/",
    repolink: "https://github.com/Shreekantha45/Tic-Tac-Toe",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "My personal portfolio website built using React.js and Tailwind CSS. The website showcases my projects, skills, and experience in an interactive and visually appealing manner. The project helped me improve my React skills, including component composition, routing, and state management. It also allowed me to practice responsive design and accessibility best practices.", 

    technologies: ["HTML", "JavaScript", "React.js", "Tailwind CSS"],
    livelink: "https://react-portfilo-shree.vercel.app/",
    repolink: "https://github.com/Shreekantha45/React-portfilo-shree",
  },
];

export const CONTACT = {
  address: "Nagawara, Bangalore, Karnataka, India",
  phoneNo: "+91    8496945667 ",
  email: "kshreekanth45@gmail.com",
};
