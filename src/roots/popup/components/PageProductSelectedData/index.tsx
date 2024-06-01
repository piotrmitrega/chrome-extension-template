import React from "react";
import { useGetPageProductData } from "@src/roots/popup/hooks/useGetPageProductData";
import { PageProductDataFailedToFetch } from "@src/roots/popup/components/PageProductDataFailedToFetch";
import { usePageProductData } from "@src/roots/popup/state/pageProductData";
import { Alert, AlertDescription, AlertTitle } from "../../../../../@/components/ui/alert";
import { AspectRatio } from "../../../../../@/components/ui/aspect-ratio";
import { ImageOff } from "lucide-react";

export const PageProductSelectedData = (): JSX.Element => {
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
      {data?.imageUrl ? (
        <AspectRatio ratio={1}>
          <img src={data.imageUrl} />
        </AspectRatio>
      ) : (
        <ImageOff className="h-4 w-4" />
      )}

      <AlertTitle>{data?.title}</AlertTitle>
      <AlertDescription>
        {data?.price}${data?.currency} / {data?.unit}
      </AlertDescription>
    </Alert>
  );
};
