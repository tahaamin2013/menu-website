import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Tumblers`,
  openGraph: {
    title: `${siteMetadata.title} - Tumblers`,
    url: `${siteMetadata.siteUrl}tumblers`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}tumblers`,
  },
};

const Tumblers = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/tumblers" />
      </Head>
      <CategoryPageComponent
        name="Tumblers"
        link="/tumblers"
      />
    </div>
  );
};

export default Tumblers;
