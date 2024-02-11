import { Route } from "react-router";
import AuthGuard from "../guards/AuthGuards";
import AdminClubs from "../pages/admin/clubs/AdminClubs";
import Club from "../pages/basic/Club";
import Profile from "../pages/basic/Profile";
import Layout from "../pages/layout/Layout";

export const AuthRoutes = [
    <Route key="Welcome" path="/" element={<AuthGuard component={<Layout />} />} >
        <Route key="Profile" path="profile" element={<AuthGuard component={<Profile />} />} />
        <Route key="Clubs" path="clubs" element={<AuthGuard component={<Club />} />} />
        <Route key="Events" path="events" element={<AuthGuard component={<Club />} />} />
        <Route key="Clubs" path="admin/">
            <Route key="Clubs" path="clubs" element={<AuthGuard component={<AdminClubs />} />} />
        </Route>        
    </Route>
]