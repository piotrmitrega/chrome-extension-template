import React from "react";
import { PageProductDataFieldWithSelectors } from "@src/types/pageProductDataWithSelctors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CrosshairIcon } from "lucide-react";
import { CheckCheckIcon } from "lucide-react";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { PageProductData } from "@src/types/pageProductData";

export type ProductSelectionInputProps = Partial<PageProductDataFieldWithSelectors> & {
  selectorKey: keyof PageProductData;
};

export const ProductDataSelectionInput = ({
  selectorKey,
  selectors,
  readValue,
}: ProductSelectionInputProps): JSX.Element => {
  const setActiveSelector = useUiMode((state) => state.setActiveSelector);

  const isSelected = selectors && readValue;

  const onClick = () => {
    setActiveSelector(selectorKey);
  };

  return (
    <div>
      <Label htmlFor={selectorKey}>{selectorKey}</Label>

      <div className="flex flex-row space-x-2 content-center">
        <Input id={selectorKey} placeholder={`${selectorKey} of the product`} onFocus={onClick} />
        {!isSelected && <CrosshairIcon />}
        {isSelected && <CheckCheckIcon className="accent-green-500" />}
      </div>
    </div>
  );
};
