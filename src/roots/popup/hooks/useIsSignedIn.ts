import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { getStorageItem } from "@src/storage";
import { useState } from "react";
import { User } from "@src/types/user";
import { useUserStore } from "@src/roots/popup/state/user";

export const useIsSignedIn = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  const setStateUser = useUserStore((state) => state.setUser);

  useEffectAsync(async () => {
    const cachedUser = await getStorageItem("user");
    setLoading(false);

    if (cachedUser) {
      setUser(cachedUser);
      setStateUser(cachedUser);
    }
  }, []);

  return {
    isLoading,
    user,
  };
};
