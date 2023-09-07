import { classNames } from "@/shared/utils/classnames";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Button from "./Button";

const IconButton = forwardRef<
  ElementRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>(function IconButton({ children, className, ...props }, ref) {
  return (
    <Button
      ref={ref}
      {...props}
      className={classNames(className, "p-0")}
      variant={"link"}
    >
      {children}
    </Button>
  );
});

export default IconButton;
