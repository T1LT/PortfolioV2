import { FaArrowRight } from "react-icons/fa";
import Card from "../Card";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-[calc(88px+0.5rem)] xl:scroll-mt-[calc(88px+2rem)]"
    >
      <h1 className="font-bold text-xl mb-4 group">
        <span className="float-left opacity-0 group-hover:opacity-100 -ml-4 lg:-ml-8 mr-0 lg:mr-2 text-neutral-400 dark:text-neutral-500 transition duration-300">
          #
        </span>
        <a href="#projects">PROJECTS</a>
      </h1>
      <div className="flex flex-col gap-2">
        <Card
          title="Rizzume"
          description="A resume grading tool to help job seekers optimize their resumes to match job descriptions better, built using the OpenAI API, Next.js, TypeScript, and Tailwind CSS."
          url="https://rizzume.vercel.app"
          type="project"
        />
        <Card
          title="Resonance"
          description="A full-stack web application inspired by Discord, built using React, Redux, HTML5, CSS3, Ruby on Rails, PostgreSQL, and Action Cable."
          url="https://resonance-jzh3.onrender.com/"
          type="project"
        />
        <Card
          title="ViewFinder"
          description="A MERN stack app developed to help photographers find and share photo locations, built using Mongo, Express, React, Redux, Node, HTML5, and CSS3."
          url="https://viewfinder.onrender.com/"
          type="project"
        />
        <Card
          title="NutriDiet"
          description="A nutritional companion crafted with Next.js, TypeScript, Prisma, and Tailwind CSS. Build to swiftly provide food details and help you discover nutrient-rich options effortlessly."
          url="https://nutridiet.vercel.app/"
          type="project"
        />
        <Card
          title="Planetary Devastation"
          description="A JavaScript game based on the popular MMO Agar.io, built using JavaScript, Canvas, HTML5, and CSS3."
          url="https://t1lt.github.io/PlanetaryDevastation/"
          type="project"
        />
      </div>
      <a
        href="https://github.com/T1LT?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="flex items-center mt-4 mb-16 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
      >
        <span className="text-base sm:text-lg font-semibold">
          View All Project Repositories
        </span>
        <FaArrowRight className="text-sm ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </a>
    </section>
  );
};

export default ProjectsSection;
