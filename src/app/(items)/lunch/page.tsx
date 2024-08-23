import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

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
  return <CategoryPageComponent name="Lunch" link="/lunch" />;
};

export default Lunch;
