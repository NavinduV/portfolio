import { HiHome } from 'react-icons/hi2';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { MdViewCarousel } from 'react-icons/md';
import { AiFillProduct } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const navLinks = [
  {
    name: 'home',
    path: '/',
    icon: <HiHome className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'about',
    path: '/about',
    icon: <BiSolidUserRectangle className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'services',
    path: '/services',
    icon: <MdViewCarousel className="text-3xl xl:text-2xl" />,
  },
  {
    name: 'projects',
    path: '/projects',
    icon: <AiFillProduct className="text-3xl xl:text-2xl" />,
  },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <IoIosMail className="text-3xl xl:text-2xl" />,
  },
];

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: '#1E293B',
    color: '#F8FAFC',
    borderRadius: '0.5rem',
    border: '2px solid #f13024',
    padding: '0.3rem 0.7rem',
  },
  [`& .MuiTooltip-arrow`]: {
    color: '#f13024',
  },
}));

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='navbar'>
      <div className="links">
        {navLinks.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname
                  ? 'text-accent'
                  : 'text-white/80 hover:text-white'
              } relative flex items-center group  hover:scale-110 transition-all duration-300`}
              href={link.path}
              key={index}
            >
              <CustomTooltip
                title={link.name}
                placement="left"
                enterDelay={600}
                className="hidden xl:block capitalize"
                arrow
              >
                <div>{link.icon}</div>
              </CustomTooltip>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
