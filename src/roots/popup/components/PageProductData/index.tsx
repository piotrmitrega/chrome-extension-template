import React from "react";
import { usePageProductSelectorsState } from "@src/roots/popup/state/pageProductSelectors";
import { PageProductSelectorMissing } from "@src/roots/popup/components/PageProductSelectorMissing";
import { PageProductSelectedData } from "@src/roots/popup/components/PageProductSelectedData";

export const PageProductData = (): JSX.Element | null => {
  const selectors = usePageProductSelectorsState((state) => state.selectors);
  const isLoading = usePageProductSelectorsState((state) => state.isLoading);

  if (isLoading) {
    return null;
  }

  console.log(selectors);

  if (!selectors) {
    return <PageProductSelectorMissing />;
  }

  return <PageProductSelectedData />;
};
