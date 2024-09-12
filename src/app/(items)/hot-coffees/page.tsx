import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Coffees`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Coffees`,
    url: `${siteMetadata.siteUrl}hot-coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-coffees`,
  },
};

const HotCoffees = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/hot-coffees" />
      </Head>
      <CategoryPageComponent name="Hot Coffees" link="/hot-coffees" />;
    </div>
  )
};

export default HotCoffees;
