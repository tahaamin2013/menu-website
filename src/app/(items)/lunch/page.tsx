import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Lunch`,
  openGraph: {
    title: `${siteMetadata.title} - Lunch`,
    url: `${siteMetadata.siteUrl}lunch`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}lunch`,
  },
};

const Lunch = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/lunch" />
      </Head>
      <CategoryPageComponent name="Lunch" link="/lunch" /></div>
  );
};

export default Lunch;
