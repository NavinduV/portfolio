import Image from 'next/image';
import { motion } from 'framer-motion';

export const AvatarHome = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/profile/navindu.png'}
        width={737}
        height={678}
        alt="navindu-profile-pic"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export const AvatarAboutBg = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/profile/avataraboutbg.png'}
        width={737}
        height={678}
        alt="navindu-profile-pic"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export const AvatarAbout = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
          }}
          className="w-[298px] h-[298px] mix-blend-normal absolute"
        >
          <Image
            src={'/profile/navindu-full.jpg'}
            width={298}
            height={298}
            alt="navindu-profile-pic"
            className="object-contain rounded-full w-[298px] h-[298px]"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] h-[300px] absolute"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="253"
            stroke="#b61e13"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '32 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
  );
};
