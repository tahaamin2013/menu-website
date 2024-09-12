import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bakery`,
  openGraph: {
    title: `${siteMetadata.title} - Bakery`,
    url: `${siteMetadata.siteUrl}bakery`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}bakery`,
  },
};

const Bakery = () => {
  return (<div>
    <Head>
      <link rel="canonical" href="https://starbucks-menu-with-prices.net/bakery" />
    </Head>
    <CategoryPageComponent name="Bakery" link="/bakery" />
  </div>);
};

export default Bakery;