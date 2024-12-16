import HomeIcon from '@mui/icons-material/HomeRounded';
import UserIcon from '@mui/icons-material/AccountBoxRounded';
import WorksIcon from '@mui/icons-material/Ballot';
import ServicesIcon from '@mui/icons-material/ViewCarouselRounded';
import MailIcon from '@mui/icons-material/MailRounded';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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
    name: 'projects',
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
                enterDelay={800}
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
