import { motion } from 'framer-motion';
import { Rotate } from '../Variants/Variants';
import Logo from "../../components/Logo/Logo";
import Socials from '../../components/SocialLinks/SocialLinks';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <motion.span
            variants={Rotate(0.2)}
            initial="hidden"
            animate="show"
            exit="exit"
            key={router.pathname}
          >
            <Logo />
          </motion.span>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
