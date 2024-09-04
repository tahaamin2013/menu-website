import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronLeft } from "react-feather";
import { Menu, Product, Item, SubItem, Category } from '@/lib/menuItems'; // Adjust the import path if necessary
import ProductLayout from "@/src/components/StarbucksProduct/ProductLayout";

const MobileMenus = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeCategory, setActiveCategory] = useState<string>("Drinks");
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [filteredProducts, setFilteredProducts] = useState<Item[]>(
        Menu.find((c) => c.category === "Drinks")?.items || []
    );

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const lowercasedQuery = query.toLowerCase();

        const categoryItems = Menu.find((c) => c.category === activeCategory)?.items || [];
        const results = categoryItems.filter(item =>
            item.name.toLowerCase().includes(lowercasedQuery) ||
            item.subItems.some(subItem =>
                subItem.products.some(product =>
                    product.name.toLowerCase().includes(lowercasedQuery)
                )
            )
        );

        setFilteredProducts(results);
    };

    const toggleAccordion = (itemName: string) => {
        setExpandedItem(expandedItem === itemName ? null : itemName);
    };

    const filterProducts = (category: string) => {
        const categoryItems = Menu.find((c) => c.category === category)?.items || [];
        setFilteredProducts(categoryItems);
    };

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
                {filteredProducts.map((item, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default MobileMenus;
