import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Other`,
  openGraph: {
    title: `${siteMetadata.title} - Other`,
    url: `${siteMetadata.siteUrl}other`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}other`,
  },
};

const other = () => {
  return <CategoryPageComponent name="Other" link="/other" />;
};

export default other;
