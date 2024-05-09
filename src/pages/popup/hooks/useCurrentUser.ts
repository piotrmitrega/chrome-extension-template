import { useUserStore } from "@pages/popup/state/user";

export const useCurrentUser = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    throw new Error("Use this hook in signed in context");
  }

  return user;
};
