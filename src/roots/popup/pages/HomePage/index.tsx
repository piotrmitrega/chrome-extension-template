import React from "react";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";
import { SignOutButton } from "@src/roots/popup/components/SignOutButton";

export const HomePage = (): JSX.Element => {
  const user = useCurrentUser();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3">
      Signed in as {user?.displayName}
      <SignOutButton />
    </div>
  );
};
