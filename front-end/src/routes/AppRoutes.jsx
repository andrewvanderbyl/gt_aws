import { Route } from "react-router";
import { lazy } from 'react';
import AdminSecurity from "../pages/admin/security/AdminSecurity";
import SignIn from "../pages/security/SignIn";
import ProtectedRouteGuard from "./security/ProtectedRouteGuard";
import UnProtectedRouteGuard from "./security/UnProtectedRouteGuard";

// dynamic imports for chunking
const Dashboard = lazy(() =>  import("../pages/layout/Dashboard"));
const Register = lazy(() =>  import("../pages/security/Register"));
const Profile = lazy(() => import("../pages/basic/Profile"));
const Results = lazy(() =>  import("../pages/basic/Results"));
const Events = lazy(() => import("../pages/basic/Events"));
const Asa = lazy(() =>  import("../pages/basic/Asa"));
const Tags = lazy(() =>  import("../pages/basic/Tags"));
const AdminClubs = lazy(() =>  import("../pages/basic/AdminClubs"));
const AdminEvents = lazy(() =>  import("../pages/basic/AdminEvents"));

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
