import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ProductUnitType } from "@src/consts/productUnits";
import { CurrencyCode } from "@src/consts/currency";

export type ProductTitleProps = Omit<HTMLAttributes<HTMLParagraphElement>, "children"> & {
  price: number;
  currency: CurrencyCode;
  unit: ProductUnitType;
};

export const ProductPrice = ({
  className,
  price,
  currency,
  unit,
  ...restProps
}: ProductTitleProps): JSX.Element => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...restProps}>
      {price}
      {currency} / {unit}
    </p>
  );
};
