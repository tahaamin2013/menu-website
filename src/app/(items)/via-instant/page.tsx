import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - VIA Instant`,
  openGraph: {
    title: `${siteMetadata.title} - VIA Instant`,
    url: `${siteMetadata.siteUrl}via-instant`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}via-instant`,
  },
};

const ViaInstant = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/via-instant" />
      </Head>
      <CategoryPageComponent name="VIA® Instant" link="/via-instant" />;
    </div>
  )
};

export default ViaInstant;
