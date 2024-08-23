import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import SubMenu from "@/src/components/subMenu";
import Footer from "@/src/components/footer";
import Sidebar from "@/src/components/sidebar";
import siteMetadata from "@/src/utils/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

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
        <Navbar />
        <main>
          <SubMenu />
          <div className="flex px-5 md:px-[60px] my-9">
            <Sidebar />
            <div className="w-full">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
