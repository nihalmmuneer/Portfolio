import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { styles } from "../styles"; // Adjust the import based on your project structure
import { SectionWrapper } from "../hoc"; // Adjust the import based on your project structure
import { fadeIn, textVariant } from "../utils/motion"; // Adjust the import based on your project structure
import { testimonials } from "../constants"; // Adjust the import based on your project structure

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  isSingle,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`bg-black-200 p-6 rounded-3xl ${isSingle ? "w-full" : "xs:w-[320px] w-full"} relative shadow-md hover:shadow-lg transition-shadow duration-300`}
  >
    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/mohammed-nihal-mm/details/recommendations/",
            "_blank"
          )
        }
        className="bg-blue-600 hover:bg-blue-500 transition-colors duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110"
      >
        <FaLinkedin size={20} className="text-white" />
      </div>
    </div>

    <p className="text-white font-black text-[36px] xs:text-[48px]">"</p>

    <div className="mt-2">
      <p className="text-white tracking-wider text-[14px] xs:text-[16px]">
        {testimonial}
      </p>

      <div className="mt-4 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[14px] xs:text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[10px] xs:text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handling resizing of the window
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine grid layout based on screen width and number of testimonials
  const getGridLayout = () => {
    if (windowWidth <= 640) {
      return "2fr"; // 1 card per row for small screens
    } else if (windowWidth <= 768) {
      return "1fr"; // 1 card per row for medium screens
    } else if (windowWidth <= 1024) {
      return "repeat(2, 1fr)"; // 2 cards per row for larger screens
    } else {
      return "repeat(3, 1fr)"; // 3 cards per row for extra-large screens
    }
  };

  const gridLayout = getGridLayout(); // Determine the grid layout based on window size
  const isSingle = testimonials.length === 1; // Check if there's only one testimonial

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] overflow-hidden`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Ensure Feedbacks are centered and prevent overlap */}
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-5`}
        style={{
          display: "grid", // Use grid layout to ensure proper wrapping
          gridTemplateColumns: gridLayout, // Set grid layout
          justifyItems: "center", // Center the content within each column
          gap: "20px", // Maintain a gap between the items
          overflow: "hidden", // Prevent overflow
        }}
      >
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
              isSingle={isSingle} // Pass the isSingle flag to the FeedbackCard
            />
          ))
        ) : (
          <p className="text-center text-white">No testimonials to display</p>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
