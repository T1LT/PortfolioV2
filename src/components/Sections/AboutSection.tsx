const AboutSection = () => {
  return (
    <section id="about" className="mb-16">
      <h1 className="font-bold mb-4 text-xl">
        <a href="#about">ABOUT ME</a>
      </h1>
      <p className="leading-relaxed mb-4 text-[#555] dark:text-neutral-300">
        Friendly, neighborhood Software Engineer based in California with a
        drive to understand the theory behind Computer Science and master its
        application. Growing up watching{" "}
        <a
          href="https://youtube.com/@mkbhd"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black dark:text-white hover:text-red-600 hover:dark:text-red-600 transition duration-300 border-b border-b-red-500"
        >
          MKBHD
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@LinusTechTips"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black dark:text-white hover:text-orange-600 hover:dark:text-orange-600 transition duration-300 border-b border-b-orange-500"
        >
          LTT
        </a>
        , and similar content creators, I was always interested in the latest
        tech. I went on to pursue a degree in Computer Science and that&apos;s
        where my journey into the depths of Web Development began.
      </p>
      <p className="leading-relaxed text-[#555] dark:text-neutral-300">
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
    </section>
  );
};

export default AboutSection;
