import { format, parseISO } from "date-fns";

const BlogDetails = ({ blog, slug: blogSlug }: { blog: any; slug: any }) => {
  return (
    <section className="mt-2 mb-4 leading-4 tracking-[2px] font-bold text-slate-400 flex flex-wrap justify-center items-center gap-4">
      <p>by {blog.author}</p>
      <time>{format(parseISO(blog.publishedAt), "LLL d, yyyy")}</time>
      {blog.readingTime.text}
    </section>
  );
};

export default BlogDetails;
