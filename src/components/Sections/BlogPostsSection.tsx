import { FaArrowRight } from "react-icons/fa";
import Card from "../Card";
import Link from "next/link";

const BlogPostsSection = () => {
  return (
    <section
      id="blog"
      className="scroll-mt-[calc(88px+0.5rem)] xl:scroll-mt-[calc(88px+2rem)]"
    >
      <h1 className="font-bold mb-4 text-xl group">
        <span className="float-left opacity-0 group-hover:opacity-100 -ml-4 lg:-ml-8 mr-0 lg:mr-2 text-[#555] dark:text-neutral-500 transition duration-300">
          #
        </span>
        <a href="#blog">BLOG POSTS</a>
      </h1>
      {/* FOR DEBUGGING PURPOSES ONLY */}
      <Card
        title="Coming Soon"
        url="http://localhost:3000/"
        type="blog"
        year={2023}
        disabled
      />
      <Link
        href="/blogposts"
        className="flex items-center mt-4 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
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
