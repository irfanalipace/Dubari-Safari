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
import Privacy_Policy from "./page/Privacy_Policy/Privacy_Policy";
import Search_Results from "./page/Search_Results";
import InvoiceDetails from "./page/InvoiceDetails/InvoiceDetails";
import WishList from "./page/Wish_List/WishList";
import Login_Main from "./page/Authentication_Page/Login/Login_Main";
import Forget_Password from "./page/Authentication_Page/Components/Forget_Password";
import Password_Confirmation from "./page/Authentication_Page/Components/Password_Confirmation";
import Signup_Main from "./page/Authentication_Page/Signup/Signup_Main";
import ReiewsDetail from "./page/DetailPage/ReiewsDetail";
import Change_Password from "./page/Authentication_Page/Components/Change_Password";
import CartMain from "./page/ViewCart/CartMain";
import BlogsMain from "./page/Blogs/BlogsMain";
import WhereFindMain from "./page/WhereToFind/WhereFindMain";
import ManageProfileMain from "./page/ManageProfile/ManageProfileMain";
import HelpPageMain from "./page/Help_Page/HelpPageMain";
import TermsConditions from "./page/TermsConditions/TermsConditions";
import History from "./page/history/History";
import Booking from "./page/booking/Booking";
import BlogDetail from "./page/Blogs/BlogDetail";
import Gift from "./page/gift/Gift";
import Reviews from "./page/reviews/Reviews";
import GuidLine from "./page/guidline/GuidLine";
import GenerateInvoice from "./page/PaymentDeatils/GenerateInvoice";
import StripeGift from "./page/gift/StripeGift";
import PreviewCard from "./page/gift/PreviewCard";
import UnAuthDetail from "./page/Help_Page/UnAuthDetail";
import GenerateCheckoutInvoice from "./page/PaymentDeatils/GenerateCheckoutInvoice";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/signup",
      element: <Signup_Main />,
    },
    {
      path: "/login",
      element: <Login_Main />,
    },
    {
      path: "/manage-profile",
      element: <ManageProfileMain />,
    },
    {
      path: "/forget-password",
      element: <Forget_Password />,
    },
    // {
    //   path: "/otp-authentication",
    //   element: <Password_Confirmation />,
    // },

    {
      path: "/change-password",
      element: <Change_Password />,
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
      path: "/invoice-details",
      element: <InvoiceDetails />,
    },
    {
      path: "/details/:id",
      element: <DetailPage />,
    },
    {
      path: "/invoice-details",
      element: <InvoiceDetails />,
    },
    {
      path: "/search-results",
      element: <Search_Results />,
    },
    {
      path: "/desert-safari",
      element: <Categories />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy_Policy />,
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
      path: "/blogs",
      element: <BlogsMain />,
    },
    {
      path: "/blog-detail/:id",
      element: <BlogDetail />,
    },
    {
      path: "/help",
      element: <HelpPageMain />,
    },
    {
      path: "/where-to-find-us",
      element: <WhereFindMain />,
    },
    {
      path: "/manage-profile",
      element: <ManageProfileMain />,
    },
    {
      path: "/payment-details",
      element: <PaymentDetailsMain />,
    },

    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
    {
      path: "/wish-list",
      element: <WishList />,
    },
    {
      path: "/cart",
      element: <CartMain />,
    },
    {

      path: "/history",
      element: <History />,
    },
    {
      path: "/all-booking",
      element: <Booking />,
    },
    {
      path: "/terms-&-conditions",
      element: <TermsConditions />,
    },
    {
      path: "/view-gift",
      element: <Gift />,
    },
    {
      path: "/feedback",
      element: <Reviews />,
    },
    {
      path: "/guidline",
      element: <GuidLine />,
    },
    {
      path: "/invoice-detail",
      element: <GenerateInvoice />,
    },
    {
      path: "/invoice-Checkout",
      element: <GenerateCheckoutInvoice />,
    },
    {
      path: "/gift-pay",
      element: <StripeGift />,
    },
    {
      path: "/preview-card",
      element: <PreviewCard />,
    },
    {
      path: "/payment-help",
      element: <UnAuthDetail />,
    },

  ]);
  return element;
}
