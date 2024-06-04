import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  CalendarMonthOutlined,
  CalendarViewMonthOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux"; // Import useSelector

const RightSideComponents = ({ allCart, totalPrice }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(allCart, "all cartttt");

  const faq = [
    {
      qestion: "Can I edit my booking after 1 book",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae odit fuga porro laboriosam eveniet voluptate temporibus id veniam modi.",
    },
    {
      qestion: "How long do items stay saved in cart ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae odit fuga porro laboriosam eveniet voluptate temporibus id veniam modi.",
    },
    {
      qestion: "Is my Payment Secure?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae odit fuga porro laboriosam eveniet voluptate temporibus id veniam modi.",
    },
    {
      qestion: "Is there a booking fee ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae odit fuga porro laboriosam eveniet voluptate temporibus id veniam modi.",
    },
  ];

  // const handleCheckout= ()=>{
  //   navigate('/payment-details', { state: { totalPrice: totalPrice } })
  // }

  const handleCheckout = () => {
    const lastCartItem = allCart[allCart.length - 1];
    console.log(lastCartItem, "last cart data");

    const { adult, child, infant, tour_date } = lastCartItem;



    navigate("/payment-details", {
      state: {
        totalPrice: totalPrice,
        person: {
          adult: adult,
          child: child,
          infant: infant,
      },
        date: tour_date,
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          mt: 3,
          padding: "2rem 5%",
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}
          >

            Total ({allCart.length} Activit{allCart.length !== 1 ? "ies" : ""})

          </Typography>
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: theme.palette.primary.main,
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              $ : {totalPrice}
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: "green", fontSize: "1rem", fontWeight: "600" }}
            >
              No Additional Fees
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ marginTop: "1rem" }}>
          <Button
            variant="contained"
            sx={{ width: "100%", textTransform: "none" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "100%", textTransform: "none", mt: 2 }}
            onClick={() => {
              navigate("/desert-safari");
            }}
          >
            Explore more activities
          </Button>
          {/*
          {!isAuthenticated && (
          <Box sx={{ textAlign: "center", padding: "0rem 3rem", mt: 2 }}>
              <Typography>
                <Link
                  to="/signup"
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                >
                  Create an account
                </Link>
                <span> or </span>
                <Link
                  to="/login"
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
                for faster checkout
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <DoneIcon sx={{ color: "green" }} />
                <Typography
                  sx={{ color: "green", fontWeight: "600", marginTop: "1rem" }}
                >
                  Best Price Guarantee
                </Typography>
              </Box>
            </Box>
          )} */}

          <Box sx={{ textAlign: "center", padding: "0rem 3rem", mt: 2 }}>
            <Typography>
              <Link
                to="/signup"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
              >
                Create an account
              </Link>
              <span> or </span>
              <Link
                to="/login"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              for faster checkout
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              <DoneIcon sx={{ color: "green" }} />
              <Typography
                sx={{ color: "green", fontWeight: "600", marginTop: "1rem" }}
              >
                Best Price Guarantee
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
          Frequently Asked Questions
        </Typography>
        <br />
        <Divider />
        <Box sx={{ borderRadius: "20px", mt: 3 }}>
          {faq.map((val, index) => (
            <Accordion
              key={index}
              sx={{ border: "none", color: "grey", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {val.qestion}
              </AccordionSummary>
              <AccordionDetails>{val.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RightSideComponents;
