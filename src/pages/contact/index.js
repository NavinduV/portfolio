import Circles from '../../components/Image/Circles';
import {fadeIn} from '../../components/Variants/Variants';
import { motion } from 'framer-motion';

import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button className="flex items-center justify-center overflow-hidden hover:border-accent btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Connect
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Contact;
