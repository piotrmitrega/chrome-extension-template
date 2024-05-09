import React from "react";
import { Routes, RoutesProps, useNavigate } from "react-router";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";

export type ProtectedRoutesProps = RoutesProps;

export const ProtectedRoutes = (props: ProtectedRoutesProps): JSX.Element => {
  const navigate = useNavigate();

  useEffectAsync(async () => {
    const auth = getFirebaseAuth();

    auth.onAuthStateChanged((changedUser) => {
      console.log("Auth state changed", changedUser);

      navigate(changedUser ? "/" : "/signIn");
    });
  }, []);

  return <Routes {...props} />;
};
