"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Menu } from "@/lib/menuItems";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import MobileHerosection from "./MobileHerosection";
import Link from "next/link";
import GoyButtonforHeroSection from "../GoyButtonforHeroSection";

const convertNameToLink = (name: string) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[®™,.\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(
    Menu[0].items[0].subItems[0].products[0]
  );
  const [selectedCategory, setSelectedCategory] = useState(Menu[0].items[0]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y" });

  // Shuffle products
  const allProducts = useMemo(() => {
    const products = Menu.flatMap((category) =>
      category.items.flatMap((item) =>
        item.subItems.flatMap((subItem) => subItem.products)
      )
    );
    return shuffleArray(products);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const handleProductClick = useCallback((product: any, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);

    // Find and set the category based on the selected product
    for (const category of Menu) {
      for (const item of category.items) {
        for (const subItem of item.subItems) {
          if (subItem.products.includes(product)) {
            setSelectedCategory(item);
            return;
          }
        }
      }
    }
    // If no category is found, default to the first item
    setSelectedCategory(Menu[0].items[0]);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (emblaApi && canScrollNext) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, canScrollNext]);

  const handlePreviousSlide = useCallback(() => {
    if (emblaApi && canScrollPrev) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, canScrollPrev]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    const currentIndex = emblaApi.selectedScrollSnap();
    setCurrentIndex(currentIndex);
    setSelectedProduct(allProducts[currentIndex]);

    // Update the selected category based on the currently selected product
    for (const category of Menu) {
      for (const item of category.items) {
        for (const subItem of item.subItems) {
          if (subItem.products.includes(allProducts[currentIndex])) {
            setSelectedCategory(item);
            return;
          }
        }
      }
    }
  }, [emblaApi, allProducts]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  const link = convertNameToLink(selectedProduct.name);
  const categoryLink = convertNameToLink(selectedCategory.name);

  return (
    <section className="w-full">
      <div className="lg:hidden sm:block text-center px-4 sm:px-6 my-8">
        <header className="z-[200px]">
          <h1 className="font-bold z-[200px] text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl">
            Starbucks Menu With Prices 2024
          </h1>
          <p className="text-sm z-[200px] sm:text-base">
            Starbucks offers a diverse menu, including espresso, coffee, tea,
            bakery items, breakfast, and lunch options. In addition to their
            specialty coffee drinks, they also provide a selection of snacks and
            baked goods for those seeking a quick bite.
          </p>

          <div>
            <GoyButtonforHeroSection
              id="Menu"
              classname="bg-transparent z-[200px] border-2 text-primary border-primary hover:!text-primary w-full rounded-full text-sm py-2 mt-5"
            >
              View Full Menu
            </GoyButtonforHeroSection>
          </div>
        </header>
        <div className="w-[270px] absolute -left-[13rem] top-[40px] h-[200px] bg-orange-300 rounded-full blur-3xl" />
      </div>
      <MobileHerosection />

      <div className="lg:flex hidden border-b flex-col md:flex-row justify-between items-stretch px-0 overflow-x-hidden">
        <div className="py-[60px] pl-6 pr-[25px] md:pl-[5%] lg:pl-[30px] xl:pl-[40px] bg-[#C0E8A6] lg:flex hidden items-center justify-start">
          <div className="md:max-w-[1100px]  items-start justify-center flex flex-col text-left">
            <span className="font-bold text-4xl lg:text-5xl xl:text-6xl">
              Starbucks Menu With Prices 2024
            </span>
            <p className="mt-4 lg:mt-8 text-sm lg:text-base">
              Starbucks offers a diverse menu, including espresso, coffee, tea,
              bakery items, breakfast, and lunch options. In addition to their
              specialty coffee drinks, they also provide a selection of snacks
              and baked goods for those seeking a quick bite.
            </p>
            <div>
              <GoyButtonforHeroSection
                id="Menu"
                classname="bg-transparent border-4 text-primary border-primary w-full sm:w-[11rem] rounded-full duration-500 transition-all mt-4 lg:mt-8"
              >
                View Full Menu
              </GoyButtonforHeroSection>
            </div>
          </div>
        </div>

        <div className="flex relative overflow-hidden bg-white  w-full  justify-between pl-[94px] py-[40px]">
          <div className="text-center z-50 flex flex-col items-center justify-center gap-3">
            <div className="ml-0 md:mt-0 mt-5 md:ml-6">
              <Link href={`/${link}`}>
                <Image
                  className="rounded-full max-w-[200px] md:max-w-[280px] shadow-glow shadow-primary"
                  src={selectedProduct.image}
                  alt={`${selectedProduct.name} Image`}
                  width={425}
                  height={425}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="mt-2 flex w-full items-center justify-center flex-col">
              <Link href={`/${link}`}>
                <span className="font-bold max-w-xs mb-3 text-xl lg:text-2xl line-clamp-2 h-[60px]">
                  {selectedProduct.name}
                </span>
              </Link>
              <div className="flex flex-col gap-2">
                <Link href={`/${link}`}>
                  <Button className="text-white rounded-full duration-500 transition-all text-sm lg:text-base">
                    View Price & Calories
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex z-50 flex-col items-center justify-center">
            <button
              onClick={handlePreviousSlide}
              className={`mb-2 ${canScrollPrev ? "bg-primary hover:bg-primary/80" : "bg-gray-300"
                } rounded-full`}
              disabled={!canScrollPrev}
            >
              <ArrowRight className="h-6 lg:h-8 text-white w-6 lg:w-8 p-1 lg:p-2 -rotate-90" />
            </button>

            <div
              className="w-full ml-2 lg:ml-7 mt-5 max-w-[240px] lg:max-w-sm overflow-hidden"
              ref={emblaRef}
            >
              <div className="-mt-1 h-[300px] lg:h-[370px]">
                {allProducts.map((product, index) => {
                  let marginLeftClass = "";
                  switch (index % 3) {
                    case 0:
                      marginLeftClass = "pl-[20px] lg:pl-[40px]";
                      break;
                    case 1:
                      marginLeftClass = "pl-[40px] lg:pl-[80px]";
                      break;
                    case 2:
                      marginLeftClass = "";
                      break;
                  }

                  return (
                    <div
                      key={product.link}
                      className={`pt-1 md:basis-1/3 ${marginLeftClass}`}
                    >
                      <button
                        onClick={() => handleProductClick(product, index)}
                        className={`${product === selectedProduct
                          ? "bg-primary text-white"
                          : "bg-white"
                          } w-full text-left text-sm lg:text-xl shadow-lg flex gap-2 lg:gap-3 rounded-r items-center rounded-full px-2 lg:px-4 py-1 lg:py-2`}
                      >
                        <Image
                          className="rounded-full w-10 h-10 lg:w-[100px] lg:h-[100px]"
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <span className="line-clamp-2">{product.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={handleNextSlide}
              className={`mt-4 ${canScrollNext ? "bg-primary hover:bg-primary/80" : "bg-gray-300"
                } rounded-full`}
              disabled={!canScrollNext}
            >
              <ArrowRight className="h-6 lg:h-8 text-white w-6 lg:w-8 p-1 lg:p-2 rotate-90" />
            </button>
          </div>

          <div className="w-[300px] absolute -left-[13rem] bottom-4 h-[300px] bg-orange-300 rounded-full blur-3xl" />
          <div className="w-[300px] absolute -left-[13rem] top-4  h-[100px] bg-orange-300 rounded-full blur-3xl" />
          <div className="w-[400px] absolute right-4 -bottom-32 h-[307px] bg-[#C0E8A6] rounded-full blur-2xl" />
          <div className="w-[300px] absolute -right-[11rem] top-[40px] h-[207px] bg-[#C0E8A6] rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
