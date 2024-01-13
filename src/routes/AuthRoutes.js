import { Route } from "react-router";
import AuthGuard from "../guards/AuthGuards";
import Clubs from "../pages/basic/Clubs";
import Profile from "../pages/basic/Profile";
import Layout from "../pages/layout/Layout";

export const AuthRoutes = [
    <Route key="Welcome" path="/" element={<AuthGuard component={<Layout />} />} >
        <Route key="Profile" path="profile" element={<AuthGuard component={<Profile />} />} />
        <Route key="Clubs" path="clubs" element={<AuthGuard component={<Clubs />} />} />
    </Route>
]