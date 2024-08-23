import { getServerSideSitemap } from "next-sitemap";
import { allBlogs } from "contentlayer/generated";
import siteMetadata from "@/src/utils/siteMetaData";
import { ISitemapField } from "next-sitemap";

const allowedArticleRoutes = [
  "bakery",
  "bottled-beverages",
  "cold-coffees",
  "cold-cups",
  "frappuccino-blended-beverages",
  "hot-breakfast",
  "hot-coffees",
  "hot-teas",
  "iced-tea-and-lemonade",
  "lunch",
  "milk-juice-and-more",
  "mugs",
  "oatmeal-and-yogurt",
  "other",
  "snacks-and-sweets",
  "starbucks-refreshers-beverages",
  "tumblers",
  "via-instant",
  "water-bottles",
  "whole-bean",
];

export async function GET() {
  const articleFields: ISitemapField[] = allBlogs
    .filter((blog) => {
      const [category] = blog._raw.flattenedPath.split("/");
      return allowedArticleRoutes.includes(category);
    })
    .map((blog) => {
      const [category, slug] = blog._raw.flattenedPath.split("/");
      return {
        // loc: `${siteMetadata.siteUrl}/${category}/${slug}`,
        loc: `${siteMetadata.siteUrl}/${slug}`,
        lastmod: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
        changefreq: "weekly",
        priority: 0.7,
      };
    });

  const sitemap: any = await getServerSideSitemap(articleFields);

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
