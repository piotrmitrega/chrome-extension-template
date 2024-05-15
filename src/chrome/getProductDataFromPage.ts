import { ProductSelectors } from "@src/types/selectors";
import { getElementByXpath } from "@src/utils/getElementByXpath";

function fetchProductData(selectors: ProductSelectors) {
  const { price: priceSelector, title: titleSelector, unit: unitSelector } = selectors;

  const price = getElementByXpath(priceSelector.xPath)?.textContent;
  const title = getElementByXpath(titleSelector.xPath)?.textContent;
  const unit = getElementByXpath(unitSelector.xPath)?.textContent;

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
    func: () => fetchProductData(selectors),
  });

  return JSON.stringify(injectionResults[0].result);
};
