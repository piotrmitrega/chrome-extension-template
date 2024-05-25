import { FirestoreDataConverter, serverTimestamp } from "firebase/firestore";
import { DbBaseDocumentConverted, DbBaseDocumentRaw } from "@src/types/db/base";

export const getBaseConverter = <TPayload>(): FirestoreDataConverter<TPayload> => ({
  fromFirestore: (snapshot) => {
    const rawData = snapshot.data() as DbBaseDocumentRaw<TPayload>;

    return {
      ...rawData,
      createdAt: rawData.createdAt.toDate(),
      updatedAt: rawData.updatedAt.toDate(),
    } as DbBaseDocumentConverted<TPayload>;
  },
  toFirestore(data: DbBaseDocumentConverted<TPayload>) {
    return {
      ...data,
      createdAt: data.createdAt || serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
  },
});
