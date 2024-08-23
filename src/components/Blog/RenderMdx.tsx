"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

const mdxComponents = {
  Image,
  a: (props: any) => (
    <Link
      aria-label={props.herf}
      href={props.href}
      className="text-primary font-extrabold no-underline hover:text-primary/70 transition-all duration-300"
    >
      {props.children}
    </Link>
  ),
};

const RenderMdx = ({ blog }: { blog: any }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="">
      <div
        className="text-prose font-in prose sm:prose-base md:prose-lg  max-w-[610px] md:max-w-max prose-blockquote:bg-primary/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-primary prose-blockquote:not-italic prose-blockquote:rounded-r-lg !text-[16px] font-bold tracking-[1px] !text-black/60 prose-li:marker:text-primary dark:prose-invert dark:prose-blockquote:border-primary dark:prose-li:marker:text-primary"
        style={{ scrollMarginTop: "30px" }}
      >
        <MDXContent components={mdxComponents} />
      </div>
    </div>
  );
};

export default RenderMdx;
