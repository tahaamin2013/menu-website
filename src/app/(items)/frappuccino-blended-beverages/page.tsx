import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
    url: `${siteMetadata.siteUrl}frappuccino-blended-beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}frappuccino-blended-beverages`,
  },
};

const FrappuccinoBlendedBeverages = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/frappuccino-blended-beverages" />
      </Head>
      <CategoryPageComponent
        name="Frappuccino® Blended Beverages"
        link="/frappuccino-blended-beverages"
      />
    </div>
  );
};

export default FrappuccinoBlendedBeverages;
