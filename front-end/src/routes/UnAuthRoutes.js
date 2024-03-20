import { Route } from "react-router";
import UnAuthGuard from "../guards/UnAuthGuard";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

export const UnAuthRoutes = [
  <Route
    key="Login"
    path="/login"
    element={<UnAuthGuard component={<SignIn />} />}
  />,
  <Route
    key="Register"
    path="/register"
    element={<UnAuthGuard component={<Register />} />}
  />,
];
