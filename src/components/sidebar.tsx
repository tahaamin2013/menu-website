import Link from "next/link";
import React from "react";
import { Menu } from "@/lib/menuItems";

const Sidebar = () => {
  return (
    <div className="hidden lg:block pr-[56px]">
      <div className="flex flex-col gap-3 text-sm mt-2 text-zinc-700">
        {Menu.map((category: any,index) => (
          <>
            <span key={index} className="font-bold mt-4 text-xl capitalize">
              {category.category}
            </span>
            {category.items &&
              category.items.length > 0 &&
              category.items.map((item: any, idx: any) => (
                <Link
                key={idx}
                  href={`/${item.link}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
          </>
        ))}
             </div>
    </div>
  );
};

export default Sidebar;