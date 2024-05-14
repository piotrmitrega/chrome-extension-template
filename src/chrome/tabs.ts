export const getActiveTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) {
    throw new Error("Could not get active chrome tab");
  }

  return tab;
};
