import React from "react";
import { headerData } from "../header/data";

export const HeaderMenu = () => {
  return headerData.map((item, index) => (
    <a
      key={index}
      href={item.href}
      className="cool-link text-sm font-semibold uppercase text-theme-black"
    >
      {item.name}
    </a>
  ));
};
