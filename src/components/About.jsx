import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
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
       {/* Add LinkedIn and GitHub icons below the text with blue background */}
       <div className="flex gap-5 mt-5">
        <motion.a
          href='https://www.linkedin.com/in/mohammed-nihal-mm/'
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: 'pointer' }} // Ensure cursor pointer is applied
        >
          <FaLinkedin className='text-blue-600' size={30} style={{ cursor: 'pointer' }} />
        </motion.a>
        <motion.a
          href='https://github.com/nihalmmuneer'
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: 'pointer' }} // Ensure cursor pointer is applied
        >
          <FaGithub className='text-white' size={30} style={{ cursor: 'pointer' }} />
        </motion.a>
      </div>

     

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
