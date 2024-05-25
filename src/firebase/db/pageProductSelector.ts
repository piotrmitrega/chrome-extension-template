import { getFirebaseDb } from "@src/firebase/getFirebaseDb";
import { doc, getDoc, serverTimestamp } from "@firebase/firestore";
import {
  DbPageProductSelectorsDocument,
  DbPageProductSelectorsDocumentData,
  DbPageProductSelectorsDocumentPayload,
} from "@src/types/db/selectors";
import { DbBaseDocumentConverted, DbBaseDocumentRaw } from "@src/types/db/base";
import { getBaseConverter } from "@src/firebase/db/base";

const getDocument = (hostname: string) => {
  return doc(getFirebaseDb(), "pageProductSelectors", hostname);
};

export const getPageProductSelectorDocument = async (
  hostname: string,
): Promise<DbPageProductSelectorsDocument | null> => {
  const documentRef = getDocument(hostname);
  const documentValue = await getDoc(
    documentRef.withConverter(getBaseConverter<DbPageProductSelectorsDocumentPayload>()),
  );

  if (!documentValue.exists()) {
    return null;
  }

  return documentValue.data() as DbPageProductSelectorsDocument;
};
//
// export const upsertPageProductSelectorDocument = async (
//   payload: DbPageProductSelectorsDocumentPayload
// ): Promise<void> => {
//   const documentRef = getDocument(payload.hostname);
//
//   let documentValue: DbPageProductSelectorsDocument = { ...payload };
//
//   const existingDocumentValue = await getDoc(documentRef);
//   if (!existingDocumentValue.exists()) {
//     documentValue = {
//       ...existingDocumentValue.data() as DbPageProductSelectorsDocument,
//     }
//   }
//
//   documentValue.updatedAt = serverTimestamp()
//
//   await setDoc(documentRef, {
//     ...
//   });
// };
