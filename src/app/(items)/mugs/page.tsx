import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Mugs`,
  openGraph: {
    title: `${siteMetadata.title} - Mugs`,
    url: `${siteMetadata.siteUrl}mugs`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}mugs`,
  },
};

const Mugs = () => {
  return <CategoryPageComponent name="Mugs" link="/mugs" />;
};

export default Mugs;
