"use client";

import Skeleton from "@/shared/components/atoms/Skeleton";

type Props = {
  count?: number;
};
export default function CommentItemSkeleton({ count = 3 }: Props) {
  return Array.from({ length: count }, (_, i) => i).map(item => (
    <div className="flex gap-2" key={item}>
      <Skeleton className="h-10 w-10" />
      <div className="flex-1">
        <Skeleton className="h-20 rounded-md rounded-tl-none bg-gray-100" />
      </div>
    </div>
  ));
}
