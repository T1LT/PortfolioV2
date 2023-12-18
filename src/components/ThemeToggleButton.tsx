"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
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
    <button
      onClick={handleClick}
      className="text-xl text-yellow-400"
      aria-label="toggle dark mode/light mode"
    >
      {theme === "dark" ? (
        <IoMoonSharp className="text-2xl" />
      ) : (
        <IoMdSunny className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
