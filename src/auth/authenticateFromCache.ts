import { firebaseGoogleSignIn } from "@src/firebase/firebaseGoogleSignIn";
import { firebaseCredentialsToUser } from "@src/auth/firebaseCredentialsToUser";

export const authenticateFromCache = async () => {
  console.log("Trying to authenticate from cache");

  const { token } = await chrome.identity.getAuthToken({ interactive: false });
  if (chrome.runtime.lastError || !token) {
    console.warn("Could not get google token from cache", chrome.runtime.lastError);
    return;
  }

  try {
    const firebaseUserCredential = await firebaseGoogleSignIn(token);
    const user = firebaseCredentialsToUser(firebaseUserCredential);

    console.log("Successfully authenticated from cache", user);

    await chrome.storage.sync.set({ user });

    console.log("Saved user in cache");
  } catch (error) {
    console.error("Could not sign in to firebase from cache", error);
  }
};
