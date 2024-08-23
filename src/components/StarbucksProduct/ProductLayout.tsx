"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { Menu } from "@/lib/menuItems";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function convertNameToLink(name: any) {
  return name
    .normalize("NFD") // Normalize to separate base characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase() // Convert to lowercase
    .replace(/&/g, "and") // Replace & with and
    .replace(/[®™,.\s]+/g, "-") // Replace ®, ™, comma, dot, and spaces with hyphen
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

const ProductLayout = ({ subItem, delay }: any) => {
  const hasSize = subItem.size;
  const hasSizes = subItem.sizes && subItem.sizes.length > 0;
  const productName = subItem.name;

  const initialSize = hasSizes
    ? subItem.sizes.find((sizeOption: any) => sizeOption.size === "Tall") ||
      subItem.sizes[0]
    : null;

  const [selectedSize, setSelectedSize] = useState(initialSize);
  const link = convertNameToLink(productName);

  console.log(link);

  // Find the category of the blog
  const findCategory = () => {
    for (let menu of Menu) {
      for (let item of menu.items) {
        for (let subItem of item.subItems) {
          for (let product of subItem.products) {
            if (product.name === productName) {
              return item.name; // Return the item name (sub-category name)
            }
          }
        }
      }
    }
    return "Unknown Category"; // Default if category not found
  };

  const category = findCategory();

  const toUrlFriendly = (name: string) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace("®", "")
      .replace(",", "")
      .replace("&", "and");
  };

  const categoryUrl = toUrlFriendly(category);

  return (
    <div className="flex gap-8 flex-col mb-8 md:mb-1 md:flex-row ">
      <div className="flex flex-row mb-6 items-center gap-5">
        <Link
          href={`//${link}`}
          aria-label={`Starbucks ${productName}`}
        >
          <Image
            src={subItem.image}
            loading="lazy"
            decoding="async"
            alt={`Starbucks menu with prices featuring a ${productName}`}
            width={130}
            height={140}
            className="rounded-full max-w-[140rem] max-h-[130px]"
          />
        </Link>
        <div>
          <Link
            href={`/${link}`}
            aria-label={`Starbucks ${productName}`}
          >
            {" "}
            <h3 className="text-xl mb-1 w-full md:w-[260px]">{productName}</h3>
          </Link>
          <div className="w-44 flex gap-6 justify-between items-center">
            <Link
              href={`/${link}`}
              aria-label={`Starbucks ${productName}`}
            >
              <div className="h-full gap-1 font-bold flex justify-between flex-col">
                {hasSizes && (
                  <>
                    <span>Size:</span>
                    <span className="text-white">.</span>
                  </>
                )}
                {(hasSize || subItem.size !== undefined) && (
                  <span>Weight:</span>
                )}
                {(hasSizes || subItem.calories !== undefined) && (
                  <span>Calories:</span>
                )}
                {(hasSizes || subItem.price !== undefined) && (
                  <span>Price:</span>
                )}
              </div>
            </Link>
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
                <Link
                  href={`/${link}`}
                  aria-label={`Starbucks ${productName}`}
                >
                  <span>{selectedSize.size2}</span>
                  <p>{selectedSize.calories}</p>
                  <p>{selectedSize.price}</p>
                </Link>
              ) : (
                <Link
                  href={`/${link}`}
                  aria-label={`Starbucks ${productName}`}
                >
                  {subItem.calories !== undefined && <p>{subItem.calories}</p>}
                  {subItem.size !== undefined && <p>{subItem.size}</p>}
                  {subItem.price !== undefined && <p>{subItem.price}</p>}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
