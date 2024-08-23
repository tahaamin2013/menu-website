import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Water Bottles`,
  openGraph: {
    title: `${siteMetadata.title} - Water Bottles`,
    url: `${siteMetadata.siteUrl}water-bottles`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}water-bottles`,
  },
};

const WaterBottles = () => {
  return <CategoryPageComponent name="Water Bottles" link="/water-bottles" />
};

export default WaterBottles;
