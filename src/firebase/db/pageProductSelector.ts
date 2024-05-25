import { getFirebaseDb } from "@src/firebase/getFirebaseDb";
import { doc, getDoc } from "@firebase/firestore";
import {
  DbPageProductSelectorsDocument,
  DbPageProductSelectorsDocumentData,
} from "@src/types/db/selectors";
import { getBaseConverter } from "@src/firebase/db/base";
import { setDoc } from "firebase/firestore";

const getDocument = (hostname: string) => {
  return doc(getFirebaseDb(), "pageProductSelectors", hostname);
};

export const getPageProductSelectorDocument = async (
  hostname: string,
): Promise<DbPageProductSelectorsDocument | null> => {
  const documentRef =
    getDocument(hostname).withConverter(getBaseConverter<DbPageProductSelectorsDocumentData>());
  const documentValue = await getDoc(documentRef);

  if (!documentValue.exists()) {
    return null;
  }

  return documentValue.data() as DbPageProductSelectorsDocument;
};

export const upsertPageProductSelectorDocument = async (
  payload: DbPageProductSelectorsDocumentData,
): Promise<void> => {
  const documentRef = getDocument(payload.hostname).withConverter(
    getBaseConverter<DbPageProductSelectorsDocumentData>(),
  );

  await setDoc(documentRef, payload);
};
