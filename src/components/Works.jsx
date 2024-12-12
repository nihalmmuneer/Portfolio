// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { projects } from "../constants"; // Assuming projects data
// import { fadeIn, textVariant } from "../utils/motion";
// import { github } from "../assets"; // Make sure this imports your GitHub icon
// import { styles } from "../styles";

// const ProjectCard = ({ index, name, description, tags, image, source_deployment_link }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <div className="bg-tertiary p-5 rounded-2xl w-full sm:w-[300px] md:w-[380px] lg:w-[360px] xl:w-[360px] ">
//         <div className="relative w-full h-[230px] sm:h-[250px] md:h-[270px] lg:h-[250px] xl:h-[250px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl"
//             onError={(e) => (e.target.src = "/path_to_placeholder_image.jpg")} // Fallback image
//           />
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_deployment_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github} // Use the imported github icon
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[24px]">
//             {name}
//           </h3>
//           <p className="mt-2 text-secondary text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px]">
//             {description}
//           </p>
//         </div>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[14px] md:text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Works = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Handling resizing of the window
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // Ensure proper layout after a page refresh
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Determine grid layout based on screen width
//   const getGridLayout = () => {
//     if (windowWidth <= 640) {
//       return "1fr"; // 1 card per row
//     } else if (windowWidth <= 1024) {
//       return "repeat(2, 1fr)"; // 2 cards per row
//     } else {
//       return "repeat(3, 1fr)"; // 3 cards per row
//     }
//   };

//   return (
//     <div className="px-4"> {/* Consistent padding for all screen sizes */}
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>My Work</p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
//       </motion.div>
//       <div className="w-full flex justify-center">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[22px] sm:leading-[30px] mx-auto text-wrap"
//         >
//           Following projects showcase my skills and experience through real-world examples of my work.
//         </motion.p>
//       </div>

//       {/* Project Grid with dynamic column count */}
//       <div
//         className="mt-10 grid gap-7 justify-center"
//         style={{
//           gridTemplateColumns: getGridLayout(),
//         }}
//       >
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Works;
import React from "react";
import Tilt from "react-parallax-tilt"; 
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_deployment_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_deployment_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Works, "");
