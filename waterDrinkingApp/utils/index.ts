import { setAsyncStorageItem } from 'setup/asyncStorage';

export const saveToStorage = async (key: string, value: unknown) => {
  await setAsyncStorageItem(key, value);
};
