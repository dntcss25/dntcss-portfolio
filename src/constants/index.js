import hris1 from "../assets/projects/hris/project-1.jpg";
import hris2 from "../assets/projects/hris/project-1.2.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

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
    title: "Human Resource Information System",
    image: hris1,
    image1: hris2,
    description:
      "A software solution that helps organizations manage and automate various HR processes, improving efficiency, accuracy, and compliance.",
    description1:
      "",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Express.js"],
    source: `https://hris.marsu.edu.ph/`
  },
  {
    title: "Bookkeeping Website",
    image: project2,
    description:
      "An online platform designed to help businesses and individuals manage their financial records, track income and expenses, and generate financial reports.",
    technologies: ["Wix"],
  },
  {
    title: "Computer Laboratory Management System",
    image: project3,
    description:
      "A software solution designed to enhance the efficiency of computer lab operations, ensuring smooth coordination between students, instructors, and administrators. The system aims to create a structured environment that supports effective teaching and learning during laboratory sessions.",
    technologies: ["C#", "MS SQL Server"],
  },
  {
    title: "Inventory Management System",
    image: project4,
    description:
      "A software solution designed to track, manage, and optimize the storage, movement, and usage of goods within a business.",
    technologies: ["HTML", "CSS", "PHP", "mySQL"],
  },
  {
    title: "Asset Management System",
    image: project5,
    description:
      "A software solution designed to track, manage, and optimize the lifecycle of physical and digital assets within an organization. It ensures efficient asset utilization, minimizes losses, and improves maintenance planning.",
    technologies: ["Node.js", "Vue.js", "Express.js", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Avida Residences, Dasmariñas City Cavite",
  phoneNo: "+639 161994188",
  email: "donalenetocmo@gmail.com",
};
