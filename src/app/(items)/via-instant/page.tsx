import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - VIA Instant`,
  openGraph: {
    title: `${siteMetadata.title} - VIA Instant`,
    url: `${siteMetadata.siteUrl}via-instant`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}via-instant`,
  },
};

const ViaInstant = () => {
  return <CategoryPageComponent name="VIA® Instant" link="/via-instant" />;
};

export default ViaInstant;
