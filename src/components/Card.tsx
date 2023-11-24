"use client";

interface CardProps {
  title: string;
  description?: string;
  url: string;
  type: string;
  year?: number;
  disabled?: boolean;
}

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, description, url, type, year, disabled }: CardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`my-2 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <div
        className={`${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        } px-2 py-4 sm:px-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 group rounded-md hover:shadow-md hover:bg-neutral-100 hover:dark:bg-[rgb(45,45,45)] transition duration-300`}
        onClick={handleClick}
      >
        <Image
          src={`/images/${title.replace(" ", "")}.png`}
          width={125}
          height={125}
          alt={`${title} preview`}
          className="mb-4 sm:mb-0 rounded-md border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-neutral-300 group-hover:dark:border-neutral-500 transition duration-300"
        />
        <div className="flex flex-col">
          {type === "blog" && (
            <p className="font-semibold text-neutral-400 dark:text-neutral-500">
              {year}
            </p>
          )}
          <div className="flex items-center mb-2">
            <span className="font-semibold text-[#555] dark:text-neutral-300 group-hover:text-black group-hover:dark:text-white transition duration-300">
              {title}
            </span>
            <FaArrowRight className="text-sm ml-2 text-[#555] dark:text-neutral-300 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-black group-hover:dark:text-white" />
          </div>
          {type === "project" && (
            <p className="leading-relaxed text-sm text-[#555] dark:text-neutral-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;
