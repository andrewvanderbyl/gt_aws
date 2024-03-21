import { SignIn } from "../../remote/SecurityService";
import { useAuth as useAuthContext } from "../context/AuthUserContext";

export const useUser = () => {
  const authUserContext = useAuthContext();

  const login = async (username, password) => {
    await SignIn(username, password).then((userData) => {
      authUserContext.setStorageValue(userData);
    });
  };

  const logout = () => {
    authUserContext.removeStorageValue();
  };

  return { login, logout };
};
