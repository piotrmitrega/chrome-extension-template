import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";

export const useCurrentUser = () => {
  const user = getFirebaseAuth().currentUser;

  if (!user) {
    throw new Error("Use this hook in signed in context");
  }

  return user;
};
