import React, { useState } from "react";
import { useGetPageProductData } from "@src/roots/popup/hooks/useGetPageProductData";
import { PageProductDataFailedToFetch } from "@src/roots/popup/components/PageProductDataFailedToFetch";
import { usePageProductDataState } from "@src/roots/popup/state/pageProductData";
import { Alert } from "@/components/ui/alert";
import { ProductAvatar } from "@src/roots/popup/components/products/ProductAvatar";
import { Button } from "@/components/ui/button";
import { saveUserProduct } from "@src/firebase/db/product";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";
import { ProductTitle } from "@src/roots/popup/components/products/ProductTitle";
import { ProductPrice } from "@src/roots/popup/components/products/ProductPrice";
import { ProductListItemWrapper } from "@src/roots/popup/components/products/ProductListItemWrapper";
import { ProductInfoWrapper } from "@src/roots/popup/components/products/ProductInfoWrapper";
import { useProductsState } from "@src/roots/popup/state/products";

export const PageProductSelectedData = (): JSX.Element | null => {
  useGetPageProductData();

  const [isSaving, setIsSaving] = useState(false);

  const user = useCurrentUser();

  const isLoading = usePageProductDataState((state) => state.isLoading);
  const hasFailed = usePageProductDataState((state) => state.hasFailed);
  const data = usePageProductDataState((state) => state.data);

  const addProduct = useProductsState((state) => state.addProduct);

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

  const onSubmit = async () => {
    try {
      console.log("Submitting");
      setIsSaving(true);
      const savedProduct = await saveUserProduct(user.uid, data);
      addProduct(savedProduct);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Alert>
      <ProductListItemWrapper>
        <ProductAvatar src={data.imageUrl} />

        <ProductInfoWrapper>
          <ProductTitle>{data.title}</ProductTitle>
          <ProductPrice currency={data.currency} price={data.price} unit={data.unit} />
        </ProductInfoWrapper>
      </ProductListItemWrapper>

      <div className="mt-4 flex items-center justify-between gap-4">
        <Button className="flex-1" loading={isSaving} variant="default" onClick={onSubmit}>
          Submit
        </Button>
        <Button className="flex-1" loading={isSaving} variant="outline">
          Cancel
        </Button>
      </div>
    </Alert>
  );
};
