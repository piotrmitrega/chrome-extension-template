import { Timestamp } from "firebase/firestore";

export type DbBaseDocumentRaw<TData> = {
  createdAt: Timestamp;
  updatedAt: Timestamp;
} & TData;

export type DbBaseDocumentConverted<TData> = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
} & TData;
