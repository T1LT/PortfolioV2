import { FaArrowRight } from "react-icons/fa";
import Card from "../Card";
import Link from "next/link";

const BlogPostsSection = () => {
  return (
    <section
      id="blog"
      className="scroll-mt-[calc(88px+0.5rem)] xl:scroll-mt-[calc(88px+2rem)] mb-12 lg:mb-4"
    >
      <h1 className="font-bold mb-4 text-xl group">
        <span className="float-left opacity-0 group-hover:opacity-100 -ml-4 lg:-ml-8 mr-0 lg:mr-2 text-neutral-400 dark:text-neutral-500 transition duration-300">
          #
        </span>
        <a href="#blog">BLOG POSTS</a>
      </h1>
      <div className="flex flex-col gap-2">
        <Card
          title="DishCraft Takeaways/Thoughts Thread 🧵"
          url="https://twitter.com/T1LTdev/status/1749727383660478766"
          type="blog"
          date="Jan 2024"
          src="Twitter"
          readTime="3 min"
        />
        <Card
          title="Figma Config 2023 Visit"
          url="https://www.linkedin.com/posts/nishantracherla_config2023-activity-7079894882865086464-4GpP?utm_source=share&utm_medium=member_desktop"
          type="blog"
          date="Jun 2023"
          src="LinkedIn"
          readTime="1 min"
        />
        <Card
          title="Optimizing React App Performance 4/4 🧵"
          url="https://www.linkedin.com/posts/nishantracherla_react-javascript-typescript-activity-7054559085941198848-CjSs?utm_source=share&utm_medium=member_desktop"
          type="blog"
          date="Apr 2023"
          src="LinkedIn"
          readTime="2 min"
        />
      </div>
      <Link
        href="/blogposts"
        className="flex w-max items-center my-4 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
      >
        <span className="text-base sm:text-lg font-semibold">
          View All Blog Posts
        </span>
        <FaArrowRight className="text-sm ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </section>
  );
};

export default BlogPostsSection;
