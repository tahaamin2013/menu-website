import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Breakfast`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Breakfast`,
    url: `${siteMetadata.siteUrl}hot-breakfast`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-breakfast`,
  },
};

const HotBreakFast = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/hot-breakfast" />
      </Head>
      <CategoryPageComponent name="Hot Breakfast" link="/hot-breakfast" />
    </div>
  );
};

export default HotBreakFast;
