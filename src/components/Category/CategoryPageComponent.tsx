"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "@/lib/menuItems";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import { Slash, Search, X } from "lucide-react";
import CategoryLayout from "@/src/components/StarbucksProduct/CategoryLayout";
import { Input } from "../ui/input";
import ProductLayout from "../StarbucksProduct/ProductLayout";
import { Skeleton } from "@/src/components/ui/skeleton";

const CategoryPageComponent: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMenu, setFilteredMenu] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const updatedMenu = Menu.map((category) => ({
      ...category,
      totalItems: calculateTotalItems(category),
    }));
    setFilteredMenu(updatedMenu);
    setLoading(false);
  }, []);

  const calculateTotalItems = (category: any) => {
    let totalItems = category.items.length;

    category.items.forEach((item: any) => {
      if (item.subItems) {
        item.subItems.forEach((subItem: any) => {
          totalItems += subItem.products.length;
        });
      }
    });

    return totalItems;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      const updatedMenu = Menu.map((category) => ({
        ...category,
        totalItems: calculateTotalItems(category),
      }));
      setFilteredMenu(updatedMenu);
    } else {
      const filteredItems = Menu.map((category) => {
        if (!category || !category.category) {
          return null;
        }

        const filteredCategoryItems = category.items.filter((item) => {
          if (!item || !item.name) {
            return false;
          }
          return item.name.toLowerCase().includes(query);
        });

        const filteredSubItems = category.items.reduce(
          (acc: any, curr: any) => {
            if (curr.subItems) {
              const filteredSubItems = curr.subItems.reduce(
                (subAcc: any, subItem: any) => {
                  if (!subItem || !subItem.products) {
                    return subAcc;
                  }
                  const filteredItems = subItem.products.filter(
                    (subSubItem: any) => {
                      if (!subSubItem || !subSubItem.name) {
                        return false;
                      }
                      return subSubItem.name.toLowerCase().includes(query);
                    }
                  );
                  if (filteredItems.length > 0) {
                    return [...subAcc, { ...subItem, products: filteredItems }];
                  }
                  return subAcc;
                },
                []
              );
              return [...acc, ...filteredSubItems];
            }
            return acc;
          },
          []
        );

        if (filteredCategoryItems.length > 0 || filteredSubItems.length > 0) {
          return {
            ...category,
            items: filteredCategoryItems,
            subItems: filteredSubItems,
            totalItems:
              filteredCategoryItems.length +
              filteredSubItems.reduce(
                (acc: any, subItem: any) => acc + subItem.products.length,
                0
              ),
          };
        }

        return null;
      }).filter((category) => category !== null);

      setFilteredMenu(filteredItems);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    const updatedMenu = Menu.map((category) => ({
      ...category,
      totalItems: calculateTotalItems(category),
    }));
    setFilteredMenu(updatedMenu);
  };

  const hotCoffeesCategory = Menu.find((category) =>
    category.items.some((item) => item.name === name)
  );

  if (!hotCoffeesCategory) {
    return <div>No {name} category found</div>;
  }

  const hotCoffees = hotCoffeesCategory.items.find(
    (item) => item.name === name
  );

  const totalProducts =
    hotCoffees?.subItems.reduce(
      (acc, subItem) => acc + subItem.products.length,
      0
    ) || 0;

  return (
    <div className='w-full'>
      {loading ? (
        <div>
          <Skeleton className="h-6 mb-2 md:mt-2 w-[120px] rounded-lg" />
          <div className="flex justify-between pb-3 items-center border-b mb-3 flex-col md:flex-row">
            <Skeleton className="h-6 mb-2 md:mt-2 w-[120px] rounded-xl" />
            <Skeleton className="h-8 w-[200px] rounded-xl" />
          </div>
        </div>
      ) : (
        <>
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Menu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`${link}`}>{name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex justify-between items-center border-b mb-3 flex-col md:flex-row">
            <h4 className="font-bold text-2xl mb-2">{name}</h4>
            <div className="mb-5 relative">
              <Input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="pr-10 outline-none"
              />
              {searchQuery.length > 0 ? (
                <button
                  aria-label="Close search text"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 outline-none focus:outline-none text-gray-500 hover:text-gray-700"
                >
                  <X size={26} />
                </button>
              ) : (
                <Search
                  size={21}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              )}
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-12">
        {loading ? (
          <>
            <Skeleton className="h-6 w-full rounded-xl" />
            <div className="space-y-4 grid grid-cols-1 md:mt-3 mt-[50px] md:grid-cols-2 gap-[20px]">
              {Array.from({ length: totalProducts }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Skeleton className="h-[100px] w-[104px] rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[170px]" />
                    <Skeleton className="h-4 w-[80px] mb-4" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-0 w-[0px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : searchQuery === "" ? (
          <>
            {hotCoffees?.subItems.map((subItem, index) => (
              <div key={index} className="flex flex-col">
                {subItem.category === name ? null : (
                  <h3 className="font-semibold text-2xl border-b pb-1 mb-5">
                    {subItem.category} ({subItem.products.length})
                  </h3>
                )}
                <div className="w-full block sm:grid grid-cols-1 md:grid-cols-2 gap-7">
                  {subItem.products.map((product, prodIndex) => (
                    <ProductLayout key={prodIndex} subItem={product} />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {filteredMenu.length === 0 ? (
              <p className="text-xl text-center mb-[400px]">
                No results found.
              </p>
            ) : (
              filteredMenu.map((category: any) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold mt-6 mb-3">
                    {category.category} ({category.totalItems})
                  </h2>
                  <div className="grid grid-cols-1 border-t md:grid-cols-2 gap-x-[50px] w-full bg-blue pt-6 gap-y-[50px]">
                    {category.items &&
                      category.items.length > 0 &&
                      category.items.map((item: any, idx: any) => (
                        <CategoryLayout
                          key={idx}
                          item={item}
                          delay={idx * 0.1}
                        />
                      ))}
                    {category.subItems &&
                      category.subItems.length > 0 &&
                      category.subItems.map((subItem: any, subIdx: any) => (
                        <div key={subIdx} className="grid-cols-1">
                          <h3 className="text-xl font-bold mt-4 mb-2">
                            {subItem.category} ({subItem.products.length})
                          </h3>
                          {subItem.products.map(
                            (product: any, prodIdx: any) => (
                              <ProductLayout
                                key={prodIdx}
                                subItem={product}
                                delay={prodIdx * 0.1}
                              />
                            )
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryPageComponent;
