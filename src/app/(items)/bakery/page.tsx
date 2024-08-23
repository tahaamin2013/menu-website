import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bakery`,
  openGraph: {
    title: `${siteMetadata.title} - Bakery`,
    url: `${siteMetadata.siteUrl}bakery`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}bakery`,
  },
};

const Bakery = () => {
  return <CategoryPageComponent name="Bakery" link="/bakery" />;
};

export default Bakery;