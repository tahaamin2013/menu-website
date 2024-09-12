import Feetured from "@/src/components/Featured";
import Head from "next/head";
import React from "react";

const Featured = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Featured Starbucks Menu Items",
    "description": "Explore our featured Starbucks menu items including seasonal specials and customer favorites.",
    "url": "https://starbucks-menu-with-prices.net/featured",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Starbucks Menu With Prices",
      "url": "https://starbucks-menu-with-prices.net/"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "New Summer-Berry Starbucks Refreshers® Beverages",
          "description": "A mix of berry flavors over bursting raspberry flavored pearls, enjoyed alone or with lemonade or coconutmilk."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "White Chocolate Macadamia Cream Cold Brew",
          "description": "Smooth and lush, our White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Caramel Ribbon Crunch Frappuccino® Blended Beverage",
          "description": "Caramel syrup blended with coffee, milk and ice, topped with a dark caramel drizzle."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "New Orange Cream Cake Pop",
          "description": "A mix of orange cream cake and buttercream, dipped in white-chocolaty icing with an orange slice design."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "New Pineapple Cloud Cake",
          "description": "An airy cake layered with lightweight pineapple cream and pineapple spread with whole fruit pieces."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Vanilla Sweet Cream Cold Brew",
          "description": "Our slow-steeped custom blend of Starbucks® Cold Brew Coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Iced Brown Sugar Oatmilk Shaken Espresso",
          "description": "Rich espresso shaken with brown sugar and cinnamon, topped with oatmilk."
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
          <link rel="canonical" href="https://starbucks-menu-with-prices.net/featured" />
      </Head>
      <div>
        <h1 className="font-bold text-4xl md:text-6xl text-center mt-4">
          We&lsquo;re on summertime
        </h1>

        <Feetured
          borderButton="#ececec"
          color="#ececec"
          direction="Left"
          imageSrc="/Starbucks New Summer Berry Starbucks Refreshers Beverages.jpg"
          title="New Summer-Berry Starbucks Refreshers® Beverages"
          description="Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
          bg="#0021db"
        />
        <Feetured
          borderButton="#1e3932"
          color="#1e3932"
          direction="Right"
          imageSrc="/Starbucks White Chocolate Macadamia Cream Cold Brew.webp"
          title="White Chocolate Macadamia Cream Cold Brew"
          description="Smooth and lush, our White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles."
          bg="#d6e342"
        />
        <Feetured
          borderButton="#1e3932"
          color="#1e3932"
          direction="Left"
          imageSrc="/Starbucks Caramel Ribbon Crunch Frappuccino Blended Beverage.webp"
          title="Caramel Ribbon Crunch Frappuccino® Blended Beverage"
          description="Caramel syrup blended with coffee, milk and ice, topped with a dark caramel drizzle."
          bg="#f8cdd1"
        />
        <Feetured
          borderButton="#ececec"
          color="#ececec"
          direction="Right"
          imageSrc="/Starbucks New Orange Cream Cake Pop.jpg"
          title="New Orange Cream Cake Pop"
          description="A mix of orange cream cake and buttercream, dipped in white-chocolaty icing with an orange slice design."
          bg="#0021db"
        />
        <Feetured
          borderButton="#1e3932"
          color="#1e3932"
          direction="Left"
          imageSrc="/Starbucks New Pineapple Cloud Cake.webp"
          title="New Pineapple Cloud Cake"
          description="An airy cake layered with lightweight pineapple cream and pineapple spread with whole fruit pieces."
          bg="#fad4aa"
        />
        <Feetured
          borderButton="#ececec"
          color="#ececec"
          direction="Right"
          imageSrc="/Starbucks Vanilla Sweet Cream Cold Brew.webp"
          title="Vanilla Sweet Cream Cold Brew"
          description="Our slow-steeped custom blend of Starbucks® Cold Brew Coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream."
          bg="#cfdde5"
        />
        <Feetured
          borderButton="#1e3932"
          color="#1e3932"
          direction="Left"
          imageSrc="/Starbucks Iced Brown Sugar Oatmilk Shaken Espresso.webp"
          title="Iced Brown Sugar Oatmilk Shaken Espresso"
          description="Rich espresso shaken with brown sugar and cinnamon, topped with oatmilk."
          bg="#ebdbb2"
        />
        <div className="mb-9"></div>
      </div>
    </>
  );
};

export default Featured;
