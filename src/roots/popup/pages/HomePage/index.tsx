import React from "react";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";
import { SignOutButton } from "@src/roots/popup/components/SignOutButton";
import { PageProductData } from "@src/roots/popup/components/PageProductData";
import { useCheckCurrentPageProductSelectors } from "@src/roots/popup/hooks/useCheckCurrentPageProductSelectors";

export const HomePage = (): JSX.Element => {
  const user = useCurrentUser();

  useCheckCurrentPageProductSelectors();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-3">
      <PageProductData />
      Signed in as {user?.displayName}
      <SignOutButton />
    </div>
  );
};
