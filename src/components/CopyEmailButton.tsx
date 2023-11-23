"use client";

import { MdEmail } from "react-icons/md";
import { toast } from "react-hot-toast";

const CopyEmailButton = () => {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("nishant.racherla@gmail.com");
    toast.success("Copied to Clipboard!");
  };

  return (
    <button onClick={handleCopyEmail}>
      <MdEmail className="text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
    </button>
  );
};

export default CopyEmailButton;
