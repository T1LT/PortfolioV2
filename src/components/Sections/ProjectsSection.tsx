"use client";

import Card from "../Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

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
      <div className="w-full flex justify-center">
        <Carousel className="w-[80%] sm:w-[85%]">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="DishCraft"
                description="One-stop store for all your recipes. Built for developers using Next.js, Drizzle, Neon (Serverless Postgres), Vercel KV and Blob Store, and TypeScript. Hosted on Vercel."
                url="https://dishcraft.vercel.app"
                type="project"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="Rizzume"
                description="A resume grading tool to help job seekers optimize their resumes to match job descriptions better, built using the OpenAI API, Next.js, TypeScript, and Tailwind CSS."
                url="https://rizzume.vercel.app"
                type="project"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="Resonance"
                description="A full-stack web application inspired by Discord, built using React, Redux, HTML5, CSS3, Ruby on Rails, PostgreSQL, and Action Cable."
                url="https://github.com/T1LT/Resonance"
                type="project"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="ViewFinder"
                description="A MERN stack app developed to help photographers find and share photo locations, built using Mongo, Express, React, Redux, Node, HTML5, and CSS3."
                url="https://github.com/T1LT/ViewFinder"
                type="project"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="NutriDiet"
                description="A nutritional companion crafted with Next.js, TypeScript, Prisma, and Tailwind CSS. Build to swiftly provide food details and help you discover nutrient-rich options effortlessly."
                url="https://nutridiet.vercel.app/"
                type="project"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-full 2xl:basis-1/2 min-[2500px]:basis-1/3">
              <Card
                title="Planetary Devastation"
                description="A JavaScript game based on the popular MMO Agar.io, built using JavaScript, Canvas, HTML5, and CSS3."
                url="https://t1lt.github.io/PlanetaryDevastation/"
                type="project"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <a
        href="https://github.com/T1LT?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="flex w-max items-center mt-4 xl:mt-8 mb-16 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
      >
        <span className="text-base sm:text-lg font-semibold">
          View All Project Repositories
        </span>
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 font-semibold ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </a>
    </section>
  );
};

export default ProjectsSection;
