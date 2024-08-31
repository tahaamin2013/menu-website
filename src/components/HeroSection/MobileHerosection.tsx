"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carouselformobile";
import { Menu } from "@/lib/menuItems";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

function convertNameToLink(name: any) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[®™,.\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const MobileHerosection = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(Menu[0].items[0]);

  useEffect(() => {
    const fetchProducts = () => {
      const products = Menu.flatMap((category) =>
        category.items.flatMap((item) =>
          item.subItems.flatMap((subItem) => subItem.products)
        )
      );
      const shuffledProducts = shuffleArray([...products]);
      setAllProducts(shuffledProducts);
      setLoading(false); // Set loading to false after products are fetched
    };

    fetchProducts();
  }, []); // Empty dependency array means this will only run once when the component mounts
  const categoryLink = convertNameToLink(selectedCategory.name);

  return (
    <>
      {loading ? (
        <div className=" pb-3 items-center px-7 border-b mb-3 block md:hidden">
          <Skeleton className="mb-2 h-[400px] md:mt-2 w-full rounded-xl" />
        </div>
      ) : (
        <Carousel className="h-[400px] mb-6 lg:hidden block overflow-hidden">
          <div className="w-[300px] absolute -left-[13rem] -bottom-0 h-[200px] bg-orange-300 rounded-full blur-3xl" />
          <div className="w-[400px] absolute -right-[13rem] top-[10px] h-[307px] bg-[#C0E8A6] rounded-full blur-2xl" />
          <CarouselContent>
            {allProducts.map((product, index) => {
              const link = convertNameToLink(product.name);
              console.log(link);
              return (
                <CarouselItem
                  key={product.link}
                  className="flex flex-col gap-3 items-center px-10 justify-center text-center"
                >
                  <Image
                    className="rounded-full"
                    src={product.image}
                    alt={`Starbucks Product`}
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  {/* TODO: chage above image */}
                  <span className="font-bold text-xl">{product.name}</span>
                  <Link
                    href={`/${link}`}
                    className="w-fit px-6 text-white rounded-full bg-primary py-2 text-[15px] duration-500 transition-all"
                  >
                    View Price & Calories
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
};

export default MobileHerosection;