import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Teas`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Teas`,
    url: `${siteMetadata.siteUrl}hot-teas`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-teas`,
  },
};

const HotTeas = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/hot-teas" />
      </Head>
      <CategoryPageComponent name="Hot Teas" link="/hot-teas" />;
    </div>
  )
};

export default HotTeas;
