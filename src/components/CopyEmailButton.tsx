"use client";

import { MdEmail } from "react-icons/md";
import { toast } from "react-hot-toast";

const CopyEmailButton = () => {
  const handleCopyEmail = async () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
    await navigator.clipboard.writeText("nishant.racherla@gmail.com");
    toast.success("Copied to Clipboard!");
  };

  return (
    <button
      onClick={handleCopyEmail}
      aria-label="Copy my email to your clipboard"
    >
      <MdEmail className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
    </button>
  );
};

export default CopyEmailButton;
