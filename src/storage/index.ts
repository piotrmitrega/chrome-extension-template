import { User } from "@src/types/user";

export type StorageData = {
  user?: User;
};

export const getStorageItem = async <TKey extends keyof StorageData>(
  key: TKey,
): Promise<StorageData[TKey]> => {
  const cache = (await chrome.storage.sync.get(key)) as Pick<StorageData, TKey>;

  return cache[key];
};

export const setStorageItem = async <TKey extends keyof StorageData>(
  key: TKey,
  value: StorageData[TKey],
): Promise<void> => {
  console.log("Setting storage item", key, value);
  await chrome.storage.sync.set({ key: value });
};
