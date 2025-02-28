import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a passionate Full Stack Developer with two years of experience, I specialize in building dynamic and scalable web applications, leveraging front-end technologies like Vue.js, Nuxt.js, and React, alongside back-end technologies such as Node.js, PostgreSQL, MySQL, and MongoDB. My expertise extends to API integration, optimizing data storage, and deploying robust solutions using Docker, containerization, and CI/CD pipelines, ensuring seamless system functionality and delivering innovative solutions that drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for building efficient and user-friendly web applications. With two years of professional experience, I have worked with a range of technologies, including React, Next.js, Node.js, MySQL, and PostgreSQL. My journey in web development stems from my strong interest in logical thinking, which I greatly enjoy in programming, as it constantly challenges me to solve complex problems. I thrive in collaborative environments and continuously seek opportunities to learn and adapt to new challenges. Beyond coding, I enjoy tackling logical questions and problems, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Web Developer",
    company: "Centralized Cloud Computing International Inc.",
    description: `Contributed to feature development, bug fixes, and system enhancements using Vue.js, Nuxt.js, and Node.js, manage PostgreSQL and MySQL databases, configure CI/CD pipelines, oversee Docker deployments, monitor infrastructure for reliability, ensure security through SSL renewals, collaborate using Git, follow Agile methodologies, provide client support, and take on leadership responsibilities as needed.`,
    technologies: ["Javascript", "Vue.js", "Node.js", "postgreSQL", "Express.js", "CSS", "HTML"],
  },
  {
    year: "",
    role: "Business Analyst",
    company: "Centralized Cloud Computing International Inc.",
    description: `I conducted client training sessions, developed user manuals, managed issue documentation and tracking, categorized and analyzed bugs, ensured system quality as a QA for support applications, gained experience in automated testing with Katalon Studio, and delivered system demos both onsite and remotely.`,
    technologies: ["Presentations", "User Manual", "Client Trainings"],
  },
  {
    year: "",
    role: "Intern",
    company: "Centralized Cloud Computing International Inc.",
    description: `I developed an Asset Management System using Vue.js, Nuxt.js, and Node.js, designing the ERD, setting up the backend with an MRC structure, creating REST API endpoints, implementing a user-friendly frontend, and presenting the system to leads and supervisors for feedback and approval.`,
    technologies: ["Javascript", "Vue.js", "Node.js", "postgreSQL", "Express.js", "CSS", "HTML"],
  },
  {
    year: "2020",
    role: "Customer Care Representative",
    company: "Alorica Philippines",
    description: `Handled incoming calls and customer service inquiries for a U.S.-based pharmacy, providing support for healthcare account management.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
