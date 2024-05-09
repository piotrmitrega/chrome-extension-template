import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";

export const firebaseGoogleSignIn = async (googleToken: string) => {
  const credential = GoogleAuthProvider.credential(null, googleToken);
  const auth = getFirebaseAuth();

  return signInWithCredential(auth, credential);
};
