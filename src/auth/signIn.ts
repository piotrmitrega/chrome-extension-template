import { firebaseGoogleSignIn } from "@src/firebase/firebaseGoogleSignIn";

export const signIn = async () => {
  console.log("Signing in");

  const { token } = await chrome.identity.getAuthToken({ interactive: true });
  if (chrome.runtime.lastError || !token) {
    console.warn("Could not get google token", chrome.runtime.lastError);
    return null;
  }

  try {
    const firebaseUserCredential = await firebaseGoogleSignIn(token);

    console.log("Successfully authenticated", firebaseUserCredential);
  } catch (error) {
    console.error("Could not sign in to firebase", error);
    return null;
  }
};
