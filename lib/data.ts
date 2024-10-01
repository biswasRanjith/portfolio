import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SMD from "@/public/beddingroyal.png";
import vankarFoundation from "@/public/vankarfoundation.png";
import overseas from "@/public/overseas_website.png";
import telegramBot from "@/public/telegram_bot.jpg";
import balKrishnaGarba from "@/public/balkrishnagarba.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Smart Controls India Pvt. Ltd. (A Member of Zeppelin Group)",
    description: "I contributed to the SmartMix Digital project by developing new features, resolving customer-reported bugs, and delivering effective solutions. I collaborated with clients for successful onsite commissioning and final product delivery. I optimized a critical external web app, reducing response time by 50%, and implemented Redis and MQTT for reliable middleware communication. By introducing PSA and PSS database architectures, I improved performance, achieving 25% faster read and write operations. Additionally, I maintained code consistency and quality through static code analysis.",
      // "I contributed to the SmartMix Digital project, developing and implementing new features while supporting ongoing projects by resolving customer-reported bugs and delivering effective solutions. I collaborated with multiple clients, ensuring successful onsite commissioning and final product delivery. I resolved technical issues in a critical external web app, optimizing system performance and reducing response time by 50%. Additionally, I implemented Redis and MQTT as messaging brokers, ensuring reliable communication between middleware services. By introducing PSA and PSS architectures in the database, I improved performance, leading to 25% faster read and write operations. I also maintained code consistency and quality through static code analysis.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - May 2024",
  },
  {
    title: "Software Engineer",
    location: "Avianco Technologies Pvt. Ltd.",
    description:
      "As a MEAN Stack Developer I contributed in building SkyNet application, I collaborated with NASA Federal Unmanned Aircraft Systems Traffic Management on building end-to-end workflows, integrating APIs, and optimizing MongoDB queries, resulting in a 2X increase in response time. I implemented JavaScript map libraries and IoT messaging protocols using MQTT, and developed secure gRPC APIs for telemetry data. Additionally, I contributed to government-related projects during COVID and built a job portal for drone pilots using Node.js, Angular, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 - May 2022",
  },
  {
    title: "Associate Software Engineer",
    location: "Torry Harris Integration Solutions",
    description:
      "I have contributed to various high-profile external projects for different clients, focusing on requirements gathering and validation to develop clear technical requirements and establish a consistent feedback loop. I collaborated in designing and building Proof of Concept systems, created secure backend APIs integrated with front-end functionality, and provided comprehensive documentation. Additionally, I designed and implemented databases for both SQL and NoSQL systems, ensuring robust and scalable data management solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2019 - October 2020",
  },
  {
    title: "Web Developer",
    location: "Backbench Internet Services Pvt. Ltd",
    description:
      "During my six-month internship as a Web Developer, I integrated third-party APIs using Node.js on the backbench platform and documented the process in GitBook. Additionally, I built a web application from scratch called “Share Socially” using Node.js, showcasing my ability to develop and deploy full-stack solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2018- December 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Smart Mix Digital",
    description: "SMD is a specialized IT Batch Management Software for the Mixing Room of Tire Industries. It enables the creation of recipes, production schedules, and set points, which are then used by SCADA software and PLCs for batch production. SMD also collects process data from SCADA, storing it in a database to generate reports on production, material consumption, inventory, traceability, batch mixing curves, and downtime analysis.",
      // "SMD is an IT level Batch Management Software specially designed for the Mixing Room of Tire Industries. SMD allows creation of Recipes, Production Schedules and Miscellaneous set points in the most flexible and open way. This data is then pulled by the SCADA software and downloaded to the PLC for carrying out the production of batches. SMD also pulls the process data from the SCADA and stores it in the database for giving all reports related to Production, Material Consumption, Inventory, Traceability, Batch Mixing curves, Downtime analysis etc",
    tags: ["Node.js", "Express.js", "React", "MongoDB", "aws"],
    icons: [
      "logos:nodejs-icon",
      "logos:javascript",
      "logos:react",
      "logos:NoSQL",
      "logos:aws"
    ],
    imageUrl: SMD,
    urlLink: "https://smartcontrols.in/our-products/smart-mix-digital/",
  },
  {
    title: "SkyNet",
    description:
      "SkyNet™ is the end to end drone hardware agnostic SaaS platform with integrated compliance, command and control (Web based GCS), live telemetry, video streaming, flight automation, flight log management, data capture, and analytics, fleet (drone, pilot and asset) management with role based access into a single platform.",
    tags: ["Node.js", "Express.js", "Angular", "MongoDB"],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:NoSQL",
      "vscode-icons:file-type-angular",
       "logos:aws"
    ],
    imageUrl: vankarFoundation,
    urlLink: "https://www.avianco.io/#/avianco-skynet",
  },
  {
    title: "AviancoUTM",
    description:
      "AviancoUTM™ is a SaaS platform designed for the next generation of UAV operations, traffic and airspace management needs. It is cloud based and takes centralized approach to connect various stakeholders to safely integrate drones into the low altitude airspace, enable use of fully automated drones.",
    tags: ["Node.js", "Express.js", "Angular", "MongoDB"],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:NoSQL",
      "vscode-icons:file-type-angular",
       "logos:aws"
    ],
    imageUrl: vankarFoundation,
    urlLink: "https://www.avianco.io/#/avianco-utm",
  },
  {
    title: "Share Socially",
    description:
      "Designed and developed a Garba pass and stall booking website to streamline the booking process for event attendees. Implemented features that allowed users to book passes and stalls online, along with creating an online photo gallery for users to view event photos. This made the overall event management more accessible and organized for participants.",
    tags: ["bootstrap", "Node.js", "javascript"],
    icons: [ "logos:nodejs-icon", "logos:bootstrap", "logos:javascript"],
    imageUrl: balKrishnaGarba,
    // urlLink: "https://balkrishnagarba.org.in/",
  },
  {
    title: "Book Bank Theory",
    description:
      "BOOK BANK an online marketing web application to connect people to people who wish to make business through the application to buy and resell books and make hustle free reselling of books. This application will be more concentrated towards user friendly experience and give user an experience of hustle free book reselling without getting in into any miss leads.",
    tags: ["Node.js", "Express.js", "React", "SQL"],
    icons: [ "logos:nodejs-icon", "logos:javascript", "logos:react", "cib:mysql"],
    imageUrl: telegramBot,
    githubLink: "https://github.com/biswasRanjith/Book-bank-theory",
  },
  // {
  //   title: "Oversea Courier Website",
  //   description:
  //     "Developed the Over Sears Courier website, a comprehensive platform offering IT consultancy and web solutions for businesses. The website provides a clear showcase of services such as web development, software consulting, and digital solutions to help clients enhance their online presence. Designed with a professional interface, it includes detailed service pages, an integrated contact system for consultations, and a secure client portal for managing ongoing projects. The platform was built to be responsive, SEO-optimized, and easily navigable, offering a streamlined experience for potential clients in need of web solutions and IT support.",
  //   tags: ["Wordpress", "Javascript", "MySQL"],
  //   icons: ["logos:javascript", "logos:wordpress", "cib:mysql"],
  //   imageUrl: overseas,
  //   githubLink: "https://himanshumore.great-site.net/",
  // },
  // {
  //   title: "Techprowl Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
  //   urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  // {
  //   name: "Wordpress",
  //   icon: "logos:wordpress",
  // },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Angular",
    icon: "vscode-icons:file-type-angular"
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "NoSQL",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Redis",
    icon: "logos:redis"
  },
  {
    name: "gRPC",
    icon: "logos:grpc"
  },
  {
    name: "Docker",
    icon: "logos:docker"
  }
] as const;

// https://icon-sets.iconify.design/?query=redis