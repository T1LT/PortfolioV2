import Navbar from "@/components/Navbar";
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import BlogPostsSection from "@/components/Sections/BlogPostsSection";
import CopyEmailButton from "@/components/CopyEmailButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import NavLink from "@/components/NavLink";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between py-4 px-36">
        <div className="flex justify-evenly w-full h-full">
          {/* LEFT SECTION */}
          <div className="w-2/5 h-full p-8 flex flex-col justify-between gap-48">
            {/* LEFT TOP - HEADER*/}
            <div>
              <h1 className="font-bold text-5xl mb-2">
                <a href="#">Nishant Racherla</a>
              </h1>
              <h2 className="font-semibold text-xl mt-2">
                Full-Stack Software Engineer
              </h2>
              <p className="mt-4 text-[#555] dark:text-neutral-300">
                Passionate to learn and ready to elevate your web experience.
              </p>
            </div>
            {/* LEFT MIDDLE - NAV LINKS */}
            <div className="flex flex-col gap-4">
              <NavLink title="About Me" /> 
              <NavLink title="Skills" /> 
              <NavLink title="Projects" />
              <NavLink title="Blog Posts" />
            </div>
            {/* LEFT BOTTOM - CONTACT INFO */}
            <div className="flex gap-8">
              <a
                href="https://github.com/T1LT"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my GitHub"
              >
                <FaGithub className="text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/nishantracherla"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my LinkedIn"
              >
                <FaLinkedin className="text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://instagram.com/nishantracherla"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my Instagram"
              >
                <FaInstagram className="text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <a
                href="https://x.com/NishantRacherla"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my X/Twitter"
              >
                <BsTwitterX className="text-4xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition duration-300" />
              </a>
              <CopyEmailButton />
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="w-2/5 p-8 overflow-y-scroll">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogPostsSection />
          </div>
        </div>
      </div>
    </>
  );
}
