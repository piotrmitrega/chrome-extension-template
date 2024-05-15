import React from "react";
import { usePageProductSelectors } from "@src/roots/popup/state/pageProductSelectors";
import { PageProductSelectorMissing } from "@src/roots/popup/components/PageProductSelectorMissing";
import { PageProductSelectedData } from "@src/roots/popup/components/PageProductSelectedData";

export const PageProductData = (): JSX.Element | null => {
  const selectors = usePageProductSelectors((state) => state.selectors);
  const isLoading = usePageProductSelectors((state) => state.isLoading);

  if (isLoading) {
    return null;
  }

  console.log(selectors);

  if (!selectors) {
    return <PageProductSelectorMissing />;
  }

  return <PageProductSelectedData />;
};
