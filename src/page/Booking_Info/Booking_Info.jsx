import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Page from "../../components/page";
import BookingDetails from "./BookingDetails";
const Booking_Info = () => {
  return (
    <Page title="Booking Information">
      <Grid container spacing={3} sx={{ padding: "2rem 5%" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Thank you, Your Booking is Almost complete
          </Typography>
          <Typography textAlign="center" sx={{ my: 1, color: "grey" }}>
            Your Confirmation number is
            <Typography
              fontWeight="bold"
              color="primary"
              sx={{ display: "inline", ml: 0.5 }}
            >
              123456789
            </Typography>
          </Typography>
          <BookingDetails />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Booking_Info;
