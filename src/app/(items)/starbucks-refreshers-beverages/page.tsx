import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

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
    <CategoryPageComponent
      name="Starbucks Refreshers® Beverages"
      link="/starbucks-refreshers-beverages"
    />
  );
};

export default StarbucksRefreshersBeverages;
