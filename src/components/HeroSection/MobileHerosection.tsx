"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carouselformobile";
import { Menu } from "@/lib/menuItems";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface Product {
  name: string;
  image: string;
  link: string;
  // Add other properties as needed
}

const convertNameToLink = (name: string): string =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[®™,.\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MobileHerosection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(() => {
    const products: Product[] = Menu.flatMap((category) =>
      category.items.flatMap((item) =>
        item.subItems.flatMap((subItem) => subItem.products)
      )
    );
    const shuffledProducts = shuffleArray(products);
    setAllProducts(shuffledProducts);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="pb-3 items-center px-7 border-b mb-3 block md:hidden">
        <Skeleton className="mb-2 h-[400px] md:mt-2 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <Carousel className="h-[330px] mb-6 lg:hidden block overflow-hidden">
      <div className="w-[300px] absolute -left-[13rem] -bottom-0 h-[200px] bg-orange-300 rounded-full blur-3xl" />
      <div className="w-[400px] absolute -right-[13rem] top-[10px] h-[307px] bg-[#C0E8A6] rounded-full blur-2xl" />
      <CarouselContent>
        {allProducts.map((product) => {
          const link = convertNameToLink(product.name);
          return (
            <CarouselItem
              key={product.link}
              className="flex flex-col gap-3 items-center px-10 justify-center text-center"
            >
              <Image
                className="rounded-full"
                src={product.image}
                alt={`${product.name} Product`}
                width={160}
                height={100}
                loading="lazy"
              />
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
  );
};

export default MobileHerosection;