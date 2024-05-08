import { type UserCredential } from "firebase/auth";
import { User } from "@src/types/user";

export const firebaseCredentialsToUser = (credentials: UserCredential): User => {
  return <User>{
    email: credentials.user.email,
    id: credentials.user.uid,
    photoUrl: credentials.user.photoURL,
    displayName: credentials.user.displayName,
  };
};
