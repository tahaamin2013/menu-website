import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Coffees`,
  description:
    "Explore our refreshing selection of cold coffees and iced beverages.",
  openGraph: {
    title: `${siteMetadata.title} - Cold Coffees`,
    description:
      "Explore our refreshing selection of cold coffees and iced beverages.",
    url: `${siteMetadata.siteUrl}/cold-coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}cold-coffees`,
  },
};

const ColdCoffees = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/cold-coffees" />
      </Head>
      <CategoryPageComponent name="Cold Coffees" link="/cold-coffees" />
    </div>
  )
    ;
};

export default ColdCoffees;
