import React from "react";
import { Button } from "../shared/button";

export const Section1st = () => {
  return (
    <div className="mx-auto mt-[65px] flex w-full max-w-[856px] flex-col items-center gap-5 p-4 sm:mt-20 sm:p-6 md:gap-10 lg:mt-[100px]">
      <h2 className="text-shadow text-center text-[36px] font-bold capitalize leading-normal tracking-tighter text-black sm:text-[40px] md:text-[48px] lg:text-[56px]">
        Get It Together And Manage Projects the Right Way.
      </h2>
      <p className="text-theme-black font-raleway max-w-[600px] text-center text-sm leading-5 tracking-[0.72px] sm:text-[16px] sm:leading-6 lg:text-[18px] lg:leading-7">
        udix is the world’s first smart workspace. We bring all your team’s
        content together while letting you use the tools you love.
      </p>
      <div className="mt-3 flex flex-col items-center gap-6 sm:flex-row">
        <input
          type="text"
          placeholder="Email"
          className="border-theme-border text-theme-black focus:ring-primary-purple h-[50px] w-[300px] rounded border px-4 text-sm focus:border-transparent focus:outline-none focus:ring-2"
        />
        <Button
          title="Subscribe"
          variant="primary"
          className="h-[50px] w-full max-w-[157px] flex-shrink-0 font-medium sm:max-w-[150px]"
        />
      </div>
    </div>
  );
};
