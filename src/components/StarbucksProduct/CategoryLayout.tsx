"use client";

import Image from "next/image";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CategoryLayout = ({ item, delay, key }: any) => {
  return (
    <Link
      href={item.link}
      aria-label={`Starbucks ${item.name}`}
      key={key}
      className="w-fit"
    >
      <div className="flex flex-row items-center gap-5">
        <Image
          loading="lazy"
          src={item.image}
          alt={`Starbucks ${item.name} Image`}
          width={120}
          height={120}
          className="rounded-full"
        />
        <h3 className="text-xl w-full">{item.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryLayout;
