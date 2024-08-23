"use client";

import React, { useState } from "react";

const Goy = ({ id, children, classname }: any) => {
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
    <button className={classname} onClick={(e) => handleButtonClick(e, `${id}`)}>{children}</button>
  );
};

export default Goy;
