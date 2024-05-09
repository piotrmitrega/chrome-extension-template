import { signIn } from "@src/auth/signIn";
import { useNavigate } from "react-router";
import { RoutePath } from "@src/roots/popup/constants/routePath";

export const useSignIn = () => {
  const navigate = useNavigate();

  return async () => {
    const user = await signIn();

    if (user) {
      navigate(RoutePath.Home);
    }
  };
};
