import React from "react";
import { firebaseSignOut } from "@src/firebase/firebaseSignOut";

export const SignOutButton = (): JSX.Element => {
  return <button onClick={firebaseSignOut}>Sign out</button>;
};
