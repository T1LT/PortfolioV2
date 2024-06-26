import { ArrowUpRight } from "lucide-react";
import { headers } from "next/headers";

const AboutSection = () => {
  const head = headers();
  const country = head.get("x-vercel-ip-country");

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-[calc(88px+0.5rem)] xl:scroll-mt-[calc(88px+2rem)]"
    >
      <h1 className="font-bold mb-4 text-lg sm:text-xl group">
        <span className="float-left opacity-0 group-hover:opacity-100 -ml-4 lg:-ml-8 mr-0 lg:mr-2 text-neutral-400 dark:text-neutral-500 transition duration-300">
          #
        </span>
        <a href="#about">ABOUT ME</a>
      </h1>
      <p className="leading-relaxed mb-4 text-sm sm:text-base text-[#555] dark:text-neutral-300">
        Friendly neighborhood Software Engineer based in {country === "IN" ? "Hyderabad" : "California"} with a drive
        to understand the theory behind Computer Science and master its
        application. Growing up watching{" "}
        <a
          href="https://youtube.com/@mkbhd"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black dark:text-white hover:text-red-600 hover:dark:text-red-600 transition duration-300 border-b border-b-black dark:border-b-white hover:border-b-red-500 hover:dark:border-b-red-500"
        >
          MKBHD
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@LinusTechTips"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black dark:text-white hover:text-orange-600 hover:dark:text-orange-600 transition duration-300 border-b border-b-black dark:border-b-white hover:border-b-orange-600 hover:dark:border-b-orange-600"
        >
          LTT
        </a>
        , and similar content creators, I have always been interested in the
        latest tech. I went on to pursue a degree in Computer Science and
        that&apos;s where my journey into the depths of Web Development began.
      </p>
      <p className="leading-relaxed text-sm sm:text-base text-[#555] dark:text-neutral-300">
        My other interests include{" "}
        <span className="text-black font-semibold dark:text-white">
          motorsports
        </span>
        ,{" "}
        <span className="text-black font-semibold dark:text-white">
          photography
        </span>
        ,{" "}
        <span className="text-black font-semibold dark:text-white">chess</span>,{" "}
        <span className="text-black font-semibold dark:text-white">anime</span>,
        and{" "}
        <span className="text-black font-semibold dark:text-white">gaming</span>
        .
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="flex xl:hidden items-center mt-8 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
      >
        <span className="text-base sm:text-lg font-semibold">View Resume</span>
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 font-semibold ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </a>
    </section>
  );
};

export default AboutSection;
