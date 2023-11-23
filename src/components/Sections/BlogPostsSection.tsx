import Card from "../Card";

const BlogPostsSection = () => {
  return (
    <section id="blog">
      <h1 className="font-bold mb-4 text-xl">
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
