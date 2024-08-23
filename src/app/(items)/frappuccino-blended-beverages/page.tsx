import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
    url: `${siteMetadata.siteUrl}frappuccino-blended-beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}frappuccino-blended-beverages`,
  },
};

const FrappuccinoBlendedBeverages = () => {
  return (
    <CategoryPageComponent
      name="Frappuccino® Blended Beverages"
      link="/frappuccino-blended-beverages"
    />
  );
};

export default FrappuccinoBlendedBeverages;
