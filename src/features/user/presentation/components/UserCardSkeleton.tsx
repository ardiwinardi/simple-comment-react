import Skeleton from "@/shared/components/atoms/Skeleton";

export default function UserCardSkeleton() {
  return (
    <div className="flex flex-col w-full relative">
      <Skeleton className="h-32 w-full rounded-t-md rounded-b-none" />

      <div className="-mt-8 mx-3 space-y-2">
        <Skeleton className="h-14 w-14" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-32" />
      </div>
    </div>
  );
}
