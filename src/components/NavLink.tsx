import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="w-max flex items-center text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
    >
      <span className="text-lg font-semibold">{title}</span>
      <FaArrowRight className="text-sm ml-2 group-hover:translate-x-2 transition-transform duration-300" />
    </Link>
  );
};

export default NavLink;
