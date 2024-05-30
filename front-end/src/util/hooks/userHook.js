import UserService from "../../remote/UserService";
import SecurityService from "../../remote/SecurityService";
import { useAuth as useAuthContext } from "../context/AuthUserContext";

export const useUser = () => {
  const authUserContext = useAuthContext();

  const login = async (username, password) => {
    return await SecurityService.signIn(username, password).then((userData) => {
      if (userData.status === 200) {
        authUserContext.setStorageValue(userData.payload);
      }
      return userData;
    });
  };

  const logout = () => {
    authUserContext.removeStorageValue();
  };

  const register = async (createUserPayload) => {
    return await UserService.registerUser(createUserPayload);
  };

  return { login, logout, register };
};
