import { Route } from "react-router";
import AdminClubs from "../pages/admin/clubs/AdminClubs";
import Club from "../pages/basic/Club";
import Profile from "../pages/basic/Profile";
import Dashboard from "../pages/layout/Dashboard";
import Events from "../pages/basic/Events";
import Results from "../pages/basic/Results";
import SignIn from "../pages/security/SignIn";
import Register from "../pages/security/Register";
import ProtectedRouteGuard from "./security/ProtectedRouteGuard";
import UnProtectedRouteGuard from "./security/UnProtectedRouteGuard";
import AdminEvents from "../pages/admin/events/AdminEvents";
import AdminSecurity from "../pages/admin/security/AdminSecurity";

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
      key="Clubs"
      path="clubs"
      element={<ProtectedRouteGuard component={<Club />} />}
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
