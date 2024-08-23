import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Breakfast`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Breakfast`,
    url: `${siteMetadata.siteUrl}hot-breakfast`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-breakfast`,
  },
};

const HotBreakFast = () => {
  return <CategoryPageComponent name="Hot Breakfast" link="/hot-breakfast" />;
};

export default HotBreakFast;
