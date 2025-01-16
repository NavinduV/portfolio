import ProjectSlider from '../../components/Slider/ProjectSlider';
import Bulb from '../../components/Image/Bulb';
import Circles from '../../components/Image/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/Variants/Variants';

const Projects = () => {
  return (
    <>
      <div className="h-full bg-primary/60 py-36 flex items-center projects">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                My Projects<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                A showcase of the web development projects I’ve worked on, highlighting my expertise in crafting innovative solutions. Each project reflects my ability to design, develop, and deploy full-stack applications tailored to user needs, with a strong focus on functionality, performance, and user experience.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <ProjectSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Projects;
