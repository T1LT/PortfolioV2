import Navbar from "@/components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const BlogPostsPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-24 py-4">
        <Link
          href="/"
          className="flex items-center mb-4 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
        >
          <FaArrowLeft className="text-sm mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="text-base sm:text-lg font-semibold">Back</span>
        </Link>
        <h1>All Blog Posts</h1>
      </div>
    </>
  );
};

export default BlogPostsPage;
