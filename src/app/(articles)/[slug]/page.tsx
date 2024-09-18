import type { Metadata } from "next";
import dynamic from "next/dynamic";
import BlogReader from "@/src/components/Blog/BlogReader/BlogReading";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Head from "next/head";

const ScrollProgressBar = dynamic(
  () => import("@/src/components/Blog/BlogReader/ScrollProgressBar"),
  { ssr: false }
);

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description || siteMetadata.description,
    openGraph: {
      title: blog.title,
      description: blog.description || siteMetadata.description,
      images: siteMetadata.socialBanner, // Using socialBanner here
    },
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return (
      <div>
        <div className="relative flex flex-col items-center justify-center">
          <h1
            className={`inline-block text-dark dark:text-light text-6xl font-bold w-full capitalize xl:text-8xl text-center`}
          >
            404
          </h1>
          <h2
            className={`inline-block text-dark dark:text-light text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}
          >
            Page Not Found!
          </h2>
          <Link
            aria-label="Starbucks Home"
            href="/"
            className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          >
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: [siteMetadata.socialBanner], // Add socialBanner here
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog.author || siteMetadata.author,
        url: "https://www.linkedin.com/in/amin-ahsan-b10a7822/",
      },
    ],
    potentialAction: { // Adding potentialAction for Sitelinks Searchbox
      "@type": "SearchAction",
      "target": `${siteMetadata.siteUrl}?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const canonicalUrl = `https://starbucks-menu-with-prices.net/${params.slug}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <BlogReader parmy={params} blogy={blog} />
      </article>
    </>
  );
};

export default BlogPage;
