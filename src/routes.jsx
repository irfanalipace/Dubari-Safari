import { useRoutes } from "react-router";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import Landing from "./page/Landing";
import DetailDubaiThings from "./page/ThingsDetail";

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/location-detail',
            element: <DetailDubaiThings />,
        },

        {
            path: '/admin-login',
            element: <AdminLogin />
        },
    ])
    return element
}