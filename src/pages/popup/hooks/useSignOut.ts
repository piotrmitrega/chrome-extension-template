import { useUserStore } from "@pages/popup/state/user";
import { signOut } from "@src/auth/signOut";
import { useNavigate } from "react-router";

export const useSignOut = () => {
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();

  return async () => {
    await signOut();
    clearUser();
    navigate("/signIn");
  };
};
