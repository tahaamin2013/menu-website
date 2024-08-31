"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Coffee, Utensils, ShoppingBag, Home } from "lucide-react";
import Image from "next/image";
import { Menu, Product } from "@/lib/menuItems";
import ProductLayout from "@/src/components/StarbucksProduct/ProductLayout";

const MenuPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Drinks");
  const [activeItem, setActiveItem] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isSubcategoryPanelOpen, setIsSubcategoryPanelOpen] = useState<boolean>(false);

  useEffect(() => {
    filterProducts(activeCategory);
    setDefaultItemForCategory(activeCategory);
  }, [activeCategory]);

  const filterProducts = (category: string) => {
    const categoryData = Menu.find((item) => item.category === category);
    if (categoryData) {
      setFilteredProducts(
        categoryData.items.flatMap((item) => item.subItems.flatMap((subItem) => subItem.products))
      );
    } else {
      setFilteredProducts([]);
    }
  };

  const setDefaultItemForCategory = (category: string) => {
    const categoryData = Menu.find((item) => item.category === category);
    if (categoryData && categoryData.items.length > 0) {
      const defaultItem = categoryData.items[0].name;
      setActiveItem(defaultItem);
    } else {
      setActiveItem(""); // No items found, clear the activeItem
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Drinks":
        return <Coffee />;
      case "Food":
        return <Utensils />;
      case "At Home Coffee":
        return <Home />;
      case "Merchandise":
        return <ShoppingBag />;
      default:
        return <Coffee />;
    }
  };

  return (
    <div className="bg-white min-h-screen pb-16 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Image src="/starbucks-logo.svg" alt="Starbucks" width={50} height={50} />
          <div className="relative flex-grow max-w-md mx-4">
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
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
      </header>

      {/* Desktop Category Navigation */}
      <nav className="hidden md:block bg-green-700 overflow-x-auto whitespace-nowrap py-2 px-4 sticky top-16 z-40">
        <div className="flex space-x-2">
          {Menu.map((category) => (
            <motion.button
              key={category.category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category.category
                ? "bg-white text-green-700"
                : "bg-green-600 text-white hover:bg-green-500"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="md:flex">
          {/* Subcategories (desktop only) */}
          <div className="hidden md:block w-1/4 pr-4">
            <h2 className="text-xl font-bold mb-4 text-green-800">{activeCategory}</h2>
            <ul>
              {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
                <li key={item.name} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem === item.name
                      ? "bg-green-100 text-green-800"
                      : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4">
            {Menu.find((c) => c.category === activeCategory)?.items
              .find((item) => item.name === activeItem)
              ?.subItems.map((subItem) => (
                <div key={subItem.category}>
                  <h3 className="text-xl font-semibold text-green-800 mb-4 mt-8">{subItem.category}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {subItem.products.map((product, index) => (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ProductLayout subItem={product} delay={index} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around">
          {Menu.map((category) => (
            <button
              key={category.category}
              className={`flex flex-col items-center justify-center py-2 px-4 ${activeCategory === category.category ? "text-green-700" : "text-gray-500"
                }`}
              onClick={() => {
                setActiveCategory(category.category);
                setIsSubcategoryPanelOpen(true);
              }}
            >
              {getCategoryIcon(category.category)}
              <span className="text-xs mt-1">{category.category}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Subcategory Panel */}
      <AnimatePresence>
        {isSubcategoryPanelOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-green-800">{activeCategory}</h2>
                <button onClick={() => setIsSubcategoryPanelOpen(false)}>
                  <X className="text-gray-500" size={24} />
                </button>
              </div>
              <nav className="flex-grow overflow-y-auto">
                {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
                  <button
                    key={item.name}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsSubcategoryPanelOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuPage;
