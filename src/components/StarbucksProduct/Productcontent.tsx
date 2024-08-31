"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronsDown } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductContent = ({ subItem, delay }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hasSize = subItem.size;
  const hasSizes = subItem.sizes && subItem.sizes.length > 0;

  // Find the "Tall" size, or default to the first size in the array
  const initialSize = hasSizes
    ? subItem.sizes.find((sizeOption: any) => sizeOption.size === "Tall") ||
    subItem.sizes[0]
    : null;

  const [selectedSize, setSelectedSize] = useState(initialSize);

  return (
    <div className="flex gap-8 flex-col mb-8 md:mb-1 md:flex-row ">
      <div className="flex flex-col mb-6 items-center gap-5">
        <Image
          src={subItem.image}
          loading="lazy"
          decoding="async"
          alt={`Starbucks menu with prices featuring a product`}
          width={220}
          height={2100}
          className="rounded-full h-fit w-[220px] object-cover object-top myshadow-black"
        />
        <div>
          <div className="w-44 flex gap-6 justify-between items-center">
            <div className="h-full gap-1 font-bold flex justify-between flex-col">
              {hasSizes && (
                <>
                  <span>Size:</span>
                  <span className="text-white">.</span>
                </>
              )}
              {(hasSize || subItem.size !== undefined) && <span>Size:</span>}
              {(hasSizes || subItem.calories !== undefined) && (
                <span>Calories:</span>
              )}
              {(hasSizes || subItem.price !== undefined) && <span>Price:</span>}
            </div>
            <div className="flex flex-col gap-1">
              {hasSizes ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="w-fit cursor-pointer outline-none"
                    asChild
                  >
                    <div className="border justify-between w-[110px] flex gap-1 rounded-lg px-3">
                      {selectedSize.size} <ChevronsDown className="w-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-3">
                    <DropdownMenuLabel>Size Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={selectedSize.size}
                      onValueChange={(size) =>
                        setSelectedSize(
                          subItem.sizes.find((s: any) => s.size === size)
                        )
                      }
                    >
                      {subItem.sizes.map((sizeOption: any, index: any) => (
                        <DropdownMenuRadioItem
                          className="cursor-pointer outline-none"
                          key={index}
                          value={sizeOption.size}
                        >
                          {sizeOption.size}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
              {hasSizes && selectedSize ? (
                <>
                  <span>{selectedSize.size2}</span>
                  <p>{selectedSize.calories}</p>
                  <p>{selectedSize.price}</p>
                </>
              ) : (
                <>
                  {subItem.calories !== undefined && <p>{subItem.calories}</p>}
                  {subItem.size !== undefined && <p>{subItem.size}</p>}
                  {subItem.price !== undefined && <p>{subItem.price}</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
