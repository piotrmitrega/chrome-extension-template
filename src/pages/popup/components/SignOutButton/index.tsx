import React from "react";
import { useSignOut } from "@pages/popup/hooks/useSignOut";

export const SignOutButton = (): JSX.Element => {
  const signOut = useSignOut();

  return <button onClick={signOut}>Sign out</button>;
};
