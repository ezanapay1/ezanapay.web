import Dashboard from "../features/users/routes/Dashboard";
import Login from "../features/auth/routes/Login";
import Landing from "../features/misc/routes/Landing";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../features/users/routes/Profile";
import Register from "../features/auth/routes/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {}
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/profile",
        element: <UserProfile />,
    }
]);
