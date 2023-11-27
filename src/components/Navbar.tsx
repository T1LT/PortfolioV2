import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full p-6 md:p-8 flex justify-between items-center bg-white dark:bg-[rgb(30,30,30)]">
      <a href="/">
        <h1 className="text-neutral-800 dark:text-white font-bold">NR</h1>
      </a>
      <ThemeToggleButton />
    </div>
  );
};

export default Navbar;
