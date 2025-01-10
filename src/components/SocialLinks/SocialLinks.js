import Link from "next/link";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-x-5 z-10">
      <Link href={'/'} className="group">
        <Image
          src={'/icons/github.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="github"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/linkedin.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="linkedin"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/medium.svg'}
          width={28}
          height={28}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
          alt="medium"
        />
      </Link>
      <Link href={'/'} className="group">
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
