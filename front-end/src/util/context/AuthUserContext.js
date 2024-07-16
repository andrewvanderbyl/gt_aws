import { createContext, useContext } from "react";
import { useSessionStorage } from "../hooks/sessionStorageHook";

const AuthUserContext = createContext();

export function useAuth() {
  return useContext(AuthUserContext);
}

export function AuthUserContextProvider({ children }) {
  const [sessionStorageValue, setStorageValue, removeStorageValue] =
    useSessionStorage(null);

  const value = {
    sessionStorageValue,
    setStorageValue,
    removeStorageValue,
  };

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
}
