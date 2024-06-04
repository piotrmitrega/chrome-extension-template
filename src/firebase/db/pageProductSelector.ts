import { getFirebaseDb } from "@src/firebase/getFirebaseDb";
import { doc, getDoc } from "@firebase/firestore";
import {
  DbPageProductSelectorsDocument,
  DbPageProductSelectorsDocumentData,
} from "@src/types/db/selectors";
import { getBaseConverter } from "@src/firebase/db/base";
import { setDoc, Timestamp } from "firebase/firestore";
import { DbBaseDocumentConverted } from "@src/types/db/base";
import { ProductSelectors } from "@src/types/selectors";
import { User } from "@firebase/auth";

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
  urlWithoutQuery: string,
  selectors: ProductSelectors,
  user: User,
): Promise<void> => {
  const url = new URL(urlWithoutQuery);

  const documentRef = getDocument(url.hostname).withConverter(
    getBaseConverter<DbPageProductSelectorsDocumentData>(),
  );

  const payload: DbPageProductSelectorsDocumentData = {
    hostname: url.hostname,
    sourceUrl: urlWithoutQuery,
    selectors,
    updatedBy: user.uid,
    createdBy: user.uid,
  };

  const documentValue = await getDoc(documentRef);
  if (documentValue.exists()) {
    const existingDocumentData =
      documentValue.data() as DbBaseDocumentConverted<DbPageProductSelectorsDocument>;

    payload.createdBy = existingDocumentData.createdBy;
  }

  await setDoc(documentRef, payload);
};
