import React from "react";
import { useUserStore } from "@src/roots/popup/state/user";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { getStorageItem } from "@src/storage";
import { useNavigate } from "react-router";

export const StartPage = (): JSX.Element => {
  const navigate = useNavigate();
  const setStateUser = useUserStore((state) => state.setUser);

  useEffectAsync(async () => {
    const cachedUser = await getStorageItem("user");

    if (cachedUser) {
      setStateUser(cachedUser);
      navigate("/home");
    } else {
      navigate("/signIn");
    }
  }, []);

  return <div>Loading...</div>;
};
