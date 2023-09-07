import { classNames } from "@/shared/utils/classnames";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const avatar = cva(["rounded-full bg-slate-300"], {
  variants: {
    size: {
      sm: ["w-8 h-8"],
      md: ["w-10 h-10"],
      lg: ["w-14 h-14"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarProps = HTMLAttributes<HTMLImageElement> &
  VariantProps<typeof avatar> & {
    src: string;
    isOnline?: boolean;
  };

export default function Avatar({
  size,
  isOnline,
  className,
  ...props
}: AvatarProps) {
  return (
    <div className="relative">
      <img className={classNames(avatar({ size, className }))} {...props} />
      {isOnline && (
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      )}
    </div>
  );
}
