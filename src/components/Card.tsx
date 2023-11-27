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

import Image from "next/image";
import { FaArrowRight, FaLinkedin, FaBookReader } from "react-icons/fa";
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
    <a href={url} target="_blank" rel="noreferrer">
      <div className="w-full px-4 py-4 sm:px-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 group rounded-md hover:shadow-md hover:bg-neutral-100 hover:dark:bg-[rgb(45,45,45)] transition duration-300">
        {type === "project" && (
          <Image
            src={`/images/${title.replace(" ", "")}.png`}
            width={125}
            height={125}
            alt={`${title} preview`}
            className="mb-4 sm:mb-0 rounded-md border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-neutral-300 group-hover:dark:border-neutral-500 transition duration-300"
          />
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
          <div className="w-full flex items-center justify-between sm:justify-start">
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
