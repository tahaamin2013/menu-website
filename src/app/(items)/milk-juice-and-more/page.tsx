import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Milk, Juice & More`,
  openGraph: {
    title: `${siteMetadata.title} - Milk, Juice & More`,
    url: `${siteMetadata.siteUrl}milk-juice-and-more`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}milk-juice-and-more`,
  },
};

const MilkJuceAndMore = () => {
  return (
    <CategoryPageComponent
      name="Milk, Juice & More"
      link="/milk-juice-and-more"
    />
  );
};

export default MilkJuceAndMore;
