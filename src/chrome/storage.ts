export const getStorageItem = async <TValue>(key: string): Promise<TValue | undefined> => {
  const cache = await chrome.storage.sync.get(key);

  console.log("Getting storage item", key, cache[key]);

  return cache[key];
};

export const setStorageItem = async <TValue>(key: string, value: TValue): Promise<void> => {
  console.log("Setting storage item", key, value);

  await chrome.storage.sync.set({ key: value });
};
