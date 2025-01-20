import Link from "next/link";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-x-5 z-10">
      <Link
        href={'https://github.com/NavinduV'}
        className="group"
        target="_blank"
      >
        <Image
          src={'/icons/github.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="github"
        />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/navindu-virajitha/'}
        className="group"
        target="_blank"
      >
        <Image
          src={'/icons/linkedin.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="linkedin"
        />
      </Link>
      <Link
        href={'https://medium.com/@navindu-virajitha'}
        className="group"
        target="_blank"
      >
        <Image
          src={'/icons/medium.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="medium"
        />
      </Link>
      <Link
        href={'https://wa.me/+94762987976'}
        className="group"
        target="_blank"
      >
        <Image
          src={'/icons/whatsapp.svg'}
          width={26}
          height={26}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="whatsapp"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
