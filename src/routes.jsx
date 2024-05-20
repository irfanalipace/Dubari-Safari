import { useRoutes } from "react-router";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import Landing from "./page/Landing";
import GuestDetailsMain from "./page/GuestDetails/GuestDetailsMain";
import PaymentDetailsMain from "./page/PaymentDeatils/PaymentDetailsMain";
import InvoiceDetails from "./page/InvoiceDetails/InvoiceDetails";
import TermsConditions from "./page/TermsConditions/TermsConditions";

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
            path: '/payment-details',
            element: <PaymentDetailsMain/>
        },
        {
            path: '/invoice-details',
            element: <InvoiceDetails/>
        },
        {
            path: '/terms-&-conditions',
            element: <TermsConditions/>
        },

        {
            path: '/admin-login',
            element: <AdminLogin />
        },
    ])
    return element
}