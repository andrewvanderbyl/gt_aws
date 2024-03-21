import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setStorageValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setLocalStorageValue(newValue);
  };

  const removeStorageValue = () => {
    window.localStorage.removeItem("user");
    setLocalStorageValue(null);
  };

  return [localStorageValue, setStorageValue, removeStorageValue];
};
