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
import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  CalendarMonthOutlined,
  CalendarViewMonthOutlined,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux"; // Import useSelector
import Cookies from "js-cookie"; // Importing js-cookie
import Loader from "../../../components/Loader/Loader";


const RightSideComponents = ({ allCart, totalPrice }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

const [loading, setLoading]= useState(true)

  useEffect(() => {
if(totalPrice === null || totalPrice === 0){
  setLoading(true)
}else{
  setLoading(false)
}

  }, [totalPrice]);

  console.log(allCart, "all cartttt");
  const location = useLocation()
  // console.log(location.pathname, 'hi')

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

  const path = location.pathname;
  console.log(path, 'this path')
  const handleCheckout = () => {
    const lastCartItem = allCart[allCart.length - 1];
    const allCartString = JSON.stringify(allCart);

    sessionStorage.setItem('cartData', allCartString);

    const { adult, child, infant, tour_date } = lastCartItem;

    const data = {
      package_id: '1',
      date: tour_date,
      adult: adult,
      child: child,
      infant: infant,
      total_amount: totalPrice,
    };

    Cookies.set('bookingDetails', JSON.stringify(data));
    navigate("/payment-details", { state: path });
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
            sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "1rem" }}
          >

            Total ({allCart?.length} Activit{allCart?.length !== 1 ? "ies" : ""})

          </Typography>
          <Box>
          {loading ? (
              <Loader/> // Show loader while loading
            ) : (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  AED : {totalPrice}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ color: "green", fontSize: "1rem", fontWeight: "600" }}
                >
                  No Additional Fees
                </Typography>
              </>
            )}
          </Box>
        </Box>


    {!isAuthenticated && (
      <Box sx={{ marginTop: "1rem" }}>
      <Divider />

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
    )}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h1" sx={{ fontSize: "20px", fontWeight: "700" }}>
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
