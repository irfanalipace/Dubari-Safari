import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BookingHeader from "./components/BookingHeader";
import Details from "./components/Details";

const BookingDetails = () => {
  return (
    <Box sx={{ height: "80vh", background: "#f6f7f9", py: 5, px: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} sx={{ px: 2 }}>
          <BookingHeader
            title="Booking Information"
            sub="Lorem Ipsum Dolor Sit amet"
          />
          <Divider sx={{ mt: 2 }} />
          <Details title="First Name" value="Hamza" />
          <Details title="Last Name" value="Yaseen" />
          <BookingHeader
            sx={{ mt: 4 }}
            title="Payments"
            sub="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
          <Divider sx={{ mt: 3 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              Total
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
              $300
            </Typography>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{ marginTop: "2rem", display: "flex", justifyContent: "right" }}
          >
            <Button
              z
              variant="contained"
              sx={{
                padding: "0.8rem 3rem",
                backgroundColor: "grey",
                color: "white",
                textTransform: "none",
                fontSize: "0.8rem",
                ":hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                marginLeft: "1rem",
                padding: "0.8rem 1.5rem",
                textTransform: "none",
                fontSize: "0.8rem",
              }}
            >
              Print Receipt
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ borderLeft: "1px solid #e2e2e2" }}>
          <BookingHeader
            title="Booking Summary"
            sub="Lorem Ipsum Dolor Sit amet"
          />
          <Divider sx={{ mt: 2 }} />
          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", fontWeight: "600", mt: 3 }}
          >
            Summary
          </Typography>
          <Details title="Room" value="Single Room" />
          <Details title="Price Per Night" value="$450" />
          <Details title="Check Out" value="24 Feb, 2024" />

          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", fontWeight: "600", mt: 3 }}
          >
            Change
          </Typography>
          <Details title="Time" value="Single Room" />
          <Details title="Guest" value="$450" />
          <Details title="Var" value="24 Feb, 2024" />
          <Details title="Fee Included" value="24 Feb, 2024" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingDetails;
