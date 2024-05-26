import React from "react";
import { PageProductDataFieldSelectors } from "@src/types/pageProductDataWithSelectors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CrosshairIcon } from "lucide-react";
import { CheckCheckIcon } from "lucide-react";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { PageProductData } from "@src/types/pageProductData";

export type ProductSelectionInputProps = Partial<PageProductDataFieldSelectors> & {
  selectorKey: keyof PageProductData;
  optional?: boolean
};

export const ProductDataSelectionInput = ({
  selectorKey,
  selector,
  readValue,
  optional = false,
}: ProductSelectionInputProps): JSX.Element => {
  const setActiveSelector = useUiMode((state) => state.setActiveSelector);

  const isSelected = selector && readValue;

  const onClick = () => {
    setActiveSelector(selectorKey);
  };

  return (
    <div>
      <Label htmlFor={selectorKey}>{selectorKey}</Label>

      <div className="flex flex-row space-x-2 content-center">
        <Input
          id={selectorKey}
          placeholder={`${selectorKey} of the product`}
          value={readValue}
          onFocus={onClick}
        />
        {!isSelected && <CrosshairIcon />}
        {isSelected && <CheckCheckIcon className="accent-green-500" />}
      </div>
    </div>
  );
};
