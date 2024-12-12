import React from "react";
import Tilt from "react-parallax-tilt"; // Use react-parallax-tilt
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full"
    tiltMaxAngleX={35} // Reduced tilt for better usability on mobile
    tiltMaxAngleY={35}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[200px] xs:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 xs:w-16 xs:h-16 object-contain"
        />

        <h3 className="text-white text-[16px] xs:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px] text-center mx-auto"
      >
        I am a certified Full Stack Software Engineer with over 3 years of
        experience in delivering innovative web applications. I specialize in
        creating robust front-end interfaces using ReactJS, Next.js, and Redux,
        and building scalable back-end solutions with Node.js, Strapi, and
        MongoDB. I leverage Agile and Scrum methodologies to drive project
        success and foster team collaboration, ensuring high-quality,
        user-friendly solutions. Let’s work together to bring your ideas to
        life!
      </motion.p>

      {/* Social Links */}
      <div className="flex justify-center gap-5 mt-5">
        <motion.a
          href="https://www.linkedin.com/in/mohammed-nihal-mm/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <FaLinkedin className="text-blue-600" size={25} sm:size={30} />
        </motion.a>
        <motion.a
          href="https://github.com/nihalmmuneer"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <FaGithub className="text-white" size={25} sm:size={30} />
        </motion.a>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
