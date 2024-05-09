import { signIn } from "@src/auth/signIn";
import { useUserStore } from "@src/roots/popup/state/user";
import { useNavigate } from "react-router";

export const useSignIn = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  return async () => {
    const user = await signIn();

    if (user) {
      setUser(user);
      navigate("/home");
    }
  };
};
