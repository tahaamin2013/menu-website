import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Iced Tea and Lemonade`,
  openGraph: {
    title: `${siteMetadata.title} - Iced Tea and Lemonade`,
    url: `${siteMetadata.siteUrl}iced-tea-and-lemonade`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}iced-tea-and-lemonade`,
  },
};

const IcedTeaAndLemonade = () => {
  return (
    <CategoryPageComponent
      name="Iced Tea and Lemonade"
      link="/iced-tea-and-lemonade"
    />
  );
};

export default IcedTeaAndLemonade;
