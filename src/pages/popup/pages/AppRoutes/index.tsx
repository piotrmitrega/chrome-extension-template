import React from "react";
import { MemoryRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/popup/pages/HomePage";
import { SignInPage } from "@pages/popup/pages/SignInPage";
import { StartPage } from "@pages/popup/pages/StartPage";
import { useRouteProtection } from "@pages/popup/hooks/useRouteProtection";

export const AppRoutes = (): JSX.Element => {
  const routeProtection = useRouteProtection();

  return (
    <MemoryRouter>
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<SignInPage />} path="/signIn" />
        <Route element={<HomePage />} loader={routeProtection} path="/home" />
      </Routes>
    </MemoryRouter>
  );
};
