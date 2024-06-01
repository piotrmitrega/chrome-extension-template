import { extractPriceAndCurrency } from "../extractPriceAndCurrency";

describe("extractPriceAndCurrency", () => {
  it.each([
    ["$ 100", { price: 100, currency: "$" }],
    ["$100", { price: 100, currency: "$" }],
    ["EUR 100", { price: 100, currency: "EUR" }],
    ["100$", { price: 100, currency: "$" }],
    ["100 USD", { price: 100, currency: "USD" }],
    ["100", { price: 100, currency: undefined }],
    ["$ 100.50", { price: 100.5, currency: "$" }],
    ["100.50$", { price: 100.5, currency: "$" }],
    ["100.50", { price: 100.5, currency: undefined }],
  ])('should extract price and currency from "%s"', (input, expected) => {
    expect(extractPriceAndCurrency(input)).toEqual(expected);
  });

  it.each([["abc"], ["$abc"]])('should throw an error for invalid input "%s"', (input) => {
    expect(() => extractPriceAndCurrency(input)).toThrow("Invalid input format");
  });
});
