import React from "react";
import Image from "next/image";

export const Section4th = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-col-reverse items-center gap-5 p-6 pb-20 sm:gap-8 md:gap-10 lg:flex-row lg:items-start lg:gap-14 lg:p-0">
      <div className="flex w-full">
        <Image
          src="/images/image-1.png"
          alt="img"
          width={1000}
          height={581}
          className="h-[265px] flex-shrink-0 object-cover object-center lg:h-full lg:w-[490px]"
        />
      </div>
      <div className="flex w-full flex-col gap-5 sm:gap-8 md:gap-10 lg:gap-14">
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
          <h2 className="text-shadow text-[28px] font-bold capitalize leading-normal tracking-tighter text-black md:text-[34px]">
            Creativity & Technology
          </h2>
          <p className="font-raleway text-sm leading-5 tracking-[0.72px] text-theme-black opacity-70 sm:leading-6 md:text-[16px] lg:leading-7">
            Some networks believe that by only offering a basic tracking system
            their affiliates can reach a high level of creativity. We like to
            set the bar a lot higher by offering you cutting-edge tech solutions
            together with a team of creative experts on-call with the tools you
            need based on real-time results
          </p>
        </div>
        <div className="flex w-full flex-col gap-5 sm:gap-6 md:gap-8">
          <h2 className="text-shadow text-[28px] font-bold capitalize leading-normal tracking-tighter text-black md:text-[34px]">
            Defines our true value
          </h2>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <p
                key={item}
                className="flex w-full gap-2 font-raleway text-sm leading-5 tracking-[0.72px] text-theme-black opacity-70 sm:leading-6 md:text-[16px] lg:leading-7"
              >
                <span className="mt-2 flex size-2 flex-shrink-0 rounded-full border-none bg-primary-purple" />
                <span className="w-full">
                  Some networks believe that by only offering a basic tracking
                  system
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
