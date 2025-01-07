// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
import Circles from '../../components/Circles';
import { AvatarAboutBg } from '../../components/Avatar/Avatar';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInHalf, fadeIn } from '../../components/Variants/Variants';

import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <Image src={'/icons/html.svg'} height={25} width={25} />,
          <Image src={'/icons/css.svg'} height={25} width={25} />,
          <Image src={'/icons/javascript.svg'} height={25} width={25} />,
          <Image src={'/icons/react.svg'} height={25} width={25} />,
          <Image src={'/icons/node-js.svg'} height={25} width={25} />,
          <Image src={'/icons/mongodb.svg'} height={25} width={25} />,
          <Image src={'/icons/framer.svg'} height={25} width={25} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <Image src={'/icons/figma.svg'} height={25} width={25} />,
          <Image src={'/icons/photoshop.svg'} height={25} width={25} />,
          <Image src={'/icons/illustrator.svg'} height={25} width={25} />,
        ],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'education',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-scroll scrollbar-none">
      <Circles />

      <motion.div
        variants={fadeInHalf('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[20px] -left-[400px] h-[680px]"
      >
        <AvatarAboutBg />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="pt-8 xl:pt-0 flex flex-1 flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming <span className="text-accent">Visions</span> <br />
            into Stunning Creations.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I have over 4 years of experience in web development, creating
            user-friendly and visually appealing websites and applications. I
            specialize in building responsive designs and efficient code to
            deliver reliable performance. My goal is to bring ideas to life with
            creativity, while leveraging strong communication and
            problem-solving skills to collaborate effectively.
          </motion.p>

          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 mb-4 mx-auto xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemId) => {
              return (
                <div
                  key={itemId}
                  className={`${
                    index === itemId &&
                    'text-accent after:bg-[#c90000] after:w-[99%] after:transition-all after:duration-500'
                  } cursor-pointer capitalize xl:text-lg relative after:w-[70%] after:h-[2px] after:hover:w-[99%] after:hover:transition-all after:hover:duration-500 after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemId)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          
            
              {/* <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden lg:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemId) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div> */}

              <div className="v-progress px-1 pt-5">
                <ul>
                  {aboutData[index].info.map((item, itemId) => {
                    return (
                      <li
                        key={itemId}
                        className={`${
                          index != 0 && 'xl:v-progress-item'
                        } ${itemId === aboutData[index].info.length - 1 ? 'inprogress' : "completed"}`}
                      >
                        <div className="py-2 xl:pt-[2px] flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                          <div className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70">
                            <div className='xl:flex xl:flex-col xl:gap-3'>
                              <div className="font-light mb-2 md:mb-0">
                                {item.title}
                              </div>
                              <div>{item.stage}</div>
                            </div>

                            <div className="flex gap-x-4">
                              {item.icons?.map((icon, itemId) => {
                                return (
                                  <div className="text-2xl text-white">
                                    {icon}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
