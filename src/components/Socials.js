import Link from "next/link";
import Image from "next/image";
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaMedium } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 z-10">
      <Link href={'/'} className="group">
        <Image
          src={'/icons/github.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/linkedin.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/medium.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/whatsapp.svg'}
          width={26}
          height={26}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>

      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaGithub size={20}/>
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin size={20}/>
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaMedium size={20}/>
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaWhatsapp size={20}/>
      </Link> */}
    </div>
  );
};

export default Socials;
