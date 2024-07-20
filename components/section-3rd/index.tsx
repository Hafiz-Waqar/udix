import React from "react";
import { Button } from "../shared/button";
import { section3rdData } from "./data";

export const Section3rd = () => {
  return (
    <div className="mx-5 my-[100px] h-auto min-h-[500px] bg-[url(/images/background-section.png)] bg-cover bg-center sm:mx-0 sm:px-0">
      <div className="flex h-auto min-h-[500px] items-center bg-black/[0.46] py-12">
        <div className="mx-auto flex w-full max-w-[1007px] flex-col gap-24 md:gap-[100px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {section3rdData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <h3 className="flex items-center gap-3 text-4xl font-extrabold text-white md:text-5xl lg:text-[64px]">
                  <span>{item.title}</span>
                  <span>{item.helpingText}</span>
                </h3>
                <p className="text-center text-xs font-medium text-white sm:text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Button
            title="Sign up now!"
            variant="primary"
            className="mx-auto !font-normal"
          />
        </div>
      </div>
    </div>
  );
};
