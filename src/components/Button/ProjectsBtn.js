import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const ProjectsBtn = () => {
  const [showHiArrowRight, setShowHiArrowRight] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHiArrowRight((prev) => !prev);
      setShowLogo((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto xl:mx-0 cursor-pointer z-10">
      <Link
        href={'/projects'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={'/rounded-text.png'}
          width={145}
          height={145}
          className="animate-spin-slow w-full h-full max-w-[145px] max-h-[145px]"
        />
        <HiArrowRight
          className={`group-hover:translate-x-2 absolute text-4xl transition-all duration-300 ${
            showHiArrowRight ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <motion.img
          src="/logo/logo.svg"
          alt="NV Logo"
          className={`absolute animate-spin-slow group-hover:opacity-0 w-full h-full max-w-[72px] max-h-[72px] ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
          width={72}
          height={72}
        />
        {showLogo && (
          <HiArrowRight
            className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-2 absolute text-4xl transition-all duration-300`}
          />
        )}
      </Link>
    </div>
  );
};

export default ProjectsBtn;
