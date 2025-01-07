import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <MotionLink
      href="/"
      className="flex items-center justify-center w-14 h-14 bg-[#0c0c1d00] text-white font-bold rounded-full no-underline"
      initial={{ backgroundColor: '#0c0c1d00' }}
      animate={{ backgroundColor: '#0c0c1d00' }}
      whileHover={{
        backgroundColor: [
          '#0c0c1d00',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(131,58,180,1)',
          '#0c0c1d00',
        ],
        rotate: 360,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <motion.img
        src="/logo/logo.svg"
        alt="NV Logo"
        className="w-11 h-11"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 8,
        }}
      />
    </MotionLink>
  );
};

export default Logo;
