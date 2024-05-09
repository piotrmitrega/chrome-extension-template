import { firebaseGoogleSignIn } from "@src/firebase/firebaseGoogleSignIn";
import { firebaseCredentialsToUser } from "@src/auth/firebaseCredentialsToUser";
import { User } from "@src/types/user";

export const signIn = async (): Promise<User | null> => {
  console.log("Trying to authenticate from cache");

  const { token } = await chrome.identity.getAuthToken({ interactive: true });
  if (chrome.runtime.lastError || !token) {
    console.warn("Could not get google token", chrome.runtime.lastError);
    return null;
  }

  try {
    const firebaseUserCredential = await firebaseGoogleSignIn(token);
    const user = firebaseCredentialsToUser(firebaseUserCredential);

    console.log("Successfully authenticated", user);

    await chrome.storage.sync.set({ user });

    return user;
  } catch (error) {
    console.error("Could not sign in to firebase", error);
    return null;
  }
};
