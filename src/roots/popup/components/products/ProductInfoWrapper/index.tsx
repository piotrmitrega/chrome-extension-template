import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ProductInfoWrapperProps = HTMLAttributes<HTMLDivElement>;

export const ProductInfoWrapper = ({
  className,
  ...restProps
}: ProductInfoWrapperProps): JSX.Element => {
  return <div className={cn("ml-4 space-y-0.5", className)} {...restProps} />;
};
