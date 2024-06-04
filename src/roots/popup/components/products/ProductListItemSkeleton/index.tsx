import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductListItemSkeleton = (): JSX.Element => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-9 w-9 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-3 w-[200px]" />
      </div>
    </div>
  );
};
