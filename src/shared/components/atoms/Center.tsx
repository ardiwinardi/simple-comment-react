import { PropsWithChildren } from "react";

export default function Center({ children }: PropsWithChildren) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/3">
      {children}
    </div>
  );
}
