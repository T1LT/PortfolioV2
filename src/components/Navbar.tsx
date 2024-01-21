import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full p-6 md:p-8 flex justify-between items-center bg-white dark:bg-[rgb(17,17,16)]">
      <Link href="/">
        <h1 className="text-neutral-800 dark:text-white font-bold">NR</h1>
      </Link>
      <ThemeToggleButton />
    </header>
  );
};

export default Navbar;
