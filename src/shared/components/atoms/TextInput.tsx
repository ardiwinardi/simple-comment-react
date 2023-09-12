import { classNames } from "@/shared/utils/classnames";
import { ElementRef, InputHTMLAttributes, forwardRef } from "react";
import { HiArrowRight } from "react-icons/hi";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<ElementRef<"input">, TextInputProps>(
  function TextInput({ type, className, ...props }, ref) {
    return (
      <div className="relative">
        <input
          type={type}
          className={classNames(
            "px-3 py-2 rounded-full border border-gray-400 w-full focus:outline-gray-400",
            className
          )}
          {...props}
          ref={ref}
        />
        <HiArrowRight
          size={22}
          className="text-gray-400 absolute right-2 top-2.5"
        />
      </div>
    );
  }
);
export default TextInput;
