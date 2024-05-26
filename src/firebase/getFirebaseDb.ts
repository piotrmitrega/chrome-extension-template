import { getFirebaseApp } from "@src/firebase/getFirebaseApp";
import { getFirestore } from "@firebase/firestore";

export const getFirebaseDb = () => {
  const firebaseApp = getFirebaseApp();
  return getFirestore(firebaseApp);
};
