import { FirestoreDataConverter, serverTimestamp } from "firebase/firestore";
import { DbBaseDocumentConverted, DbBaseDocumentRaw } from "@src/types/db/base";

export const getBaseConverter = <TPayload>(): FirestoreDataConverter<
  DbBaseDocumentConverted<TPayload>,
  DbBaseDocumentRaw<TPayload>
> => ({
  fromFirestore: (snapshot) => {
    const rawData = snapshot.data();

    return {
      ...rawData,
      id: snapshot.id,
      createdAt: rawData.createdAt.toDate(),
      updatedAt: rawData.updatedAt.toDate(),
    } as DbBaseDocumentConverted<TPayload>;
  },
  toFirestore(data) {
    return {
      ...data,
      createdAt: data.createdAt || serverTimestamp(),
      updatedAt: serverTimestamp(),
    } as DbBaseDocumentRaw<TPayload>;
  },
});
