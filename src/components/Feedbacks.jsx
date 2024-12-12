import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../utils/motion"; // Adjust this import based on your project structure

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl w-full sm:w-[280px] md:w-[300px] lg:w-[320px] relative'
  >
    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <div
        onClick={() => window.open("https://www.linkedin.com/in/mohammed-nihal-mm/details/recommendations/", "_blank")}
        className='bg-blue-600 hover:bg-blue-500 transition-colors duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110'
      >
        <FaLinkedin size={20} className='text-white' />
      </div>
    </div>

    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[16px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
