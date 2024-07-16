import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export const useSessionStorage = () => {
  const [sessionStorageValue, setSessionStorageValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem("token");

      if (value) {
        return value;
      }
      // } else {
      //   window.sessionStorage.setItem("token", null);
      //   return null;
      // }
    } catch (err) {
      return null;
    }
  });

  const setStorageValue = (newValue) => {
    try {
      window.sessionStorage.setItem("token", newValue);
    } catch (err) {
      console.log(err);
    }
    setSessionStorageValue(newValue);
  };

  const getUserRole = () => {
    if (!sessionStorageValue) {
      return null;
    }
    const tokenDecoded = jwtDecode(sessionStorageValue);
    const currentTime = Date.now() / 1000;
    if (tokenDecoded.exp < currentTime) {
      //token expired
      return null;
    } else {
      return tokenDecoded.roles;
    }
  };

  const removeStorageValue = () => {
    window.sessionStorage.removeItem("token");
    setSessionStorageValue(null);
  };

  return {
    sessionStorageValue,
    setStorageValue,
    removeStorageValue,
    getUserRole,
  };
};
