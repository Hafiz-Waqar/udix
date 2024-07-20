"use client";
import { Logo } from "@/assets/svg";
import React, { useState } from "react";
import { headerData } from "./data";
import clsx from "clsx";
import { Button } from "../shared/button";
import { Sidebar } from "./sidebar";

export const Header = () => {
  const [selectedHeader, setSelectedHeader] = useState<string>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between gap-5 p-4 sm:p-6">
      <div className="flex items-center md:gap-20 xl:gap-[120px]">
        <Logo className="fill-theme-black" />
        <div className="hidden gap-5 md:flex">
          {headerData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setSelectedHeader(item.name.toLowerCase())}
              className={clsx(
                "text-sm font-semibold uppercase",
                selectedHeader === item.name.toLowerCase()
                  ? "text-primary-purple cool-link-purple"
                  : "text-theme-black cool-link",
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-primary-purple cool-link-purple cursor-pointer text-sm font-semibold uppercase">
          Sign In
        </div>
        <div className="flex items-center gap-3">
          <Button
            title="Sign Up"
            variant="primary"
            className="hidden uppercase sm:flex"
          />
          <Button
            title="Menu"
            variant="secondary"
            className="flex uppercase md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>

      <Sidebar
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
        selectedHeader={selectedHeader}
        setSelectedHeader={setSelectedHeader}
      />
    </div>
  );
};
