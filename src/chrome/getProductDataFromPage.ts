import { ProductSelectors } from "@src/types/selectors";

function fetchProductData(selectors: ProductSelectors) {
  console.log("Fetching product data...", selectors);

  const getElementByXpath = (xpath: string) => {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
  };

  const { price: priceSelector, title: titleSelector, unit: unitSelector } = selectors;

  const price = getElementByXpath(priceSelector.xpath)?.textContent;
  const title = getElementByXpath(titleSelector.xpath)?.textContent;
  const unit = getElementByXpath(unitSelector.xpath)?.textContent;

  return {
    price,
    title,
    unit,
  };
}

export const getProductDataFromPage = async (
  tabId: number,
  selectors: ProductSelectors,
): Promise<string> => {
  const injectionResults = await chrome.scripting.executeScript({
    target: { tabId },
    func: fetchProductData,
    args: [selectors],
  });

  return JSON.stringify(injectionResults[0].result);
};
