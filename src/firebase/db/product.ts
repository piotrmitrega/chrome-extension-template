import { getFirebaseDb } from "@src/firebase/getFirebaseDb";
import { getDocs, collection, addDoc, getDoc, doc } from "@firebase/firestore";
import { getBaseConverter } from "@src/firebase/db/base";
import { DbProductData, DbProductDocument } from "@src/types/db/product";
import { setDoc } from "firebase/firestore";
import { DbBaseDocumentRaw } from "@src/types/db/base";

const getCollection = (uid: string) => {
  return collection(getFirebaseDb(), "productsByUser", `${uid}`, "products").withConverter(
    getBaseConverter<DbProductData>(),
  );
};

export const getUserProducts = async (uid: string) => {
  const productsCollectionRef = getCollection(uid);
  const querySnapshot = await getDocs(productsCollectionRef);
  return querySnapshot.docs.map((doc) => doc.data());
};

export const saveUserProduct = async (
  uid: string,
  productData: DbProductData,
): Promise<DbProductDocument> => {
  const productsCollectionRef = getCollection(uid);

  try {
    const docRef = await addDoc<DbProductData, DbBaseDocumentRaw<DbProductData>>(
      productsCollectionRef,
      productData,
    );
    console.log("Document written with ID: ", docRef.id, docRef);

    return {
      ...productData,
      id: docRef.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const updateUserProduct = async (uid: string, productData: DbProductData) => {
  const productDocRef = doc(
    getFirebaseDb(),
    "productsByUser",
    `${uid}`,
    "products",
    "productId",
  ).withConverter(getBaseConverter<DbProductDocument>());

  try {
    await setDoc(productDocRef, productData, { merge: true });
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};
