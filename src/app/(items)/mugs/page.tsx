import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Mugs`,
  openGraph: {
    title: `${siteMetadata.title} - Mugs`,
    url: `${siteMetadata.siteUrl}mugs`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}mugs`,
  },
};

const Mugs = () => {
  return (
      <div>
        <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/mugs" />
        </Head>
        <CategoryPageComponent name="Mugs" link="/mugs" />;
        </div>
        )
};

export default Mugs;
