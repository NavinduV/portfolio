import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesContainer from '../components/ParticlesContainer/ParticlesContainer';
import ProjectsBtn from "../components/Button/ProjectsBtn";
import {AvatarHome} from "../components/Avatar/Avatar";
import { fadeIn } from "../components/Variants/Variants";
import {TextTyping} from "../components/TextTyping/TextTyping";
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <ParticlesContainer />
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.div
            className="xl:flex items-center gap-4 z-10 hidden mb-3"
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <figure className="w-9 h-9 rounded-md overflow-hidden">
              <img
                className="object-cover h-10 w-10"
                src="profile/navindu-figure.jpg"
                alt="navindu"
              />
            </figure>
            <div className="flex items-center gap-2 text-gray-400 text-sm tracking-wide">
              <span className="relative w-2.5 h-2.5 rounded-full bg-green-400">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-10 name"
          >
            Navindu Gunawardhana <br />{' '}
            <span className="text-accent">
              <TextTyping />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8 z-10"
          >
            Specialized in designing and developing high-quality, scalable web
            applications that deliver exceptional user experiences. Explore my
            portfolio to learn more about my work and expertise.
          </motion.p>
          <div className="mb-12 flex justify-center items-center xl:justify-start z-10 gap-5">
            {/* <button className=" border border-accent py-2 px-8 rounded-lg bg-accent cursor-pointer"></button> */}
            <a
              href="/documents/MBDNV Gunawardhana CV.pdf"
              download="Navindu Gunawardhana CV.pdf"
              className="group flex gap-2 justify-center anim-btn anim-btn--changeGradient text-md uppercase tracking-[1px] leading-[1.4]"
            >
              My CV
              <HiOutlineDocumentDownload
                size={22}
                className="group-hover:translate-y-[2px] transition-all duration-300"
              />
            </a>
            <a
              href="/documents/MBDNV Gunawardhana CV.pdf"
              download="Navindu Gunawardhana CV.pdf"
              className="group flex gap-2 justify-center anim-btn anim-btn--neon  text-md uppercase tracking-[1px] leading-[1.4] bg-[#111]"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Github
              <FiGithub
                size={20}
                className="group-hover:scale-[110%] transition-all duration-300"
              />
            </a>
          </div>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="h-full w-[1200px] absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute w-full h-full mix-blend-color-dodge animate-pulse duration-300 translate-z-0 hidden xl:flex"
        >
          <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{
              backgroundImage: "url('/bg-explosion.png')",
              opacity: 0.6,
            }}
          ></div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute w-full h-full max-w-[727px] max-h-[688px] -bottom-32 lg:bottom-28 lg:right-[12%]"
        >
          <AvatarHome />
        </motion.div>
      </div>

      <motion.div
        className="z-0 absolute bottom-[-140px] text-[40vh] whitespace-nowrap text-[#ffffff07] w-1/2 font-bold cursor-default"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Navindu Gunawardhana
      </motion.div>
    </div>
  );
};

export default Home;
