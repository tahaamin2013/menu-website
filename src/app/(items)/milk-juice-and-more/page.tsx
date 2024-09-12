import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Milk, Juice & More`,
  openGraph: {
    title: `${siteMetadata.title} - Milk, Juice & More`,
    url: `${siteMetadata.siteUrl}milk-juice-and-more`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}milk-juice-and-more`,
  },
};

const MilkJuceAndMore = () => {
  return (
      <div>
        <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/milk-juice-and-more" />
        </Head>
    <CategoryPageComponent
      name="Milk, Juice & More"
      link="/milk-juice-and-more"
        />
        </div>
  );
};

export default MilkJuceAndMore;
