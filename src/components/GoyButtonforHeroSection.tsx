"use client";

import React, { useState } from "react";
import {Button} from '@/src/components/ui/button'

const GoyButtonforHeroSection = ({ id, children, classname }: any) => {
  const [scrollMargin, setScrollMargin] = useState(0);

  const handleButtonClick = (e: any, myelement: string) => {
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);

    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button variant="ghost" className={classname} onClick={(e) => handleButtonClick(e, `${id}`)}>{children}</Button>
  );
};

export default GoyButtonforHeroSection;
