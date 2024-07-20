"use client";
import React, { useState } from "react";
import { CardSection } from "./card-section";
import { cardData } from "./card-data";

export const Section2nd = () => {
  const [selectedCard, setSelectedCard] = useState<string>("web");
  return (
    <div className="mx-auto mt-[65px] flex w-full max-w-[1080px] flex-col items-center gap-5 p-4 sm:mt-20 sm:p-6 md:gap-10 lg:mt-[100px]">
      <h2 className="text-shadow text-center text-[28px] font-bold capitalize leading-normal tracking-tighter text-black md:text-[34px]">
        Solutions that will change your business forever
      </h2>
      <p className="max-w-[970px] text-center font-raleway text-sm leading-5 tracking-[0.72px] text-theme-black sm:leading-6 md:text-[16px] lg:leading-7">
        Some networks believe that by only offering a basic tracking system
        their affiliates can reach a high level of creativity. We like to set
        the bar a lot higher by offering you cutting-edge tech solutions
        together with a team of creative experts.
      </p>
      <div className="grid w-full grid-cols-1 justify-between gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item, index) => (
          <CardSection
            key={index}
            item={item}
            selectedCard={selectedCard === item.value}
            setSelectedCard={setSelectedCard}
          />
        ))}
      </div>
    </div>
  );
};
