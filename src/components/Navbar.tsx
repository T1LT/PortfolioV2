import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {

  return (
    <div className="w-full p-8 flex justify-between items-center sticky">
      <h1 className="text-neutral-800 dark:text-white font-bold">NR</h1>
      <ThemeToggleButton />
    </div>
  );
};

export default Navbar;
