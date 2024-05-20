import { useRoutes } from "react-router";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import Landing from "./page/Landing";
import GuestDetailsMain from "./page/GuestDetails/GuestDetailsMain";
import PaymentDetailsMain from "./page/PaymentDeatils/PaymentDetailsMain";
import Cnfrm_Screen from "./page/Confirm_Screen/Cnfrm_Screen";
import Booking_Info from "./page/Booking_Info/Booking_Info";
import Contact_Us from "./page/Contact_Us/Contact_Us";
import About_Us from "./page/About_Us/About_Us";
import Categories from "./page/Categories/Categories";
import DetailPage from "./page/DetailPage/DetailPage";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/guest-details",
      element: <GuestDetailsMain />,
    },
    {
      path: "/about",
      element: <About_Us />,
    },
    {
      path: "/details",
      element: <DetailPage />,
    },
    {
      path: "/desert-safari",
      element: <Categories />,
    },
    {
      path: "/confirmation",
      element: <Cnfrm_Screen />,
    },
    {
      path: "/booking-info",
      element: <Booking_Info />,
    },
    {
      path: "/contact-us",
      element: <Contact_Us />,
    },
    {
      path: "/payment-details",
      element: <PaymentDetailsMain />,
    },

    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
  ]);
  return element;
}
