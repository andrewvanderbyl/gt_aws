import SecurityService from "../../remote/SecurityService";
import UserService from "../../remote/UserService";
import { useSessionStorage } from "./sessionStorageHook";

export const useUser = () => {
  const sessionStorage = useSessionStorage();

  const login = async (username, password) => {
    return await SecurityService.signIn(username, password);
  };

  const logout = () => {
    sessionStorage.removeStorageValue();
  };

  const register = async (createUserPayload) => {
    return await UserService.registerUser(createUserPayload);
  };

  const update = async (updateUserPayload) => {
    return await UserService.updateUser(
      updateUserPayload,
      sessionStorage.sessionStorageValue
    );
  };

  const getUser = async () => {
    return await UserService.getUser(sessionStorage.sessionStorageValue);
  };

  return { login, logout, register, update, getUser };
};
