import { firebaseGoogleSignIn } from "@src/firebase/firebaseGoogleSignIn";
import { firebaseCredentialsToUser } from "@src/auth/firebaseCredentialsToUser";
import { setStorageItem } from "@src/storage";
import { User } from "@src/types/user";

export const authenticateFromCache = async (): Promise<User | null> => {
  console.log("Trying to authenticate from cache");

  const { token } = await chrome.identity.getAuthToken({ interactive: false });
  if (chrome.runtime.lastError || !token) {
    console.warn("Could not get google token from cache", chrome.runtime.lastError);
    return null;
  }

  try {
    const firebaseUserCredential = await firebaseGoogleSignIn(token);
    const user = firebaseCredentialsToUser(firebaseUserCredential);

    console.log("Successfully authenticated from cache", user);

    await setStorageItem("user", user);

    return user;
  } catch (error) {
    console.error("Could not sign in to firebase from cache", error);
    return null;
  }
};
