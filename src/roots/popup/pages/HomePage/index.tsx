import React from "react";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";
import { SignOutButton } from "@src/roots/popup/components/SignOutButton";
import { PageProductData } from "@src/roots/popup/components/PageProductData";
import { useCheckCurrentPageProductSelectors } from "@src/roots/popup/hooks/useCheckCurrentPageProductSelectors";
import { ProductsList } from "@src/roots/popup/components/ProductsList";

export const HomePage = (): JSX.Element => {
  const user = useCurrentUser();

  useCheckCurrentPageProductSelectors();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-3">
      <PageProductData />

      <div className="mt-2 flex flex-col content-center items-center justify-between">
        <p className="text-lg tracking-tight text-center">
          Signed in as <b>{user?.displayName}</b>
        </p>

        <ProductsList />

        <SignOutButton />
      </div>
    </div>
  );
};
