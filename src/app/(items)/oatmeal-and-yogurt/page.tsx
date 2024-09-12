import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Oatmeal & Yogurt`,
  openGraph: {
    title: `${siteMetadata.title} - Oatmeal & Yogurt`,
    url: `${siteMetadata.siteUrl}oatmeal-and-yogurt`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}oatmeal-and-yogurt`,
  },
};

const OatmealAndYogurt = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/oatmeal-and-yogurt" />
      </Head>
      <CategoryPageComponent
        name="Oatmeal & Yogurt"
        link="/oatmeal-and-yogurt"
      />
    </div>
  );
};

export default OatmealAndYogurt;
