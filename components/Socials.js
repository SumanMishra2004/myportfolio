import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[2rem]">
      <Link
        href={""}
        className="hover:text-accent transition-all duration-500 hover:text-[40px]"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-500 hover:text-[40px]"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-500 hover:text-[40px]"
      >
        <RiTwitterXLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-500 hover:text-[40px]"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
