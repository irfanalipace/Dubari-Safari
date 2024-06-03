import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import PaymentDetailComponent from "./Components/PaymentDeatailComponent";
import PriceCard from "../Component/PriceCard";
import { useLocation } from "react-router";
import StepperComp from "./Components/StepperComp";
import P_Detail_New from "./Components/P_Detail_New";
import Component1 from "../GuestDetails/Components/Component1";

const PaymentDetailsMain = () => {
  const { state } = useLocation();
  console.log(state, 'state ays');
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box sx={{ background: "#FFF", mt: 2 }}>
      <Grid container spacing={3} sx={{ padding: "2rem 5%" }}>
        <Grid item xs={12} lg={12}>
          <StepperComp />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          {/* <PaymentDetailComponent /> */}
          {/* <P_Detail_New /> */}
          <Component1 data={state}/>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PriceCard data={state} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetailsMain;
