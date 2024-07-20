import React, { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CardDataType } from "./card-data";

interface Props {
  item: CardDataType;
}

export const CardSection = forwardRef<HTMLDivElement, Props>(
  ({ item }, ref) => {
    return (
      <div
        ref={ref}
        className="group flex w-full max-w-full cursor-pointer flex-col gap-5 border border-primary-purple bg-transparent p-4 transition-colors duration-[600ms] ease-in-out hover:bg-primary-purple md:gap-10 md:p-[30px] lg:max-w-[310px]"
      >
        <item.icon className="fill-primary-purple group-hover:fill-white" />
        <h3 className="text-[22px] font-extrabold text-theme-black group-hover:text-white md:text-[24px]">
          {item.name}
        </h3>
        <p className="text-[14px] text-theme-black/70 group-hover:text-white md:text-[16px]">
          {item.description}
        </p>
        <FaArrowRight className="cursor-pointer text-primary-purple group-hover:text-white" />
      </div>
    );
  },
);
