function getPageHtml() {
  return document.documentElement.outerHTML;
}

export const getTabHtmlContent = async (tabId: number): Promise<string> => {
  const injectionResults = await chrome.scripting.executeScript({
    target: { tabId },
    func: getPageHtml,
  });

  return injectionResults[0].result;
};
