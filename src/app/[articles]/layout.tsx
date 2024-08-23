import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import SubMenu from "@/src/components/subMenu";
import Footer from "@/src/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function ArticlesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { articles: string };
}) {
  const allowedRoutes = [
    "bakery",
    "bottled-beverages",
    "cold-coffees",
    "cold-cups",
    "frappuccino-blended-beverages",
    "hot-breakfast",
    "hot-coffees",
    "hot-teas",
    "iced-tea-and-lemonade",
    "lunch",
    "milk-juice-and-more",
    "mugs",
    "oatmeal-and-yogurt",
    "other",
    "snacks-and-sweets",
    "starbucks-refreshers-beverages",
    "tumblers",
    "via-instant",
    "water-bottles",
    "whole-bean",
  ];

  if (!allowedRoutes.includes(params.articles)) {
    return (
      <main className="my-32 w-full dark:bg-dark flex justify-center font-mr">
        <div className="relative flex flex-col items-center justify-center">
          <h1
            className={`inline-block text-dark dark:text-light
         text-6xl font-bold w-full capitalize xl:text-8xl text-center`}
          >
            404
          </h1>
          <h2
            className={`inline-block text-dark dark:text-light
         text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}
          >
            Page Not Found!
          </h2>
          <Link
            aria-label="Starbucks Home"
            href="/"
            className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
           font-semibold text-light hover:border-dark hover:bg-light hover:text-dark
           dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
           "
          >
            Go To Home
          </Link>
        </div>
      </main>
    );
  }

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
            <div className="w-full">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
