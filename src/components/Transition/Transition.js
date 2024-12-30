import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-50 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-40 bg-[#f13224a2]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#4b3792b0]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
