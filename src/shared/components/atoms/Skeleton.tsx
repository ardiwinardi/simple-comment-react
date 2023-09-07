import { classNames } from "@/shared/utils/classnames";
import { ClassValue } from "clsx";

type Props = {
  className?: ClassValue;
};
export default function Skeleton({ className }: Props) {
  return (
    <div role="status" className="animate-pulse">
      <div
        className={classNames(
          "h-3 w-full bg-gray-200 rounded-full mb-4",
          className
        )}
      ></div>
    </div>
  );
}
