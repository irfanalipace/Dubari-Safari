import { useRoutes } from "react-router";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import Landing from "./page/Landing";

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },

        {
            path: '/admin-login',
            element: <AdminLogin />
        },
    ])
    return element
}