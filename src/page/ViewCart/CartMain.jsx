import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Page from "../../components/page";
import LeftSideComponents from "./Components/LeftSideComponents";
import RightSideComponents from "./Components/RightSideComponents";
import { getCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartMain = () => {
  const navigate = useNavigate();
  const [allCart, setAllCart] = useState([]);
const dispatch = useDispatch()
  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  const getAllCart = async () => {
    dispatch(getCart())
      .then((res) => {
        const allCartData = res.data.payload;
        console.log(allCartData, 'cart data')
        setAllCart(allCartData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllCart();
  }, []);


console.log(allCart[0], 'all Cart data from map')


  return (
    <>
      <Page title="Cart">
        <Box sx={{ padding: "1rem 5%" }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<ArrowBack />}
            onClick={handleBack}
          >
            Back to Home
          </Button>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.5rem", fontWeight: "700", mt: 3 }}
          >
            Shopping Cart
          </Typography>

          <Box sx={{ display: "flex", mt: 2, gap: 4 }}>
            <Box flex={2}>
              <Box>
                <LeftSideComponents allCart={allCart}/>
              </Box>
            </Box>
            <Box flex={1}>
              <RightSideComponents allCart={allCart}/>
            </Box>
          </Box>
        </Box>
      </Page>
    </>
  );
};

export default CartMain;
