import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Water Bottles`,
  openGraph: {
    title: `${siteMetadata.title} - Water Bottles`,
    url: `${siteMetadata.siteUrl}water-bottles`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}water-bottles`,
  },
};

const WaterBottles = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/water-bottles" />
      </Head>
      <CategoryPageComponent name="Water Bottles" link="/water-bottles" />
    </div>
  )
};

export default WaterBottles;
