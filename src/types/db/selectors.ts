import { ProductSelectors } from "@src/types/selectors";
import { DbBaseDocumentConverted } from "@src/types/db/base";

export type DbPageProductSelectorsDocumentData = {
  createdBy: string;
  hostname: string;
  selectors: ProductSelectors;
  sourceUrl: string;
  updatedBy: string;
};

export type DbPageProductSelectorsDocument =
  DbBaseDocumentConverted<DbPageProductSelectorsDocumentData>;
