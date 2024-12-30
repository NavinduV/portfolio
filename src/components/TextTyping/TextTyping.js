import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export const CursorBlinker = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-[30px] xl:h-[45px] w-[4px] translate-y-1 bg-[#b61e13] ml-2"
    />
  );
}


export const TextTyping = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    'MERN Developer',
    "Full Stack Developer",
    
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      duration: 5,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, []);

  return (
    <span>
      <motion.span className='typingText'>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}
