import { classNames } from "@/shared/utils/classnames";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ElementRef, forwardRef } from "react";

const button = cva(
  [
    "px-3 py-0.5 rounded-full font-bold disabled:opacity-50 transition-all duration-150 enabled:active:scale-95",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-600 enabled:active:bg-blue-700 text-gray-50",
        secondary: "bg-gray-500 enabled:active:bg-gray-600 text-white",
        link: "bg-transparent text-gray-600",
      },
      size: {
        xs: ["text-xs"],
        sm: ["text-sm"],
        md: ["text-base"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const Button = forwardRef<ElementRef<"button">, ButtonProps>(function Button(
  { type, className, variant, size, ...props },
  ref
) {
  return (
    <button
      type={type}
      className={classNames(button({ variant, size, className }))}
      {...props}
      ref={ref}
    />
  );
});

export default Button;
