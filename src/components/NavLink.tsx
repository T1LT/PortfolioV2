import { FaArrowRight } from "react-icons/fa";

interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => {
  return (
    <a
      href="#about"
      className="flex items-center text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
    >
      <span className="text-lg font-semibold">{title}</span>
      <FaArrowRight className="text-sm ml-2 group-hover:translate-x-2 transition-transform duration-300" />
    </a>
  );
};

export default NavLink;