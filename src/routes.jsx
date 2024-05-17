import { useRoutes } from "react-router";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import Landing from "./page/Landing";
import GuestDetailsMain from "./page/GuestDetails/GuestDetailsMain";

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },

        {
            path: '/guest-details',
            element: <GuestDetailsMain/>
        },

        {
            path: '/admin-login',
            element: <AdminLogin />
        },
    ])
    return element
}