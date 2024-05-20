import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type FullscreenBlurProps = HTMLAttributes<HTMLDivElement>;

export const FullscreenBlur = ({ className, ...restProps }: FullscreenBlurProps): JSX.Element => {
  return (
    <div
      className={cn("absolute inset-0 backdrop-blur pointer-events-auto", className)}
      {...restProps}
    />
  );
};
