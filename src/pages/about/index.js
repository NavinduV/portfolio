import Circles from '../../components/Image/Circles';
import { AvatarAboutBg } from '../../components/Avatar/Avatar';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInHalf, fadeIn } from '../../components/Variants/Variants';
import { useHeader } from '../../Context/HeaderContext'; 

import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          { name: 'HTML', src: '/icons/html.svg' },
          { name: 'CSS', src: '/icons/css.svg' },
          { name: 'JavaScript', src: '/icons/javascript.svg' },
          { name: 'TypeScript', src: '/icons/typescript.svg' },
          { name: 'React', src: '/icons/react.svg' },
          { name: 'Next.js', src: '/icons/nextjs.svg' },
        ],
      },
      {
        title: 'Backend',
        icons: [
          { name: 'Node.js', src: '/icons/node-js.svg' },
          { name: 'Express.js', src: '/icons/expressjs.svg' },
          { name: 'PHP', src: '/icons/php.svg' },
          { name: 'Laravel', src: '/icons/laravel.svg' },
          { name: 'Python', src: '/icons/python.svg' },
          { name: 'Django', src: '/icons/django.svg' },
        ],
      },
      {
        title: 'Databases & APIs',
        icons: [
          { name: 'MySQL', src: '/icons/mysql.svg' },
          { name: 'MongoDB', src: '/icons/mongodb.svg' },
          { name: 'PostgreSQL', src: '/icons/postgresql.svg' },
          { name: 'GraphQL', src: '/icons/graphql.svg' },
        ],
      },
      {
        title: 'DevOps & Cloud',
        icons: [
          { name: 'AWS', src: '/icons/aws.svg' },
          { name: 'GCP', src: '/icons/gcp.svg' },
          { name: 'Azure', src: '/icons/azure.svg' },
          { name: 'Git', src: '/icons/git.svg' },
          { name: 'Docker', src: '/icons/docker.svg' },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { name: 'Figma', src: '/icons/figma.svg' },
          { name: 'Photoshop', src: '/icons/photoshop.svg' },
          { name: 'Illustrator', src: '/icons/illustrator.svg' },
        ],
      },
      {
        title: 'Machine Learning',
        icons: [
          { name: 'YOLO', src: '/icons/yolo.svg' },
          { name: 'CNN', src: '/icons/maskrcnn.svg' },
        ],
      },
      {
        title: 'Blockchain',
        icons: [
          { name: 'Hyperledger', src: '/icons/hyperledger.svg' },
        ],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'BSc in ICT (Software Technology) - University of Sri Jayewardenepura',
        stage: '2021 - 2026',
      },
      {
        title: 'Google Digital Marketing Certification - Google Digital Garage',
        stage: '2021',
      },
      {
        title: 'Digital Journalism Certification - Facebook Reuters',
        stage: '2021',
      },
      // {
      //   title: 'GCE Advanced Level - Engineering Technology',
      //   stage: '2020',
      // },
      // {
      //   title: 'GCE Ordinary Level - English Medium (7A, 1B, 1C)',
      //   stage: '2017',
      // },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer Intern - Silverline IT',
        stage: '2025',
      },
      {
        title: 'Web Developer - New Pacific Systems',
        stage: '2024 - 2025',
      },
      {
        title: 'MERN Web Developer - Freelance (Fiverr & Upwork)',
        stage: '2021 - 2023',
      },
      {
        title: 'Associate Store Manager - Teejay Lanka PLC',
        stage: '2020 - 2021',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const { toggleHeader } = useHeader();
  const containerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollTop;
    setIsHeaderVisible(scrollPosition <= 15);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    toggleHeader(isHeaderVisible);
  }, [isHeaderVisible, toggleHeader]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen bg-primary/60 pt-40 md:pt-48 pb-40 md:pb-32 text-center xl:text-left overflow-y-scroll scrollbar-none relative"
    >
      <Circles />

      <motion.div
        variants={fadeInHalf('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[20px] -left-[400px] h-[680px] opacity-60 mix-blend-lighten"
      >
        <AvatarAboutBg />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-10 relative z-10 pb-20 xl:pb-0">
        {/* Left Text & Stats */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming <span className="text-accent">Visions</span> <br />
            into Stunning <span className="text-accent">Creations.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[480px] mx-auto xl:mx-0 mb-10 text-white/70 leading-relaxed text-sm"
          >
            Full-stack Software Engineering graduate with hands-on experience
            developing scalable web applications using JavaScript, Python, and
            Laravel. Experienced in building web systems with RESTful APIs,
            SQL/NoSQL databases, and cloud deployment. Strong foundation in
            OOP, Data Structures & Algorithms, and software engineering best
            practices within Agile development environments.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto xl:mx-0 mb-12 xl:mb-0"
          >
            {/* Stat 1 */}
            <div className="relative flex flex-col items-center xl:items-start justify-center">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-white/60 font-semibold text-center xl:text-left">
                Years Exp.
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-full bg-white/10"></div>
            </div>
            {/* Stat 2 */}
            <div className="relative flex flex-col items-center xl:items-start justify-center">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={12} duration={5} /> +
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-white/60 font-semibold text-center xl:text-left">
                Clients
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-full bg-white/10"></div>
            </div>
            {/* Stat 3 */}
            <div className="relative flex flex-col items-center xl:items-start justify-center">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-white/60 font-semibold text-center xl:text-left">
                Projects
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-full bg-white/10"></div>
            </div>
            {/* Stat 4 */}
            <div className="relative flex flex-col items-center xl:items-start justify-center">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-white/60 font-semibold text-center xl:text-left">
                Awards
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Tabs & Content */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[50%] z-10 xl:h-[60vh] justify-center"
        >
          {/* Modernized Floating Tabs */}
          <div className="flex gap-x-2 mx-auto xl:mx-0 mb-10 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm w-max shadow-lg">
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={`${
                    index === itemIndex
                      ? 'bg-accent/20 text-accent border-accent/30 shadow-[0_0_15px_rgba(229,57,53,0.15)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border-transparent'
                  } relative capitalize text-sm md:text-base font-medium transition-all duration-300 px-6 py-2.5 rounded-xl border`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Content Container */}
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start w-full h-[480px] xl:h-[58vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent scrollbar-hide-buttons pr-2 md:pr-4 pb-24">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Skills View */}
              {index === 0 && (
                <div className="flex flex-col gap-y-8 w-full">
                  {aboutData[index].info.map((category, catId) => (
                    <div key={catId} className="flex flex-col gap-y-4 w-full">
                      <h4 className="text-white/70 font-semibold text-sm uppercase tracking-[2px]">
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.icons.map((icon, iconId) => (
                          <div
                            key={iconId}
                            className="flex items-center gap-x-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/30 px-4 py-3 rounded-lg transition-all duration-300 group"
                          >
                            <div className="w-6 h-6 relative group-hover:scale-110 transition-transform duration-300">
                              <Image src={icon.src} fill alt={icon.name} className="object-contain" />
                            </div>
                            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                              {icon.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education & Experience View */}
              {(index === 1 || index === 2) && (
                <div className="flex flex-col gap-y-6 w-full">
                  {aboutData[index].info.map((item, itemId) => (
                    <div key={itemId} className="relative flex flex-col md:flex-row gap-x-6 group">
                      {/* Timeline Line & Dot */}
                      <div className="hidden md:flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 ${itemId === 0 ? 'border-accent bg-accent/20' : 'border-white/30 bg-transparent'} group-hover:border-accent transition-colors duration-300 z-10 relative`}>
                          {itemId === 0 && (
                            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-40"></div>
                          )}
                        </div>
                        {itemId !== aboutData[index].info.length - 1 && (
                          <div className="w-[2px] bg-white/10 absolute top-4 -bottom-6 group-hover:bg-accent/30 transition-colors duration-300"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/30 p-5 rounded-xl transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
                        <div>
                          <h4 className="text-lg font-bold text-white/90 group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h4>
                          <div className="text-sm text-white/60 mt-1">
                            {item.stage}
                          </div>
                        </div>
                        {itemId === 0 && (
                          <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20 whitespace-nowrap mt-2 md:mt-0">
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
