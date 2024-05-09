import { getFirebaseApp } from "@src/firebase/getFirebaseApp";
import { getAuth } from "firebase/auth";

export const getFirebaseAuth = () => {
  const firebaseApp = getFirebaseApp();
  return getAuth(firebaseApp);
};
