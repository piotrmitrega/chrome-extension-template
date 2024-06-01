import { DbProductData, DbProductDocument } from "@src/types/db/product";
import { PageProductData } from "@src/types/pageProductData";
import { extractPriceAndCurrency } from "@src/utils/extractPriceAndCurrency";
import { ALL_CURRENCIES, CURRENCY_BY_CODE, CurrencyCode } from "@src/consts/currency";
import { ProductUnitType } from "@src/consts/productUnits";

export const convertPageProductToDocumentData = (
  input: PageProductData,
  url: string,
): DbProductData => {
  const { imageUrl, price: rawPrice, title, unit } = input;

  const currencyCode = CurrencyCode.PLN;
  console.log("Just using PLN for now");

  const { price, currency } = extractPriceAndCurrency(rawPrice);
  // if (currency) {
  //
  // const matchingCurrency = ALL_CURRENCIES.find((c) => {
  //   return c.code === currency || c.symbol === currency;
  // });
  //
  // if (matchingCurrency) {
  //   console.log("Found matching currency", matchingCurrency, currency);
  //   currencyCode = matchingCurrency.code;
  // } else {
  //   console.error(
  //     "Could not match currency based on extracted value from page data. Falling back to default",
  //     currency,
  //   );
  // }
  // }

  console.log("TODO: Unit parsing", unit);

  return {
    imageUrl,
    price,
    title,
    unit: ProductUnitType.PIECE,
    currency: currencyCode,
    url,
  };
};
