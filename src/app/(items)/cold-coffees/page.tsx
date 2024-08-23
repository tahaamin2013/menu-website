import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Coffees`,
  description:
    "Explore our refreshing selection of cold coffees and iced beverages.",
  openGraph: {
    title: `${siteMetadata.title} - Cold Coffees`,
    description:
      "Explore our refreshing selection of cold coffees and iced beverages.",
    url: `${siteMetadata.siteUrl}/cold-coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}cold-coffees`,
  },
};

const ColdCoffees = () => {
  return <CategoryPageComponent name="Cold Coffees" link="/cold-coffees" />;
};

export default ColdCoffees;
