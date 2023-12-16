import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full p-6 md:p-8 flex justify-between items-center bg-white dark:bg-neutral-900">
      <Link href="/">
        <h1 className="text-neutral-800 dark:text-white font-bold">NR</h1>
      </Link>
      <ThemeToggleButton />
    </div>
  );
};

export default Navbar;
