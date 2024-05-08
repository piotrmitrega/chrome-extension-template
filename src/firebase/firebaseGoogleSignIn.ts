import { getFirebaseApp } from "@src/firebase/getFirebaseApp";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export const firebaseGoogleSignIn = async (googleToken: string) => {
  const firebaseApp = getFirebaseApp();
  const credential = GoogleAuthProvider.credential(null, googleToken);
  const auth = getAuth(firebaseApp);

  return signInWithCredential(auth, credential);
};
