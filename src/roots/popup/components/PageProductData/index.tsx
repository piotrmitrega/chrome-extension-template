import React from "react";
import { usePageProductSelectors } from "@src/roots/popup/state/hostConfiguration";

export const PageProductData = (): JSX.Element | null => {
  const selectors = usePageProductSelectors((state) => state.selectors);
  const isLoading = usePageProductSelectors((state) => state.isLoading);

  if (isLoading) {
    return null;
  }

  console.log(selectors);

  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      Siema byku. Nie znamy tej strony i musisz wykliknać product data
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Lecimy
      </button>
    </div>
  );
};
