import attentive from "/skills/attentive.png";
import analytical from "/skills/analytical.png";
import comm from "/skills/comm.png";
import process from "/skills/process.png";
import curious from "/skills/curious.png";
import time from "/skills/time.png";
import patience from "/skills/patience.png";
import centric from "/skills/centric.png";

import enfinity from '/company/enfinity.svg';
import webrelier from "/company/webrelier.png";
import yesbank from "/company/yesbank.png";
import hdfcbank from "/company/hdfcbank.png";

import css from "/tech/css.png";
import docker from "/tech/docker.png";
import figma from "/tech/figma.png";
import git from "/tech/git.png";
import html from "/tech/html.png";
import javascript from "/tech/javascript.png";
import mongodb from "/tech/mongodb.png";
import nodejs from "/tech/nodejs.png";
import reactjs from "/tech/reactjs.png";
import redux from "/tech/redux.png";
import tailwind from "/tech/tailwind.png";
import typescript from "/tech/typescript.png";
import threejs from "/tech/threejs.svg";

import hrms from "/projects/hrms.svg";
import erp from "/projects/erp.svg";
import crm from "/projects/crm.webp";
import retail from "/projects/retail.svg";
import restaurant from "/projects/restaurant.webp";
import subscription from "/projects/subscription.svg";
import realestate from "/projects/realestate.webp";
import loan from "/projects/loan.svg";
import link from '/projects/link.png'

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    index: 1,
    title: "Attentive",
    icon: attentive,
  },
  {
    index: 2,
    title: "Strong Analytical Skill",
    icon: analytical,
  },
  {
    index: 3,
    title: "Excellent Communication & Collaboration",
    icon: comm,
  },
  {
    index: 4,
    title: "Process Oriented",
    icon: process,
  },
  {
    index: 5,
    title: "Curious and Proactive",
    icon: curious,
  },
  {
    index: 6,
    title: "Time Management",
    icon: time,
  },
  {
    index: 7,
    title: "Patience and Perseverance",
    icon: patience,
  },
  {
    index: 8,
    title: "User-Centric Mindset",
    icon: centric,
  },
];

const experiences = [
  {
    title: "QA Engineer",
    company_name: "Expert Business Solutions",
    icon: enfinity,
    iconBg: "#fff",
    date: "March 2023 - Present",
    points: [
      "Designing, developing, and executing test cases to ensure software quality and compliance with business requirements.",
      "Collaborating with cross-functional teams including developers, and product managers to understand requirements and plan testing activities.",
      "Performing manual and automated testing.",
      "Identifying, logging, and tracking defects in issue management tool - Visual Studio Team Services.",
    ],
  },
  {
    title: "Software Test Engineer",
    company_name: "WebRelier Software Solutions Pvt. Ltd.",
    icon: webrelier,
    iconBg: "#eee",
    date: "Aug 2020 - Feb 2023",
    points: [
      "Analyze Requirements/Stories.",
      "Identify test scenarios and create/update test cases.",
      "Environment Setup - test data and tools.",
      "Defect Reporting & Tracking.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "YES Bank Ltd.",
    icon: yesbank,
    iconBg: "#fff",
    date: "Mar 2017 - Jul 2020",
    points: [
      "Handle core banking operations.",
      "Processing the customer request.",
      "Processing the forex transactions like inward and outward remittances.",
      "Handling the gold loan sales and process.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "HDFC Bank Ltd.",
    icon: hdfcbank,
    iconBg: "#fff",
    date: "Mar 2015 - Mar 2017",
    points: [
      "Handle the teller counter.",
      "Check and process the account opening form.",
      "Handle the branch audit.",
      "processing the NEFT/RTGS/Fund Transfer requests.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "HRMS",
    description:
      "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
    tags: [
      {
        name: "hr core",
        color: "blue-text-gradient",
      },
      {
        name: "payroll",
        color: "green-text-gradient",
      },
      {
        name: "self service",
        color: "pink-text-gradient",
      },
      {
        name: "attendance",
        color: "blue-text-gradient",
      },
      {
        name: "performance",
        color: "green-text-gradient",
      },
      {
        name: "learning",
        color: "pink-text-gradient",
      },
    ],
    image: hrms,
    link: link,
    hyperlink: "https://www.onenfinity.com/hrms",
  },
  {
    name: "ERP",
    description:
      "Enfinity ERP lies a comprehensive suite of applications, seamlessly integrating accounting, sales, purchase, inventory, fixed assets and service.",
    tags: [
      {
        name: "accounting",
        color: "blue-text-gradient",
      },
      {
        name: "sales",
        color: "green-text-gradient",
      },
      {
        name: "purchase",
        color: "pink-text-gradient",
      },
      {
        name: "inventory",
        color: "blue-text-gradient",
      },
      {
        name: "fixed assets",
        color: "green-text-gradient",
      },
      {
        name: "service",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    link: link,
    hyperlink: "https://www.onenfinity.com/erp",
  },
  {
    name: "CRM",
    description:
      "Enfinity CRM is a cutting-edge customer relationship management solution. Enfinity CRM simplifies it, focusing on efficient customer engagement, streamlining business processes, and enhancing productivity.",
    tags: [
      {
        name: "lead",
        color: "blue-text-gradient",
      },
      {
        name: "opportunity",
        color: "green-text-gradient",
      },
      {
        name: "salesman",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    link: link,
    hyperlink: "https://www.onenfinity.com/crm",
  },
  {
    name: "RETAIL",
    description:
      "Enfinity Retail is a cutting-edge cloud-based retail Point of Sale (POS) system, meticulously crafted to simplify and enhance the operational efficiency of retailers.",
    tags: [
      {
        name: "pos",
        color: "blue-text-gradient",
      },
      {
        name: "payment methods",
        color: "green-text-gradient",
      },
      {
        name: "salesman",
        color: "pink-text-gradient",
      },
    ],
    image: retail,
    link: link,
    hyperlink: "https://www.onenfinity.com/retail",
  },
  {
    name: "RESTAURANT",
    description:
      "Enfinity Restaurant is a comprehensive Point-of-Sale (POS) and restaurant management system crafted to meet the diverse needs of modern restaurants.",
    tags: [
      {
        name: "pos",
        color: "blue-text-gradient",
      },
      {
        name: "payment methods",
        color: "green-text-gradient",
      },
      {
        name: "salesman",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    link: link,
    hyperlink: "https://www.onenfinity.com/restaurant",
  },
  {
    name: "SUBSCRIPTION",
    description:
      "Enfinity Subscription is a cloud-based software designed for businesses aiming to optimize their subscription billing processes.",
    tags: [
      {
        name: "product",
        color: "blue-text-gradient",
      },
      {
        name: "plan",
        color: "green-text-gradient",
      },
      {
        name: "coupon",
        color: "pink-text-gradient",
      },
    ],
    image: subscription,
    link: link,
    hyperlink: "https://www.onenfinity.com/subscription",
  },
  {
    name: "REAL ESTATE",
    description:
      "Enfinity Real-Estate is a cutting-edge cloud-based solution tailored for property rental management. From seamless rent collection to intuitive analytics, we offer comprehensive tools that make managing real estate assets a breeze.",
    tags: [
      {
        name: "property",
        color: "blue-text-gradient",
      },
      {
        name: "rent collection",
        color: "green-text-gradient",
      },
      {
        name: "security deposit",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    link: link,
    hyperlink: "https://www.onenfinity.com/real-estate",
  },
  {
    name: "LOAN ORIGINATION SYSTEM",
    description:
      " Loan Origination System streamlines the end-to-end loan process with a task-based workflow and real-time alerts. It ensures faster and more efficient loan approvals.",
    tags: [
      {
        name: "customer",
        color: "blue-text-gradient",
      },
      {
        name: "loan application",
        color: "green-text-gradient",
      },
      {
        name: "repayment",
        color: "pink-text-gradient",
      },
    ],
    image: loan,
    link: link,
    hyperlink: "https://www.ltfinance.com/personal-loan",
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Baburao has been an absolute pleasure. His attention to detail in QA processes has helped us catch critical issues early and deliver stable releases every time.",
    name: "Rozer Lee",
    designation: "Senior Software Developer",
    company: "Expert Business Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Baburao’s proactive testing approach and clear communication have made cross-functional collaboration seamless. He always thinks from a user’s perspective, which adds immense value to our product quality.",
    name: "Chris Brown",
    designation: "Product Manager",
    company: "Expert Business Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've seen Baburao consistently suggest smart improvements to our test frameworks and processes. His curiosity and passion for clean, efficient QA practices stand out in every project.",
    name: "Lisa Wang",
    designation: "QA Engineer",
    company: "Expert Business Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const socialLinks = [
  {
    id: 1,
    Icon: "Phone",
    text: '9673929867',
    link: "tel:+919673929867",
    gradient: ["#0077b5", "#00a0dc"],
  },
  {
    id: 2,
    Icon: "Mail",
    text: 'bgadkane@gmail.com',
    link: "mailto:bgadkane@gmail.com",
    gradient: ["#0077b5", "#00a0dc"],
  },
  {
    id: 5,
    Icon: "Linkedin",
    text: 'bgadkane',
    link: "https://www.linkedin.com/in/baburao-adkane-443476250/",
    gradient: ["#0077b5", "#00a0dc"],
  },
  {
    id: 3,
    Icon: "Github",
    text: 'bgadkane27',
    link: "https://github.com/bgadkane27",
    gradient: ["#0077b5", "#00a0dc"],
  },
];


export { navLinks, services, technologies, experiences, testimonials, projects, socialLinks };
