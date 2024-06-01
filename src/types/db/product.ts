import { ProductUnitType } from "@src/consts/productUnits";
import { DbBaseDocumentConverted } from "@src/types/db/base";
import { CurrencyCode } from "@src/consts/currency";

export type DbProductData = {
  currency: CurrencyCode;
  imageUrl: string;
  price: number;
  title: string;
  unit: ProductUnitType;
  url: string;
};

export type DbProductDocument = DbBaseDocumentConverted<DbProductData>;
