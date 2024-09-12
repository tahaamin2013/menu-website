import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Cups`,
  openGraph: {
    title: `${siteMetadata.title} - Cold Cups`,
    url: `${siteMetadata.siteUrl}cold-cups`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}cold-cups`,
  },
};

const ColdCups = () => {
  return (<div>
    <Head>
      <link rel="canonical" href="https://starbucks-menu-with-prices.net/cold-cups" />
    </Head>
    <CategoryPageComponent name="Cold Cups" link="/cold-cups" />
    </div>
    );
};

export default ColdCups;
