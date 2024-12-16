import HomeIcon from '@mui/icons-material/HomeRounded';
import UserIcon from '@mui/icons-material/AccountBoxRounded';
import WorksIcon from '@mui/icons-material/Ballot';
import ServicesIcon from '@mui/icons-material/ViewCarouselRounded';
import MailIcon from '@mui/icons-material/MailRounded';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';

export const navLinks = [
  {
    name: 'home',
    path: '/',
    icon: <HomeIcon className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'about',
    path: '/about',
    icon: <UserIcon className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'services',
    path: '/services',
    icon: <ServicesIcon className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'work',
    path: '/work',
    icon: <WorksIcon className="text-3xl xl:text-2xl" />,
  },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <MailIcon className="text-3xl xl:text-2xl" />,
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='navbar'>
      <div className="flex items-center justify-between gap-y-10 w-full xl:flex-col xl:justify-center px-4 md:px-40 xl:px-0 h-80 xl:h-max py-8 bg-white/10 backdrop-blur-md xl:rounded-full">
        {navLinks.map((link, index) => {
          return <Link href={link.path}>{link.icon}</Link>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
