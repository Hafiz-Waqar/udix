import React from "react";
import { Logo } from "@/assets/svg";
import { SocialLinks } from "./social-links";
import { HeaderMenu } from "./header-menu";
import { Button } from "../shared/button";

export const Footer = () => {
  return (
    <div className="mt-20 bg-theme-black/[0.03]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="hidden grid-cols-2 px-[30px] sm:grid sm:py-12 lg:py-20 xl:px-0">
          <div className="col-span-1 flex max-w-[400px] flex-col justify-between gap-[30px]">
            <Logo className="fill-primary-purple" />
            <p className="font-raleway text-xs text-theme-black opacity-30">
              udix is a market-leading provider of digital marketing services,
              using proprietary tools and methodologies to generate high-value
              engagement for our customers.
            </p>
          </div>
          <div className="col-span-1 flex flex-col justify-between gap-10">
            <div className="flex flex-col items-end justify-between gap-5 [@media(min-width:1200px)]:flex-row [@media(min-width:1200px)]:items-center [@media(min-width:1200px)]:gap-10">
              <div className="flex gap-10">
                <HeaderMenu />
              </div>
              <div className="flex items-center gap-10">
                <div className="cool-link-purple flex-shrink-0 cursor-pointer text-sm font-semibold uppercase text-primary-purple">
                  Sign In
                </div>
                <Button
                  title="Sign Up"
                  variant="secondary"
                  className="flex flex-shrink-0 uppercase"
                />
              </div>
            </div>
            <div className="flex w-full justify-end">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 px-[30px] py-10 sm:hidden">
          <Logo className="fill-primary-purple" />
          <div className="flex items-center gap-5">
            <HeaderMenu />
          </div>
          <div className="flex items-center gap-10">
            <div className="cool-link-purple flex-shrink-0 cursor-pointer text-sm font-semibold uppercase text-primary-purple">
              Sign In
            </div>
            <Button
              title="Sign Up"
              variant="secondary"
              className="flex flex-shrink-0 uppercase"
            />
          </div>
          <SocialLinks />
          <p className="text-center font-raleway text-xs text-theme-black opacity-30">
            udix is a market-leading provider of digital marketing services,
            using proprietary tools and methodologies to generate high-value
            engagement for our customers.
          </p>
        </div>
      </div>
    </div>
  );
};
