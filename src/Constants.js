// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/icons8-html5-48.png";
import cssLogo from "./assets/tech_logo/icons8-css3-48.png";
import javascriptLogo from "./assets/tech_logo/icons8-javascript-48.png";
import reactjsLogo from "./assets/tech_logo/icons8-react-native-24.png";

import reduxLogo from "./assets/tech_logo/icons8-redux-24.png";

import tailwindcssLogo from "./assets/tech_logo/icons8-tailwind-css-100.png";

import bootstrapLogo from "./assets/tech_logo/icons8-bootstrap-48.png";
import springbootLogo from "./assets/tech_logo/icons8-spring-boot-48.png";
import nodejsLogo from "./assets/tech_logo/icons8-nodejs-48.png";
import expressjsLogo from "./assets/tech_logo/icons8-express-js-50.png";
import mysqlLogo from "./assets/tech_logo/icons8-my-sql-48.png";
import mongodbLogo from "./assets/tech_logo/icons8-mongodb-24.png";

import cLogo from "./assets/tech_logo/icons8-c-48.png";
import cppLogo from "./assets/tech_logo/icons8-c++.png";
import javaLogo from "./assets/tech_logo/icons8-java-48.png";

import gitLogo from "./assets/tech_logo/icons8-git-48.png";
import githubLogo from "./assets/tech_logo/icons8-github-48.png";
import vscodeLogo from "./assets/tech_logo/icons8-visual-studio-48.png";
import postmanLogo from "./assets/tech_logo/icons8-postman-inc-24.png";

import netlifyLogo from "./assets/tech_logo/icons8-netlify-24.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/images.jpg";
import agcLogo from "./assets/company_logo/images.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.jpg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/logo-new2.png";
import bsaLogo from "./assets/education_logo/download.jpg";
import vicLogo from "./assets/education_logo/images.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import csprepLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import movierecLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import taskremLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import npmLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import webverLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import cmLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import imagesearchLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";
import removebgLogo from "./assets/work_logo/Screenshot 2025-07-10 114809.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "TDS Avenue CodeForge",
    date: "Aug 2024 - Oct 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Frontend Course",
    company: "Udemy",
    date: "July 2023 - Jan 2025",
    desc: "Udemy offers top frontend courses like Colt Steele's Web Developer Bootcamp, Brad Traversy's HTML/CSS, and Maximilian's JavaScript and React guides. These cover HTML, CSS, JavaScript, React, and Sass with real-world projects. They're beginner-friendly, highly rated, and ideal for building strong frontend development skills from scratch to advanced.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
      "Node js",
      "Express js",
      "MongoDB",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Course",
    company: "Newton School",
    date: "Feb 2025 - May 2025",
    desc: "Newton School’s 3‑month Frontend Deep Dive—part of their Full Stack track—focuses on HTML, CSS, JavaScript, React, hooks, UI frameworks, testing, live mentoring, coding practice, and mock interviews. It's intensive, mentor‑driven, and career‑oriented. Alumni praise real‑time support, but some users question its depth and compare it to traditional engineering.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: "NIT Arunachal Pradesh, Arunachal Pradesh",
    date: "Dec 2021 - May 2025",
    grade: "73.67%",
    desc: "I completed my Bachelor's degree in Computer Science B.Tech from NIT Arunachal Pradesh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: vicLogo,
    school: "Bishnugarh Inter college, Bishnugarh",
    date: "Apr 2019 - March 2020",
    grade: "73.6%",
    desc: "I completed my class 12 education from Bishnugarh Inter college, Bishnugarh Inter college, under the JAC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "JAC(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: glaLogo,
    school: "Vivekananda Central school, Hazaribagh",
    date: "Apr 2017 - March 2018",
    grade: "86.2%",
    desc: "I completed my class 10 education from Vivekananda Central school, Hazaribagh, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "ChatBot",
    description:
      "A React chatbot using Gemini AI API allows users to chat with an AI model. The React frontend captures user input and sends it to Gemini via API calls. Responses from Gemini are displayed in the chat UI. This setup uses React state hooks for message handling and Axios or Fetch for API communication, creating an interactive AI chatbot experience.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/kumarmanojgit/chatbaot-web/tree/main/cb",
    webapp: "https://lighthearted-donut-baf440.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];
