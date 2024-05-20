import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const TermsConditions = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${"/bgimage.png"})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          height: "50vh",
          width: "100%",
          "@media(max-width:600px)": {
            height: "30vh",
          },
        }}
      >
        <Box
          sx={{
            color: "white",

            minHeight: "60vh",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "5%",
            paddingRight: "5%",

            "@media(max-width:480px)": {
              paddingLeft: "5%",
              paddingRight: "5%",
              minHeight: "50vh",
            },
            "@media(min-width:481px) and (  max-width:768px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },

            "@media(min-width:769px) and (max-width:1024px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },
          }}
        >
          <Box
            minHeight={"8rem"}
            sx={{
              "@media(max-width:480px)": {
                minHeight: "12rem",
              },
            }}
          >
            <Typography
              className="workline"
              sx={{
                cursor: "pointer",
                fontSize: "2.5rem",
                fontWeight: "600",
                "@media(max-width:480px)": {
                  fontSize: "1rem",
                },
                "@media(min-width:4810px) and (max-width:900px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              Term & Conditions
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "3rem 5%" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "800",
            color: theme.palette.primary.main,
          }}
        >
          {" "}
          Terms & Conditions
        </Typography>

        <Typography sx={{ color: "grey", marginTop: "1rem" }}>
          Thank you for choosing our tour packages. By booking a trip through
          our website, you´re deemed to have agreed to its terms of use. Please
          read the following terms and procedures in order to make sure that
          you´ve clearly understood the conditions of your preferred trip.
          Information below provides clear details of various services we offer
          at www.bookdubaisafari.com, All of the below mentioned terms and
          conditions are applicable for bookings made through our websites such
          as:
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            marginTop: "2rem",
            fontWeight: "800",
            color: theme.palette.primary.main,
          }}
        >
          1. Price, Payment and voucher issue
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: "1.2rem",
            marginTop: "1rem",
            fontWeight: "800",
            color: "black",
          }}
        >
          A. Prices
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            Price quotations are subject to change without notice.
          </Typography>
          <Typography>
            If for any reason the price quoted is not correct, the team of
            www.bookdubaisafari.com will contact you for authorization.
          </Typography>

          <Typography>
            Seasonal Surcharges/blackout rates, may apply during Islamic
            holidays, Christmas, New Year and Easter periods.
          </Typography>

          <Typography>
            Tips/gratuities, baggage or personal insurance, beverages or food
            not described in the product's description and all other purchases
            of a personal nature are not included.
          </Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: "1.2rem",
            marginTop: "1rem",
            fontWeight: "800",
            color: "black",
          }}
        >
          B. Payments
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
          All tours/services must be pre-paid except otherwise stated. We accept Visa, MasterCard, American Express. Payment will be listed as "bookdubaisafari.com” on the credit card statement. You will be charged in UAE Dirham (AED) at the conversion's rate applicable on the date of your booking.
          </Typography>
         
          </Box>
      </Box>
    </>
  );
};

export default TermsConditions;
