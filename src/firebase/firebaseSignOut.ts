import { getFirebaseApp } from "@src/firebase/getFirebaseApp";
import { getAuth, signOut } from "firebase/auth";

export const firebaseSignOut = async () => {
  console.log("Signing out from firebase");

  const firebaseApp = getFirebaseApp();
  const auth = getAuth(firebaseApp);

  return signOut(auth);
};
