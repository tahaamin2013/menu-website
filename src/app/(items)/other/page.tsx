import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Other`,
  openGraph: {
    title: `${siteMetadata.title} - Other`,
    url: `${siteMetadata.siteUrl}other`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}other`,
  },
};

const other = () => {
  return (
  <div>
    <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/other" />
    </Head>
    <CategoryPageComponent name="Other" link="/other" />
    </div>
    )
    ;
};

export default other;
