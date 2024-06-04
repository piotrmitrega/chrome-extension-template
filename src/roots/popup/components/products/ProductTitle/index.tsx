import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ProductTitleProps = HTMLAttributes<HTMLParagraphElement>;

export const ProductTitle = ({
  className,
  children,
  ...restProps
}: ProductTitleProps): JSX.Element => {
  return (
    <p className={cn("text-sm font-medium leading-none", className)} {...restProps}>
      {children}
    </p>
  );
};
