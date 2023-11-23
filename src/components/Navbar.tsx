"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full p-8 flex justify-between items-center sticky">
      <h1 className="text-neutral-800 dark:text-white font-bold">NR</h1>
      <button onClick={handleClick} className="text-xl text-yellow-400">
        {theme === "dark" ? <IoMoonSharp className="text-2xl"/> : <IoMdSunny className="text-2xl"/>}
      </button>
    </div>
  );
};

export default Navbar;
