import AsyncStorage from '@react-native-async-storage/async-storage';

const keysToParse: unknown[] = [];

export const setAsyncStorageItem = async (key: string, value: unknown) => {
  const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, parsedValue);
};

export const getAsyncStorageItem = async (key: string) => {
  const value = await AsyncStorage.getItem(key);

  if (value !== null)
    return keysToParse.includes(key) ? JSON.parse(value) : value;

  return null;
};

export const removeAsyncStorageItem = (key: string) => {
  AsyncStorage.removeItem(key);
};
