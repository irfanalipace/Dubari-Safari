import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/page";
const TermsConditions = () => {
  const theme = useTheme();
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <>

<Page title='Terms & Conditions'>


      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${"/bgimage.png"})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          height: "25vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            color: "white",

            minHeight: "30vh",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Box minHeight={"5rem"}>
            <Typography
              className="workline"
              sx={{
                cursor: "pointer",
                fontSize: "2.5rem",
                fontWeight: "600",
              }}
            >
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "3rem 5%" }}>
        {/* <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "800",
            color: theme.palette.primary.main,
          }}
        >
          Terms & Conditions
        </Typography> */}

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
            All tours/services must be pre-paid except otherwise stated. We
            accept Visa, MasterCard, American Express. Payment will be listed as
            "bookdubaisafari.com” on the credit card statement. You will be
            charged in UAE Dirham (AED) at the conversion's rate applicable on
            the date of your booking.
          </Typography>

          <Typography
            sx={{
              color: theme.palette.primary.main,
              marginTop: "1rem",
              fontWeight: "700",
            }}
          >
            Online Payment: Master Card, Visa, American Express.
          </Typography>
          <Typography sx={{ marginTop: "1rem" }}>
            Card Payment: Direct Card Payment, Apple Pay, Samsung Pay, Google
            Pay: Visa, MasterCard, American Express.
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
          B. Voucher Issue
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            After payment, Book Dubai Safari will send a confirmation / voucher
            by e-mail: this voucher has to be printed, as a proof of purchase,
            and will be presented to the service provider/guide.
          </Typography>

          <Typography>
            All information regarding the travelers should be correctly given at
            the time of booking
          </Typography>

          <Typography>
            All requests for modifications/amendments must be sent by email to
            Book Dubai Safari.
          </Typography>

          <Typography sx={{ marginTop: "1rem" }}>
            <Link to="/">www.bookdubaisafari.com</Link> cannot be held
            responsible for any problem that may happen if you don't receive or
            read carefully your confirmation / voucher. In case you have not
            received your voucher, you must notify Book Dubai Safari at least 24
            hours before the date of service.
          </Typography>

          <Typography sx={{ marginTop: "1rem" }}>
            2. Cancellations, refund and procedure to cancel a booking
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            marginTop: "2rem",
            fontWeight: "800",
            color: theme.palette.primary.main,
          }}
        >
          2. Cancellations, refund and procedure to cancel a booking
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
          A. Cancellation fee / refund
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            Every Tour Activity/Attraction has its own cancellation policies,
            before booking any activity with bookdubaisafari.com, clients have
            to read cancellation policy of that particular tour. However, terms
            and conditions are subject to change.
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
          B. No Show
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            If you fail to turn up for the tour, no refunds in part or full can
            be provided. The same condition applies in the case of unused
            tickets, attraction and sightseeing tours, car-rental or
            chauffeur-driven services. Likewise, rescheduling cannot be allowed
            for confirmed tours, transfers to and from airports, and other
            travel related services.
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
          C. Modification of Terms
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            Attraction services covered in your package are subject to change
            based on local / weather conditions, airway schedules and such other
            several aspects. Should this transpire, we can provide suitable
            options of similar value, however depending on its availability. At
            most, we announce changes in itinerary, if any, before departure.
            Please note that www.bookdubaisafari.com reserves complete right to
            implement minor amendments in itinerary at any time without
            reimbursement. Further, no reimbursement can be done in the event of
            vis major, such as flood and earthquake or any unforeseen
            circumstances.
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
          D. Website Usage Restrictions
        </Typography>

        <Box sx={{ color: "grey", marginTop: "1rem" }}>
          <Typography>
            All content in this website, including logos, pictures, images,
            information on tour package, attractions, pricing details, and other
            relevant details, are proprietary to Book Dubai Safari. Accordingly,
            as a condition of this website´s usage, you agree not to exploit
            this website or its content for any non-personal, commercial, or
            illegitimate purposes.
          </Typography>
        </Box>
      </Box>
</Page>

    </>
  );
};

export default TermsConditions;
