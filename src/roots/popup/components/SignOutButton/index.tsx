import React from "react";
import { firebaseSignOut } from "@src/firebase/firebaseSignOut";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export const SignOutButton = (): JSX.Element => {
  return (
    <Button variant="ghost" onClick={firebaseSignOut}>
      <LogOutIcon />
    </Button>
  );
};
