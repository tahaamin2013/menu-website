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
   page
    </>
  );
};

export default MobileHerosection;