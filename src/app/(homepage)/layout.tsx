import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/footer";
import siteMetadata from "@/src/utils/siteMetaData";
import HeroSection from "@/src/components/HeroSection";
import { Suspense } from "react";
import Loading from "@/src/components/Loading";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: siteMetadata.title,
  },
  description: siteMetadata.description,
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0b7555" />
      </head>
      <body className={inter.className}>
        {/* <Loader> */}
        <Navbar />
        <HeroSection />
        <main>
          {/* <SubMenu /> */}
          <div className="flex px-5 md:px-[60px] mb-9">
            {/* <Sidebar /> */}
            <div className="w-full">
              {children}

            </div>
          </div>
        </main>

        <Footer />
        {/* </Loader> */}
        <Analytics />
      </body>
    </html >
  );
}
