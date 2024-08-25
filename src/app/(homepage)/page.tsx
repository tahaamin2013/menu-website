"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Category, Item, SubItem, Product } from "@/lib/menuItems";
import {
  Search,
  X,
  Menu as MenuIcon,
  ChevronLeft,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import ProductLayout from "@/src/components/StarbucksProduct/ProductLayout";

const MenuPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Drinks");
  const [activeItem, setActiveItem] = useState<string>("");
  const [activeSubItem, setActiveSubItem] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<
    "categories" | "items" | "subitems"
  >("categories");

  useEffect(() => {
    filterProducts(activeCategory);
  }, []);

  const filterProducts = (category: string) => {
    const categoryData = Menu.find((item) => item.category === category);
    if (categoryData && categoryData.items.length > 0) {
      setActiveItem(categoryData.items[0].name);
      if (categoryData.items[0].subItems.length > 0) {
        setActiveSubItem(categoryData.items[0].subItems[0].category);
        setFilteredProducts(categoryData.items[0].subItems[0].products);
      } else {
        setActiveSubItem("");
        setFilteredProducts([]);
      }
    } else {
      setActiveItem("");
      setActiveSubItem("");
      setFilteredProducts([]);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    const filtered = Menu.flatMap((category) =>
      category.items.flatMap((item) =>
        item.subItems.flatMap((subItem) =>
          subItem.products.filter((product) =>
            product.name.toLowerCase().includes(lowercaseQuery)
          )
        )
      )
    );
    setFilteredProducts(filtered);
  };


  
  const MobileMenu = () => {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    return (
      <div className="md:hidden bg-white min-h-screen text-green-800">
        <div className="sticky top-0 z-10 bg-green-700 shadow-lg">
          <div className="flex justify-between items-center p-4">
            <motion.h1
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Starbucks Menu
            </motion.h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 px-4 py-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-green-800 placeholder-green-500 text-sm"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchQuery ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                >
                  <X size={16} />
                </motion.button>
              ) : (
                <Search
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                />
              )}
            </div>
          </div>

          <motion.div
            className="flex justify-between px-4 py-3 overflow-x-auto whitespace-nowrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["Drinks", "Foods", "At Home Coffee", "Merchandise"].map((tab) => (
              <motion.button
                key={tab}
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  activeCategory === tab
                    ? "bg-white text-green-700"
                    : "bg-green-600 text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(tab);
                  filterProducts(tab);
                }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="pt-4">
          {Menu.find((c) => c.category === activeCategory)?.items.map(
            (item, index) => (
              <motion.div
                key={item.name}
                className="mb-4 mx-4 bg-green-100 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
              <motion.button
                  className="sticky top-[120px] w-full p-4 text-left text-lg font-medium text-green-800 flex justify-between items-center bg-green-100"
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.name ? null : item.name
                    )
                  }
                >
                  {item.name}
                  <motion.div
                    animate={{ rotate: expandedItem === item.name ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronLeft size={20} />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {expandedItem === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.category}
                          className="p-4 border-t border-green-200"
                        >
                          <h3 className="font-medium text-green-700 mb-3">
                            {subItem.category}
                          </h3>
                          {subItem.products.map((product) => (
                            <motion.div
                              key={product.name}
                              className="bg-green-50 pt-5 px-5 rounded-lg shadow-md mb-4"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ProductLayout subItem={product} />
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Navigation */}
      <div className="hidden md:block bg-white shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="lg:w-64 w-0" />
          {/* Category Tabs */}
          <nav className="container mx-auto px-4 py-3 overflow-x-auto whitespace-nowrap border-b border-gray-200">
            <div className="flex justify-center space-x-3">
              {Menu.map((category) => (
                <motion.button
                  key={category.category}
                  className={`px-4 py-2 rounded-t-lg text-sm font-bold transition-colors duration-200 ${
                    activeCategory === category.category
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(category.category);
                    filterProducts(category.category);
                  }}
                >
                  {category.category}
                </motion.button>
              ))}
            </div>
          </nav>
          <div className="relative lg:w-64 w-fit">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery ? (
              <X
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => handleSearch("")}
              />
            ) : (
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            )}
          </div>
        </div>

        {/* Item Tabs */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-2 border-b border-green-200"
            >
              <div className="container mx-auto px-4 overflow-x-auto py-2 whitespace-nowrap">
                <div className="flex space-x-2">
                  {Menu.find((c) => c.category === activeCategory)?.items.map(
                    (item) => (
                      <motion.button
                        key={item.name}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          activeItem === item.name
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveItem(item.name);
                          if (item.subItems.length > 0) {
                            setActiveSubItem(item.subItems[0].category);
                            setFilteredProducts(item.subItems[0].products);
                          }
                        }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sub-Item Tabs */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-2"
            >
              <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
                <div className="flex space-x-2">
                  {Menu.find((c) => c.category === activeCategory)
                    ?.items.find((i) => i.name === activeItem)
                    ?.subItems.map((subItem) => (
                      <motion.button
                        key={subItem.category}
                        className={`px-3 py-1 text-xs font-medium transition-colors duration-200 border-b-2 ${
                          activeSubItem === subItem.category
                            ? "border-green-500 text-green-700"
                            : "border-transparent text-gray-600 hover:border-gray-300"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveSubItem(subItem.category);
                          setFilteredProducts(subItem.products);
                        }}
                      >
                        {subItem.category}
                      </motion.button>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Product Grid */}
      <div className="sm:block hidden container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductLayout subItem={product} delay={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
