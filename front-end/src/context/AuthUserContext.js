import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/localStorageHook";

const AuthUserContext = createContext();

export function useAuth() {
  return useContext(AuthUserContext);
}

export function AuthUserContextProvider({ children }) {
  const [localStorageValue, setStorageValue, removeStorageValue] =
    useLocalStorage("user", null);

  const value = {
    localStorageValue,
    setStorageValue,
    removeStorageValue,
  };

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
}
