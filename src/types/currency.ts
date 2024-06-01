import { CurrencyCode } from "@src/consts/currency";

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  name: string;
};
