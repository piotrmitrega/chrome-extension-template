import { useProductsState } from "@src/roots/popup/state/products";
import { ProductListItemWrapper } from "@src/roots/popup/components/products/ProductListItemWrapper";
import { ProductAvatar } from "@src/roots/popup/components/products/ProductAvatar";
import { ProductInfoWrapper } from "@src/roots/popup/components/products/ProductInfoWrapper";
import { ProductTitle } from "@src/roots/popup/components/products/ProductTitle";
import { ProductPrice } from "@src/roots/popup/components/products/ProductPrice";
import React from "react";
import { ProductListItemSkeleton } from "@src/roots/popup/components/products/ProductListItemSkeleton";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";

export const ProductsList = () => {
  const currentUser = useCurrentUser();

  const products = useProductsState((state) => state.products);
  const isLoading = useProductsState((state) => state.isLoading);
  const hasFailed = useProductsState((state) => state.hasFailed);
  const fetchProducts = useProductsState((state) => state.fetchProducts);

  useEffectAsync(async () => {
    await fetchProducts(currentUser.uid);
  }, [currentUser.uid]);

  if (hasFailed) {
    return <div>Failed to load products</div>;
  }

  return (
    <div>
      <h2 className="mt-2 mb-2">Your products:</h2>

      <div className="flex flex-col gap-4">
        {isLoading && !products.length && (
          <>
            <ProductListItemSkeleton />
            <ProductListItemSkeleton />
            <ProductListItemSkeleton />
            <ProductListItemSkeleton />
            <ProductListItemSkeleton />
          </>
        )}

        {products.map((product) => (
          <ProductListItemWrapper key={product.id}>
            <ProductAvatar src={product.imageUrl} />

            <ProductInfoWrapper>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice currency={product.currency} price={product.price} unit={product.unit} />
            </ProductInfoWrapper>
          </ProductListItemWrapper>
        ))}
      </div>
    </div>
  );
};
