"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Product } from "@/lib/menuItems";
import {
  Search,
  X,
  Menu as MenuIcon,
  ChevronLeft,
  ArrowLeft,
} from "lucide-react";
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
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleAccordion = (itemName: string) => {
    if (expandedItem === itemName) {
      // If closing, first set expanded to null to close the accordion
      setExpandedItem(null);
      // Then scroll to the item's position after a short delay
      setTimeout(() => {
        itemRefs.current[itemName]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setExpandedItem(itemName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const TabletMenu = () => {
    return (
      <div className="bg-white min-h-screen text-green-800">
        <div className="flex">
          <div className="w-1/3 p-4 border-r border-green-200">
            {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
              <motion.button
                key={item.name}
                className={`w-full p-3 text-left text-lg font-medium mb-2 rounded-lg ${activeItem === item.name
                  ? "bg-green-100 text-green-800"
                  : "text-green-700 hover:bg-green-50"
                  }`}
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
            ))}
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-800">{activeItem}</h2>
            <div className="">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductLayout subItem={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="sm:hidden bg-white min-h-screen text-green-800">
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
                className={`text-sm font-medium px-3 py-1 rounded-full ${activeCategory === tab
                  ? "bg-white text-black"
                  : "bg-[#0B652F] mr-2 text-white"
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
                className="mb-4 bg-green-100 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={(el) => (itemRefs.current[item.name] = el)}
              >
                <motion.button
                  className="sticky top-[140px] w-full p-4 text-left text-lg font-medium text-green-800 flex justify-between items-center bg-green-100"
                  onClick={() => toggleAccordion(item.name)}
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
                          className="py-4 border-t border-green-200"
                        >
                          <h3 className="font-medium text-green-700 mb-3">
                            {subItem.category}
                          </h3>
                          {subItem.products.map((product) => (
                            <motion.div
                              key={product.name}
                              className="bg-green-50 pt-5 rounded-lg shadow-md mb-4"
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
    <div id="Menu">
      {/* Desktop Navigation */}
      <div className="hidden sm:block bg-white shadow-md sticky top-0 z-10">
        <div className="flex xl:flex-col flex-row justify-between items-center">
          {/* Category Tabs */}
          <nav className="px-4 py-3 overflow-x-auto whitespace-nowrap border-b border-gray-200">
            <div className="flex justify-center space-x-3">
              {Menu.map((category) => (
                <motion.button
                  key={category.category}
                  className={`px-4 py-2 rounded-t-lg text-sm font-bold transition-colors duration-200 ${activeCategory === category.category
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
          <div className="relative lg:w-[38rem] w-fit">
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
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${activeItem === item.name
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
                        className={`px-3 py-1 text-xs font-medium transition-colors duration-200 border-b-2 ${activeSubItem === subItem.category
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

      {/* Tablet Navigation */}
      <div className="hidden md:block lg:hidden">
        <TabletMenu />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Product Grid */}
      <div className="lg:block hidden container mx-auto px-4 py-8">
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


// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, X, Coffee, Utensils, ShoppingBag, Home } from "lucide-react";
// import Image from "next/image";
// import { Menu, Product } from "@/lib/menuItems";
// import ProductLayout from "@/src/components/StarbucksProduct/ProductLayout";

// const MenuPage: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [activeCategory, setActiveCategory] = useState<string>("Drinks");
//   const [activeItem, setActiveItem] = useState<string>("");
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [isSubcategoryPanelOpen, setIsSubcategoryPanelOpen] = useState<boolean>(false);

//   useEffect(() => {
//     filterProducts(activeCategory);
//     setDefaultItemForCategory(activeCategory);
//   }, [activeCategory]);

//   const filterProducts = (category: string) => {
//     const categoryData = Menu.find((item) => item.category === category);
//     if (categoryData) {
//       setFilteredProducts(
//         categoryData.items.flatMap((item) => item.subItems.flatMap((subItem) => subItem.products))
//       );
//     } else {
//       setFilteredProducts([]);
//     }
//   };

//   const setDefaultItemForCategory = (category: string) => {
//     const categoryData = Menu.find((item) => item.category === category);
//     if (categoryData && categoryData.items.length > 0) {
//       const defaultItem = categoryData.items[0].name;
//       setActiveItem(defaultItem);
//     } else {
//       setActiveItem(""); // No items found, clear the activeItem
//     }
//   };

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     // Implement search logic here
//   };

//   const getCategoryIcon = (category: string) => {
//     switch (category) {
//       case "Drinks":
//         return <Coffee />;
//       case "Food":
//         return <Utensils />;
//       case "At Home Coffee":
//         return <Home />;
//       case "Merchandise":
//         return <ShoppingBag />;
//       default:
//         return <Coffee />;
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen pb-16 md:pb-0">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           <Image src="/starbucks-logo.svg" alt="Starbucks" width={50} height={50} />
//           <div className="relative flex-grow max-w-md mx-4">
//             <input
//               type="text"
//               placeholder="Search menu items..."
//               className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//             />
//             {searchQuery ? (
//               <X
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
//                 onClick={() => handleSearch("")}
//               />
//             ) : (
//               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Desktop Category Navigation */}
//       <nav className="hidden md:block bg-green-700 overflow-x-auto whitespace-nowrap py-2 px-4 sticky top-16 z-40">
//         <div className="flex space-x-2">
//           {Menu.map((category) => (
//             <motion.button
//               key={category.category}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category.category
//                 ? "bg-white text-green-700"
//                 : "bg-green-600 text-white hover:bg-green-500"
//                 }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveCategory(category.category)}
//             >
//               {category.category}
//             </motion.button>
//           ))}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="md:flex">
//           {/* Subcategories (desktop only) */}
//           <div className="hidden md:block w-1/4 pr-4">
//             <h2 className="text-xl font-bold mb-4 text-green-800">{activeCategory}</h2>
//             <ul>
//               {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
//                 <li key={item.name} className="mb-2">
//                   <button
//                     className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem === item.name
//                       ? "bg-green-100 text-green-800"
//                       : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     onClick={() => setActiveItem(item.name)}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Product Grid */}
//           <div className="md:w-3/4">
//             {Menu.find((c) => c.category === activeCategory)?.items
//               .find((item) => item.name === activeItem)
//               ?.subItems.map((subItem) => (
//                 <div key={subItem.category}>
//                   <h3 className="text-xl font-semibold text-green-800 mb-4 mt-8">{subItem.category}</h3>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {subItem.products.map((product, index) => (
//                       <motion.div
//                         key={product.name}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                       >
//                         <ProductLayout subItem={product} delay={index} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//       </main>

//       {/* Mobile Bottom Tab Navigation */}
//       <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
//         <div className="flex justify-around">
//           {Menu.map((category) => (
//             <button
//               key={category.category}
//               className={`flex flex-col items-center justify-center py-2 px-4 ${activeCategory === category.category ? "text-green-700" : "text-gray-500"
//                 }`}
//               onClick={() => {
//                 setActiveCategory(category.category);
//                 setIsSubcategoryPanelOpen(true);
//               }}
//             >
//               {getCategoryIcon(category.category)}
//               <span className="text-xs mt-1">{category.category}</span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile Subcategory Panel */}
//       <AnimatePresence>
//         {isSubcategoryPanelOpen && (
//           <motion.div
//             className="fixed inset-0 bg-white z-50 md:hidden"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ type: "tween" }}
//           >
//             <div className="flex flex-col h-full">
//               <div className="flex justify-between items-center p-4 border-b border-gray-200">
//                 <h2 className="text-2xl font-bold text-green-800">{activeCategory}</h2>
//                 <button onClick={() => setIsSubcategoryPanelOpen(false)}>
//                   <X className="text-gray-500" size={24} />
//                 </button>
//               </div>
//               <nav className="flex-grow overflow-y-auto">
//                 {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
//                   <button
//                     key={item.name}
//                     className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200"
//                     onClick={() => {
//                       setActiveItem(item.name);
//                       setIsSubcategoryPanelOpen(false);
//                     }}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MenuPage;
