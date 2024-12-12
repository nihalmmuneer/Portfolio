import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles"; // Adjust this import based on your styles
import { ComputersCanvas } from "./canvas"; // Your existing canvas component

const CircleDownArrowIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-secondary cursor-pointer no-outline"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v8" />
      <path d="M8 12l4 4 4-4" />
    </motion.svg>
  );
};

const Hero = () => {
  const [showSwipeButton, setShowSwipeButton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeButton(true), 500); // Show button after 500ms
    return () => clearTimeout(timer);
  }, []);

  // Scroll to the About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle icon click
  const handleClick = () => {
    handleScrollToAbout(); // Trigger scroll on icon click
  };

  // Handle touch event
  const handleTouch = (event) => {
    // Prevent default scrolling behavior when touching the screen
    event.preventDefault();
    handleScrollToAbout(); // Scroll to the About section on touch
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nihal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Canvas Background */}
      <ComputersCanvas className="w-full h-full pointer-events-none" />

      {/* Circle Down Arrow Icon */}
      {showSwipeButton && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        >
          <motion.div
            onClick={handleClick} // Handle click to scroll
            onTouchStart={handleTouch} // Handle touch to scroll
            whileHover={{ y: -5 }} // Bouncing effect on hover
            whileTap={{ y: -10 }} // More pronounced bounce on click
            animate={{
              y: [0, -10, 0], // Continuous bouncing effect
              transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <CircleDownArrowIcon />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
