import { Currency } from "@src/types/currency";

export enum CurrencyCode {
  AUD = "AUD",
  CAD = "CAD",
  CHF = "CHF",
  CNY = "CNY",
  EUR = "EUR",
  GBP = "GBP",
  JPY = "JPY",
  NZD = "NZD",
  PLN = "PLN",
  SEK = "SEK",
  USD = "USD",
}

export const USD_CURRENCY: Currency = {
  code: CurrencyCode.USD,
  symbol: "$",
  name: "US Dollar",
};

export const EUR_CURRENCY: Currency = {
  code: CurrencyCode.EUR,
  symbol: "€",
  name: "Euro",
};

export const JPY_CURRENCY: Currency = {
  code: CurrencyCode.JPY,
  symbol: "¥",
  name: "Japanese Yen",
};

export const GBP_CURRENCY: Currency = {
  code: CurrencyCode.GBP,
  symbol: "£",
  name: "British Pound",
};

export const AUD_CURRENCY: Currency = {
  code: CurrencyCode.AUD,
  symbol: "A$",
  name: "Australian Dollar",
};

export const CAD_CURRENCY: Currency = {
  code: CurrencyCode.CAD,
  symbol: "C$",
  name: "Canadian Dollar",
};

export const CHF_CURRENCY: Currency = {
  code: CurrencyCode.CHF,
  symbol: "CHF",
  name: "Swiss Franc",
};

export const CNY_CURRENCY: Currency = {
  code: CurrencyCode.CNY,
  symbol: "CN¥",
  name: "Chinese Yuan",
};

export const SEK_CURRENCY: Currency = {
  code: CurrencyCode.SEK,
  symbol: "Skr",
  name: "Swedish Krona",
};

export const NZD_CURRENCY: Currency = {
  code: CurrencyCode.NZD,
  symbol: "NZ$",
  name: "New Zealand Dollar",
};

export const PLN_CURRENCY: Currency = {
  code: CurrencyCode.PLN,
  symbol: "PLN",
  name: "Polish Zloty",
};

export const CURRENCY_BY_CODE: Record<CurrencyCode, Currency> = {
  [CurrencyCode.USD]: USD_CURRENCY,
  [CurrencyCode.EUR]: EUR_CURRENCY,
  [CurrencyCode.JPY]: JPY_CURRENCY,
  [CurrencyCode.GBP]: GBP_CURRENCY,
  [CurrencyCode.AUD]: AUD_CURRENCY,
  [CurrencyCode.CAD]: CAD_CURRENCY,
  [CurrencyCode.CHF]: CHF_CURRENCY,
  [CurrencyCode.CNY]: CNY_CURRENCY,
  [CurrencyCode.SEK]: SEK_CURRENCY,
  [CurrencyCode.NZD]: NZD_CURRENCY,
  [CurrencyCode.PLN]: PLN_CURRENCY,
};

export const ALL_CURRENCIES: Currency[] = [
  USD_CURRENCY,
  EUR_CURRENCY,
  JPY_CURRENCY,
  GBP_CURRENCY,
  AUD_CURRENCY,
  CAD_CURRENCY,
  CHF_CURRENCY,
  CNY_CURRENCY,
  SEK_CURRENCY,
  NZD_CURRENCY,
  PLN_CURRENCY,
];
