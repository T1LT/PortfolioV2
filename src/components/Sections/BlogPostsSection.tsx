import Card from "../Card";

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
    </section>
  );
};

export default BlogPostsSection;
