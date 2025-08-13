import Navbar from "@/components/Navbar";
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import BlogPostsSection from "@/components/Sections/BlogPostsSection";
import CopyEmailButton from "@/components/CopyEmailButton";
import NavLink from "@/components/NavLink";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between px-6 lg:px-8 xl:px-24">
        <div className="flex flex-col xl:flex-row justify-evenly w-full min-h-screen">
          {/* LEFT SECTION */}
          <div className="w-full xl:w-[45%] mt-4 md:mt-0 xl:sticky xl:top-[88px] xl:h-[calc(100vh-88px)] p-2 xl:p-8 flex flex-col justify-between gap-8">
            {/* LEFT TOP - HEADER*/}
            <div>
              <a href="#">
                <h1 className="font-semibold sm:font-bold text-3xl sm:text-4xl md:text-5xl mb-2">
                  Nishant Racherla
                </h1>
              </a>
              <h2 className="font-medium sm:font-semibold text-lg sm:text-xl mt-2">
                Full-Stack Software Engineer
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#555] dark:text-neutral-300">
                Passionate to learn and ready to elevate your web experience.
              </p>
            </div>
            {/* LEFT MIDDLE - NAV LINKS */}
            <div className="hidden xl:flex flex-col gap-4">
              <NavLink title="About Me" href="#about" />
              <NavLink title="Projects" href="#projects" />
              <NavLink title="Skills" href="#skills" />
              <NavLink title="Blog Posts" href="#blog" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-10 w-max flex items-center text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
              >
                <span className="text-lg font-semibold">View Resume</span>
                <ArrowUpRight className="h-5 w-5 font-semibold ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
            {/* LEFT BOTTOM - CONTACT INFO */}
            <div className="flex gap-8 mb-16 xl:mb-4">
              <a
                href="https://github.com/T1LT"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my GitHub"
              >
                <FaGithub className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/nishantracherla"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my LinkedIn"
              >
                <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://instagram.com/nishantracherla"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my Instagram"
              >
                <FaInstagram className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://x.com/T1LTdev"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my X/Twitter"
              >
                <BsTwitterX className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <CopyEmailButton />
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="top-[88px] flex-grow w-full xl:w-[45%] p-2 xl:p-8">
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <BlogPostsSection />
          </div>
        </div>
      </div>
    </>
  );
}
