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

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-16">
      <h1 className="font-bold text-lg sm:text-xl mb-8">
        <a href="#skills">SKILLS</a>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8">
        <div className="text-neutral-500 hover:text-[#149ECA] transition duration-300">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4"
          >
            <SiReact className="text-5xl" />
            <h2 className="text-sm sm:text-base">React</h2>
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
            <h2 className="text-sm sm:text-base group-hover:text-black group-hover:dark:text-white transition duration-300">
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
            <h2 className="text-sm sm:text-base">Redux</h2>
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
            <h2 className="text-sm sm:text-base">TypeScript</h2>
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
            <h2 className="text-sm sm:text-base">JavaScript</h2>
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
            <h2 className="text-sm sm:text-base">Tailwind CSS</h2>
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
            <h2 className="text-sm sm:text-base">HTML5</h2>
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
            <h2 className="text-sm sm:text-base">CSS3</h2>
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
            <h2 className="text-sm sm:text-base">Prisma</h2>
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
            <h2 className="text-sm sm:text-base">Node.js</h2>
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
            <h2 className="text-sm sm:text-base">Express</h2>
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
            <h2 className="text-sm sm:text-base">Ruby on Rails</h2>
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
            <h2 className="text-sm sm:text-base">Ruby</h2>
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
            <h2 className="text-sm sm:text-base">MongoDB</h2>
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
            <h2 className="text-sm sm:text-base">PostgreSQL</h2>
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
            <h2 className="text-sm sm:text-base">Git</h2>
          </a>
        </div>
      </div> 
    </section>
  );
};

export default SkillsSection;
