"use client";
import useReadingProgress from "@/src/components/Hooks/useReadingProgress";
import React from "react";

const ScrollProgressBar = () => {
  const completion = useReadingProgress();

  return (
    <span
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="transition-all block md:hidden duration-150 fixed z-[9999] bg-primary h-1 w-full sm:top-0 top-0"
    />
  );
};

export default ScrollProgressBar;
