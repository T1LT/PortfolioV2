"use client";

interface CardProps {
  title: string;
  description?: string;
  url: string;
  type: string;
  date?: string;
  src?: string;
  readTime?: string;
}

import clsx from "clsx";
import Image from "next/image";
import { FaLinkedin, FaBookReader } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaMedium } from "react-icons/fa6";

const Card = ({
  title,
  description,
  url,
  type,
  date,
  src,
  readTime,
}: CardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={clsx(type === "project" && "flex flex-col items-center")}
    >
      <div
        className={clsx(
          "px-4 py-4 sm:px-6 sm:py-8 flex flex-col items-start gap-6 group rounded-md hover:shadow-md hover:bg-neutral-100 hover:dark:bg-neutral-800 transition duration-300",
          type === "project"
            ? "w-[250px] sm:w-[300px] h-[300px]"
            : "w-full sm:flex-row"
        )}
      >
        {type === "project" && (
          <div className="w-36 h-16 relative">
            <Image
              src={`/images/${title.replace(" ", "")}.png`}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              className="animate-reveal mb-4 sm:mb-0 rounded-md border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-neutral-300 group-hover:dark:border-neutral-500 transition duration-300"
            />
          </div>
        )}
        <div className="w-full flex flex-col">
          {type === "blog" && (
            <p className="flex items-center font-semibold text-neutral-400 dark:text-neutral-500 mb-2">
              {date}
              <span className="mx-2">&bull;</span>
              {src === "LinkedIn" && <FaLinkedin className="text-lg" />}
              {src === "Medium" && <FaMedium className="text-lg" />}
              <span className="mx-2">&bull;</span>
              <span className="flex items-center gap-2">
                <FaBookReader className="text-lg" />
                {readTime}
              </span>
            </p>
          )}
          <div
            className={clsx(
              "w-full flex items-center",
              type === "project"
                ? "justify-start"
                : "sm:justify-start justify-between"
            )}
          >
            <span className="font-semibold text-[#555] dark:text-neutral-300 group-hover:text-black group-hover:dark:text-white transition duration-300">
              {title}
            </span>
            <FiArrowUpRight className="ml-2 text-[#555] dark:text-neutral-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 group-hover:text-black group-hover:dark:text-white" />
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
