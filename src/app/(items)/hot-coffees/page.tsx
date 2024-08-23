import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Coffees`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Coffees`,
    url: `${siteMetadata.siteUrl}hot-coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-coffees`,
  },
};

const HotCoffees = () => {
  return <CategoryPageComponent name="Hot Coffees" link="/hot-coffees" />;
};

export default HotCoffees;
