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
import Autoplay from "embla-carousel-autoplay"

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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <div className='block md:hidden'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-full"
        >
          <div className="w-[300px] absolute -left-[13rem] -bottom-0 h-[200px] bg-orange-300 rounded-full blur-3xl" />
          <div className="w-[400px] absolute -right-[13rem] top-[10px] h-[307px] bg-[#C0E8A6] rounded-full blur-2xl" />
          <CarouselContent>
            {allProducts.map((product, index) => {
              const link = convertNameToLink(product.name);
              console.log(link);
              return (
                <CarouselItem
                  key={product.link}
                  className="flex flex-col gap-2 px-12 py-6 justify-center items-center">
                  <Image
                    className="rounded-full"
                    src={product.image}
                    alt={`Starbucks Product`}
                    width={160}
                    height={100}
                    loading="lazy"
                  />
                  {/* TODO: chage above image */}
                  <span className="font-bold text-xl text-center">{product.name}</span>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  );
};

export default MobileHerosection;