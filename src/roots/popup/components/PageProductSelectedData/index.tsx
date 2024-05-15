import React from "react";
import { useGetPageProductData } from "@src/roots/popup/hooks/useGetPageProductData";
import { PageProductDataFailedToFetch } from "@src/roots/popup/components/PageProductDataFailedToFetch";

export const PageProductSelectedData = (): JSX.Element => {
  const { isLoading, hasFailed, pageProductData } = useGetPageProductData();

  if (isLoading) {
    return (
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        Loading...
      </div>
    );
  }

  if (hasFailed) {
    return <PageProductDataFailedToFetch />;
  }

  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <p>Title: {pageProductData?.title}</p>
      <p>Price: {pageProductData?.price}</p>
      <p>Unit: {pageProductData?.unit}</p>
    </div>
  );
};
