import React from "react";
import { useGetPageProductData } from "@src/roots/popup/hooks/useGetPageProductData";
import { PageProductDataFailedToFetch } from "@src/roots/popup/components/PageProductDataFailedToFetch";
import { usePageProductData } from "@src/roots/popup/state/pageProductData";
import { Alert } from "../../../../../@/components/ui/alert";
import { ProductAvatar } from "@src/roots/popup/components/products/ProductAvatar";
import { Button } from "../../../../../@/components/ui/button";

export const PageProductSelectedData = (): JSX.Element | null => {
  useGetPageProductData();

  const isLoading = usePageProductData((state) => state.isLoading);
  const hasFailed = usePageProductData((state) => state.hasFailed);
  const data = usePageProductData((state) => state.data);

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

  if (!data) {
    return null;
  }

  return (
    <Alert>
      <div className="flex items-center">
        <ProductAvatar src={data.imageUrl} />

        <div className="ml-4 space-y-0.5">
          <p className="text-sm font-medium leading-none">{data.title}</p>
          <p className="text-sm text-muted-foreground">
            {data.price}
            {data.currency} / {data.unit}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <Button className="flex-1" variant="default">
          Submit
        </Button>
        <Button className="flex-1" variant="outline">
          Cancel
        </Button>
      </div>
    </Alert>
  );
};
