import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiRubyonrails,
  SiRuby,
  SiMongodb,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="font-bold text-xl mb-8">SKILLS</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8">
        <div className="text-neutral-500 hover:text-[#149ECA] transition duration-300">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiReact className="text-5xl" />
            <h2>React</h2>
          </a>
        </div>

        <div className="text-neutral-500 group">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiNextdotjs className="text-5xl group-hover:text-black group-hover:bg-white rounded-full transition duration-300" />
            <h2 className="group-hover:text-black group-hover:dark:text-white transition duration-300">
              Next.js
            </h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#764ABC] transition duration-300">
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiRedux className="text-5xl" />
            <h2>Redux</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#3178C6] transition duration-300">
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiTypescript className="text-5xl" />
            <h2>TypeScript</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#EFD81D] transition duration-300">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiJavascript className="text-5xl" />
            <h2>JavaScript</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#38BDF8] transition duration-300">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4 text-center"
          >
            <SiTailwindcss className="text-5xl" />
            <h2>Tailwind CSS</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#F16529] transition duration-300">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiHtml5 className="text-5xl" />
            <h2>HTML5</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#409AD6] transition duration-300">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiCss3 className="text-5xl" />
            <h2>CSS3</h2>
          </a>
        </div>

        <div className="text-neutral-500 group">
          <a
            href="https://www.prisma.io/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4 hover:text-[#1A202C] hover:dark:text-white transition duration-300"
          >
            <SiPrisma className="text-5xl" />
            <h2>Prisma</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#8BC500] transition duration-300">
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiNodedotjs className="text-5xl" />
            <h2>Node.js</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-neutral-900 hover:dark:text-white transition duration-300">
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiExpress className="text-5xl" />
            <h2>Express</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#CC0000] transition duration-300">
          <a
            href="https://rubyonrails.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4 text-center"
          >
            <SiRubyonrails className="text-5xl" />
            <h2>Ruby on Rails</h2>
          </a>
        </div>

        <div className=" text-neutral-500 hover:text-[#EC1622] transition duration-300">
          <a
            href="https://www.ruby-lang.org/en/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiRuby className="text-5xl" />
            <h2>Ruby</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#55AD47] transition duration-300">
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiMongodb className="text-5xl" />
            <h2>MongoDB</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#386B93] transition duration-300">
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiPostgresql className="text-5xl" />
            <h2>PostgreSQL</h2>
          </a>
        </div>

        <div className="text-neutral-500 hover:text-[#F0563A] transition duration-300">
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiGit className="text-5xl" />
            <h2>Git</h2>
          </a>
        </div>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="flex items-center mb-16 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
      >
        <span className="text-lg font-semibold">View Full Resume</span>
        <FaArrowRight className="text-sm ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </a>
    </section>
  );
};

export default SkillsSection;
