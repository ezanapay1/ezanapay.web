import Login from "../features/auth/routes/Login";
import Landing from "../features/misc/routes/Landing";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    }
]);
