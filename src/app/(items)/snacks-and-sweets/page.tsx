import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Snacks & Sweets`,
  openGraph: {
    title: `${siteMetadata.title} - Snacks & Sweets`,
    url: `${siteMetadata.siteUrl}snacks-and-sweets`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}snacks-and-sweets`,
  },
};

const SnacksAndSweets = () => {
  return (      <div>
        <Head>
          <link rel="canonical" href="https://starbucks-menu-with-prices.net/snacks-and-sweets" />
        </Head>
        <CategoryPageComponent name="Snacks & Sweets" link="/snacks-and-sweets" />
        </div>
  );
};

export default SnacksAndSweets;
