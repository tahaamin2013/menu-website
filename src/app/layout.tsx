import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteMetadata from "../utils/siteMetaData";
import { GoogleTagManager } from "@next/third-parties/google";
import { cx } from "../utils";
import Script from "next/script";
import { Suspense } from "react";
import Loading from "../components/Loading";
import GoogleAdsense from "../components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StarbMenu",
    url: "https://starbucks-menu-with-prices.net/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://starbucks-menu-with-prices.net/",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
          crossOrigin="anonymous"></script>
        <meta name="theme-color" content="#0b7555" />
        <meta
          property="og:image"
          content="https://starbucks-menu-with-prices.net/opengraph-image.png"
        />
        <link
          rel="canonical"
          href={`${siteMetadata.siteUrl}${typeof window !== "undefined" ? window.location.pathname : ""
            }`}
        />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>

      <body className={cx("font-mr")}>

        {children}

      </body>
      {/* <GoogleAdsense pId="9571755808195636" /> */}
    </html >
  );
}
