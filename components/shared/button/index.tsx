import React from "react";
import cn from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        className && className,
        "border-primary-purple relative border px-4 py-2 text-sm font-semibold transition-colors duration-[600ms] ease-in-out",
        variant === "primary" &&
          "bg-primary-purple hover:text-primary-purple text-white hover:bg-white",
        variant === "secondary" &&
          "text-primary-purple hover:bg-primary-purple bg-white hover:text-white",
        props.disabled && "cursor-not-allowed opacity-50",
      )}
      {...props}
      disabled={props.disabled}
    >
      <span>{title}</span>
    </button>
  );
};
