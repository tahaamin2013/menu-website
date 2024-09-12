import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Starbucks Refreshers Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Starbucks Refreshers Beverages`,
    url: `${siteMetadata.siteUrl}starbucks-refreshers-beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}starbucks-refreshers-beverages`,
  },
};

const StarbucksRefreshersBeverages = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/starbucks-refreshers-beverages" />
      </Head>
      <CategoryPageComponent
        name="Starbucks Refreshers® Beverages"
        link="/starbucks-refreshers-beverages"
      />
    </div>
  );
};

export default StarbucksRefreshersBeverages;
