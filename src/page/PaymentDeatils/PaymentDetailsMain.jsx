import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaymentDetailComponent from "./Components/PaymentDeatailComponent";
import PriceCard from "../Component/PriceCard";
import { useLocation } from "react-router";
import StepperComp from "./Components/StepperComp";
import P_Detail_New from "./Components/P_Detail_New";
import Component1 from "../GuestDetails/Components/Component1";
import Cookies from "js-cookie"; // Importing js-cookie

const PaymentDetailsMain = () => {
  // const { state } = useLocation();
  const [cookieData, setCookieData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Retrieve data from the cookie
    const data = Cookies.get('bookingDetails');
    if (data) {
      setCookieData(JSON.parse(data));
    }
  }, []);

  return (
    <Box sx={{ background: "#FFF", mt: 2 }}>
      <Grid container spacing={3} sx={{ padding: "2rem 5%" }}>
        <Grid item xs={12} lg={12}>
          <StepperComp />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          {/* <PaymentDetailComponent /> */}
          {/* <P_Detail_New /> */}
          <Component1 data={cookieData} />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PriceCard data={cookieData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetailsMain;
