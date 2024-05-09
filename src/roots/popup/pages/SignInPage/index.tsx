import React from "react";
import { useSignIn } from "@src/roots/popup/hooks/useSignIn";

export const SignInPage = (): JSX.Element => {
  const signIn = useSignIn();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3">
      <button onClick={signIn}>Sign in with googiel</button>
    </div>
  );
};
