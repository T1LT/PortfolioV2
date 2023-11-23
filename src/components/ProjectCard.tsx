interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  imgURL: string;
}

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ title, description, url, imgURL }: ProjectCardProps) => {
  return (
    <div className="cursor-pointer p-8 my-2 group dark:border dark:border-[#252525] rounded-md hover:shadow-md hover:bg-neutral-100 hover:dark:bg-[rgb(45,45,45)] transition duration-300">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col justify-center gap-4"
      >
        <Image
          src={`/images/${title.replace(" ", "")}.png`}
          width={300}
          height={200}
          alt={`${title} preview`}
          className="rounded-md border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-neutral-300 group-hover:dark:border-neutral-500 transition duration-300"
        />
        <div className="flex items-center mb-2">
          <span className="font-semibold text-[#555] dark:text-neutral-300 group-hover:text-black group-hover:dark:text-white transition duration-300">
            {title}
          </span>
          <FaArrowRight className="text-sm ml-2 text-[#555] dark:text-neutral-300 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-black group-hover:dark:text-white" />
        </div>
        <p className="leading-relaxed text-sm text-[#555] dark:text-neutral-300">
          {description}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
