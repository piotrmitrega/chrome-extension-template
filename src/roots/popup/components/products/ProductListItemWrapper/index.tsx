import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ProductListItemWrapperProps = HTMLAttributes<HTMLDivElement>;

export const ProductListItemWrapper = ({
  className,
  ...restProps
}: ProductListItemWrapperProps): JSX.Element => {
  return <div className={cn("flex items-center", className)} {...restProps} />;
};
