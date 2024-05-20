import React from "react";
import { PageProductDataFieldWithSelectors } from "@src/types/pageProductDataWithSelctors";

export type ProductSelectionInputProps = PageProductDataFieldWithSelectors;

export const ProductSelectionInput = ({ selectors, readValue}: ProductSelectionInputProps): JSX.Element => {
  return (
    <input />
  );
};
