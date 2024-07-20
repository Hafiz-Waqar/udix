import clsx from "clsx";
import React from "react";
import { MdClose } from "react-icons/md";
import { headerData } from "./data";
import { Button } from "../shared/button";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  selectedHeader: string;
  setSelectedHeader: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar: React.FC<Props> = ({
  onClose,
  isOpen,
  selectedHeader,
  setSelectedHeader,
}) => {
  return (
    <div
      className={clsx(
        "fixed right-0 top-0 z-[100] flex min-h-[100dvh] w-[60%] flex-col gap-10 bg-[#141414]/[70%] px-2 py-5 shadow backdrop-blur-lg duration-[600ms] sm:w-[40%] sm:px-4 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="flex w-full justify-end">
        <div
          onClick={onClose}
          className="flex size-9 cursor-pointer items-center justify-center rounded-md bg-black/20 p-2"
        >
          <MdClose className="text-lg text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        {headerData.map((item, index) => (
          <a
            key={index}
            onClick={() => setSelectedHeader(item.name.toLowerCase())}
            href={item.href}
            className={clsx(
              "border-theme-border border-b p-3 text-sm font-semibold uppercase text-white transition-colors duration-[600ms] ease-in-out first:border-t",
              selectedHeader === item.name.toLowerCase()
                ? "bg-primary-purple"
                : "bg-transparent",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex w-full items-center gap-3 sm:hidden">
        <Button
          title="Sign In"
          variant="secondary"
          className="w-full uppercase"
        />
        <Button
          title="Sign Up"
          variant="primary"
          className="w-full uppercase"
        />
      </div>
    </div>
  );
};
