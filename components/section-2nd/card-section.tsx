import React from "react";
import { CardDataType } from "./card-data";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  item: CardDataType;
  selectedCard: boolean;
  setSelectedCard: (value: string) => void;
  key: number;
}

export const CardSection: React.FC<Props> = ({
  item,
  selectedCard,
  setSelectedCard,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-full flex-col gap-5 p-4 transition-colors duration-[600ms] ease-in-out md:gap-10 md:p-[30px] lg:max-w-[310px]",
        selectedCard
          ? "bg-primary-purple"
          : "border border-primary-purple bg-transparent",
      )}
    >
      <item.icon
        className={clsx(selectedCard ? "fill-white" : "fill-primary-purple")}
      />
      <h3
        className={clsx(
          "text-[22px] font-extrabold md:text-[24px]",
          selectedCard ? "text-white" : "text-theme-black",
        )}
      >
        {item.name}
      </h3>
      <p
        className={clsx(
          "text-[14px] md:text-[16px]",
          selectedCard ? "text-white" : "text-theme-black/70",
        )}
      >
        {item.description}
      </p>
      <FaArrowRight
        onClick={() => setSelectedCard(item.value)}
        className={clsx(
          "cursor-pointer",
          selectedCard ? "text-white" : "text-primary-purple",
        )}
      />
    </div>
  );
};
