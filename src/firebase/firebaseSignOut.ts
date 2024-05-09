import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";

export const firebaseSignOut = async () => {
  console.log("Signing out from firebase");

  const auth = getFirebaseAuth();

  return signOut(auth);
};
