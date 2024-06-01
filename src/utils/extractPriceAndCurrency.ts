type ExtractPriceAndCurrencyResult = {
  price: number;
  currency?: string;
};

export const extractPriceAndCurrency = (input: string): ExtractPriceAndCurrencyResult => {
  // Regular expression to match digits and decimal point
  const regex = /(\d+(?:\.\d{1,2})?)/;
  const match = input.match(regex);

  if (!match) {
    throw new Error("Invalid input format");
  }

  const price = parseFloat(match[0]);
  // Remove the price part from the input to get the currency
  const currency = input.replace(match[0], "").trim();

  return {
    price,
    currency: currency || undefined,
  };
};
