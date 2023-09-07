"use client";

import Skeleton from "@/shared/components/atoms/Skeleton";
import { useId } from "react";

type Props = {
  count?: number;
};
export default function CommentItemSkeleton({ count = 3 }: Props) {
  const key = useId();
  return Array(count)
    .fill(0)
    .map((item, index) => (
      <div className="flex gap-2" key={`${key}${index}`}>
        <Skeleton className="h-10 w-10" />
        <div className="flex-1">
          <Skeleton className="h-20 rounded-md rounded-tl-none bg-gray-100" />
        </div>
      </div>
    ));
}
