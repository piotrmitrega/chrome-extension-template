import { ProductSelectors } from "@src/types/selectors";

function fetchProductData(selectors: ProductSelectors) {
  console.log("Fetching product data...", selectors);

  const getElementByXpath = (xpath: string) => {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
  };

  const {
    price: priceSelector,
    title: titleSelector,
    unit: unitSelector,
    imageUrl: imageSelector,
  } = selectors;

  const price = getElementByXpath(priceSelector.xpath)?.textContent;
  const title = getElementByXpath(titleSelector.xpath)?.textContent;
  const image = (getElementByXpath(imageSelector.xpath) as Element)?.getAttribute("src");
  const unit = unitSelector ? getElementByXpath(unitSelector.xpath)?.textContent : undefined;

  const fetchedData = {
    price,
    title,
    unit,
    image,
  };

  console.log("Fetched product data", fetchedData);

  return fetchedData;
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
