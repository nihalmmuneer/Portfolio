import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import avodha from "../assets/company/avodha-icon.jpg";
import edstem from "../assets/company/edstem_logo.jpg";
import purestar from "../assets/company/purestar-web-logo.png";
import ecommerce from "../assets/tech/ecommerce_.png";
import doctorAppointment from "../assets/tech/doctor-appointment.png";
import blog from "../assets/tech/blog.png";
import realEstate from "../assets/tech/realEstate.png";
import colleagueOne from "../assets/peers/sangeeta-icon.jpg";
import colleagueTwo from "../assets/peers/sruthi-icon.jpg";
import colleagueThree from "../assets/peers/roshan-icon.jpg";
import colleagueFour from '../assets/peers/sisira-icon.jpg';
import colleagueFive from "../assets/peers/aswanth-icon.jpg";

export const navLinks = [
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
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

const experiences = [
  {
    title: "Python Django Intern",
    company_name: "Avodha",
    icon: avodha,
    iconBg: "#383E56",
    date: "Jan 2020 - May 2021",
    points: [
      "Assisted in developing web applications using Python Django framework under senior developers' guidance.",
      "Contributed to the creation and testing of RESTful APIs for integration with front-end applications.",
      "Participated in debugging and fixing minor issues in existing Django-based applications.",
      "Gained hands-on experience in working with relational databases and ORM queries.",
      "Collaborated with the team to ensure project deadlines and quality standards were met.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Edstem Technologies",
    icon: edstem,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2023",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality products.",
      "Implemented responsive design to ensure cross-browser compatibility and optimal user experience.",
      "Participated in code reviews and provided constructive feedback to enhance code quality and team performance.",
    ],
  },

  {
    title: "Nextjs/React Developer",
    company_name: "Pure Star Employment",
    icon: purestar,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and React.js for enhanced performance and scalability.",
      "Collaborating with cross-functional teams to create responsive, high-quality user interfaces and improve user experience.",
      "Implementing server-side rendering and static site generation to optimize page load times and SEO.",
      "Participating in code reviews and providing feedback to ensure adherence to best practices and coding standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nihal worked with me as a ReactJS developer for over a year. He quickly became a reliable team player, consistently delivering bug-free code and improving our projects with his proactive approach. I highly recommend him; he will be an asset to any team.",
    name: "Sangeeta Saha",
    designation: "Technical Project Manager",
    company: "Edstem Technologies",
    image: colleagueOne,
  },
  {
    testimonial:
      "I recommend Nihal for any software development role. His technical skills and ability to quickly grasp complex concepts greatly benefited our team at Edstem Technologies. Nihal's proactive approach and positive attitude make him a valuable asset in any organization.",
    name: "Sruthi Suresh. M ",
    designation: "Ex-Edstem, Student at WHZ University Of Applied Science",
    company: "Zwickau, Saxony, Germany",
    image: colleagueTwo,
  },
  {
    testimonial:
      "I had the privilege of working closely with Mohammad Nihal on several projects. His React expertise and proactive problem-solving consistently shine through. I highly recommend him as an invaluable asset to any software development team.",
    name: "Roshan Raju Daniel ",
    designation: "Software Engineer",
    company: "Amstor IT Services",
    image: colleagueThree,
  },
  {
    testimonial:
      "I highly recommend Mohammed Nihal for any opportunities. His exceptional skills and dedication in ReactJS development, along with his strong work ethic and teamwork, make him a valuable asset. I am confident he will excel in any front-end development role.",
    name: "Sisira J S ",
    designation: "Software Engineer",
    company: "Edstem Technologies",
    image: colleagueFour,
  },
  {
    testimonial:
      "I wholeheartedly endorse Mohammed Nihal as an exceptional React JS developer, recognized for his swift understanding of new concepts and outstanding problem-solving abilities. His technical expertise, attention to detail, and collaborative nature make him an invaluable team player.",
    name: "Aswanth Mohan",
    designation: "Software Engineer",
    company: "Edstem Technologies",
    image: colleagueFive,
  },
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "This eCommerce project, built with Next.js, Tailwind CSS, and Sanity, features a dynamic product catalog with fast loading times and improved SEO. The responsive UI includes product filtering, user authentication, and a secure checkout process powered by Stripe.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_deployment_link: "https://sanity-ecommerce-khaki.vercel.app/",
  },
  {
    name: "Doctor Appointment",
    description:
      "This Doctor Appointment web application, built with Next.js, Tailwind CSS, and Context API, enables patients to book appointments by doctor category and view their booking history, ensuring a seamless healthcare experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "contextapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: doctorAppointment,
    source_deployment_link: "https://hospital-management-bay.vercel.app/",
  },
  {
    name: "Blog",
    description:
      "A blog platform where users can post blogs, comment on posts, like, and edit their entries, built with React, Node.js, MongoDB, Tailwind CSS, and Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_deployment_link: "https://mern-blog-in2j.onrender.com/",
  },
  {
    name: "Real Estate",
    description:
      "A platform where users can find rental and sale properties, contact landlords, and view property details, built with React, Node.js, MongoDB, and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: realEstate,
    source_deployment_link: "https://real-estate-z0z4.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
