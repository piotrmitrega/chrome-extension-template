import { useUserStore } from "@src/roots/popup/state/user";

export const useRouteProtection = () => {
  const user = useUserStore((state) => state.user);

  return () => {
    if (!user) {
      console.warn("Unauthorized");
    }

    return Boolean(user);
  };
};
