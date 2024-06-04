import { Route } from "react-router";
import AdminSecurity from "../pages/admin/security/AdminSecurity";
import AdminClubs from "../pages/basic/AdminClubs";
import AdminEvents from "../pages/basic/AdminEvents";
import Asa from "../pages/basic/Asa";
import Events from "../pages/basic/Events";
import Profile from "../pages/basic/Profile";
import Results from "../pages/basic/Results";
import Tags from "../pages/basic/Tags";
import Dashboard from "../pages/layout/Dashboard";
import Register from "../pages/security/Register";
import SignIn from "../pages/security/SignIn";
import ProtectedRouteGuard from "./security/ProtectedRouteGuard";
import UnProtectedRouteGuard from "./security/UnProtectedRouteGuard";

export const AppRoutes = [
  // Protected Routes
  <Route
    key="Welcome"
    path="/"
    element={<ProtectedRouteGuard component={<Dashboard />} />}
  >
    <Route
      key="Profile"
      path="profile"
      element={<ProtectedRouteGuard component={<Profile />} />}
    />
    <Route
      key="Results"
      path="results"
      element={<ProtectedRouteGuard component={<Results />} />}
    />
    <Route
      key="Events"
      path="events"
      element={<ProtectedRouteGuard component={<Events />} />}
    />
    <Route
      key="Asas"
      path="asa"
      element={<ProtectedRouteGuard component={<Asa />} />}
    />
    <Route
      key="TimingChip"
      path="tags"
      element={<ProtectedRouteGuard component={<Tags />} />}
    />
    <Route key="Clubs" path="admin/">
      <Route
        key="Clubs"
        path="clubs"
        element={<ProtectedRouteGuard component={<AdminClubs />} />}
      />
      <Route
        key="AdminEvents"
        path="events"
        element={<ProtectedRouteGuard component={<AdminEvents />} />}
      />
      <Route
        key="Security"
        path="security"
        element={<ProtectedRouteGuard component={<AdminSecurity />} />}
      />
    </Route>
  </Route>,

  // Unprotected Routes
  <Route
    key="Login"
    path="/login"
    element={<UnProtectedRouteGuard component={<SignIn />} />}
  />,
  <Route
    key="Register"
    path="/register"
    element={<UnProtectedRouteGuard component={<Register />} />}
  />,
];
