import React, { useEffect, useState } from "react";
import { useRouteProtection } from "@src/roots/popup/hooks/useRouteProtection";
import { MemoryRouter, Route, Routes } from "react-router";
import { SignInPage } from "@src/roots/popup/pages/SignInPage";
import { HomePage } from "@src/roots/popup/pages/HomePage";
import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { ProtectedRoutes } from "@src/roots/popup/components/ProtectedRoutes";
import { RoutePath } from "@src/roots/popup/constants/routePath";

export default function PopupApp(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string>(RoutePath.Home);

  useEffectAsync(async () => {
    const auth = getFirebaseAuth();
    await auth.authStateReady();

    setLoading(false);
    setInitialRoute(auth.currentUser ? RoutePath.Home : RoutePath.SignIn);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route element={<SignInPage />} path="/signIn" />
      </Routes>
      <ProtectedRoutes>
        <Route element={<HomePage />} path="/" />
      </ProtectedRoutes>
    </MemoryRouter>
  );
}
