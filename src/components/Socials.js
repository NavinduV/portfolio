import Link from "next/link";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 z-10">
      <Link href={'/'} className="group">
        <Image
          src={'/icons/github.svg'}
          width={32}
          height={32}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/linkedin.svg'}
          width={32}
          height={32}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/medium.svg'}
          width={32}
          height={32}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <Link href={'/'} className="group">
        <Image
          src={'/icons/whatsapp.svg'}
          width={32}
          height={32}
          className="cursor-pointer group-hover:scale-110 transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default Socials;
