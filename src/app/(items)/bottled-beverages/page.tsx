import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bottled Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Bottled Beverages`,
    url: `${siteMetadata.siteUrl}bottled-beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}bottled-beverages`,
  },
};

const BottleBeverages = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/bottled-beverages" />
      </Head>
      <CategoryPageComponent name="Bottled Beverages" link="/bottled-beverages" />
    </div>
  );
};

export default BottleBeverages;
