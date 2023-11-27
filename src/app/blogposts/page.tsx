import Navbar from "@/components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Card from "@/components/Card";

const BlogPostsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-8 md:px-16 xl:px-24 py-4">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <Link
            href="/"
            className="flex items-center mb-4 text-[#555] dark:text-neutral-500 hover:text-black hover:dark:text-white cursor-pointer transition duration-300 group"
          >
            <FaArrowLeft className="text-sm mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="text-base sm:text-lg font-semibold">Back</span>
          </Link>
          <h1 className="font-bold mb-4 text-2xl sm:text-3xl group">
            <span className="float-left opacity-0 group-hover:opacity-100 -ml-16 lg:-ml-8 mr-0 lg:mr-2 text-neutral-400 dark:text-neutral-500 transition duration-300">
              #
            </span>
            <Link href="/blogposts">All Blog Posts</Link>
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <Card
            title="Figma Config 2023 Visit"
            url="https://www.linkedin.com/posts/nishantracherla_config2023-activity-7079894882865086464-4GpP?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Optimizing React App Performance 4/4 🧵"
            url="https://www.linkedin.com/posts/nishantracherla_react-javascript-typescript-activity-7054559085941198848-CjSs?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Optimizing React App Performance 3/4🧵"
            url="https://www.linkedin.com/posts/nishantracherla_react-reactjs-javascript-activity-7049765200551444481-pESj?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Optimizing React App Performance 2/4 🧵"
            url="https://www.linkedin.com/posts/nishantracherla_react-reactjs-javascript-activity-7041067892775280640-vkxX?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Optimizing React App Performance 1/4 🧵"
            url="https://www.linkedin.com/posts/nishantracherla_reactjs-reacthooks-javascript-activity-7038875601604141057-2xY1?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Debouncing in React/JavaScript"
            url="https://www.linkedin.com/posts/nishantracherla_reactjs-javascript-activity-7031030341297426432-vFtI?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
          <Card
            title="Hoisting in JavaScript"
            url="https://www.linkedin.com/posts/nishantracherla_javascript-reactjs-activity-7029160146165522433-MMRV?utm_source=share&utm_medium=member_desktop"
            type="blog"
            year={2023}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPostsPage;