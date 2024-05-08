import { firebaseSignOut } from "@src/firebase/firebaseSignOut";

export const signOut = async () => {
  await firebaseSignOut();
  await chrome.storage.sync.remove("user");
};
