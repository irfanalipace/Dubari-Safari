import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import Page from "../../components/page";
import LeftSideComponents from "./Components/LeftSideComponents";
import RightSideComponents from "./Components/RightSideComponents";
import { getCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const CartMain = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const allCartRedux = useSelector((state) => state.cart.cart.payload);
  const allCartLocal = JSON.parse(localStorage.getItem("addCartData")) || [];
  const allCart = allCartRedux?.length > 0 ? allCartRedux : allCartLocal;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(getCart())
      .then(() => setLoading(false))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    const total = allCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [allCart]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Page title="Cart | Arabia Horizon">
      <Box sx={{ padding: "1rem 5%" }}>
        <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: "700", mt: 3 }}>
          Shopping Cart
        </Typography>

        {loading ? (
          <Loader />
        ) : allCart?.length === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '1.5rem', mb: 4, fontWeight: '700' }}>Your Cart is Empty</Typography>
            <Button variant="contained" sx={{ textTransform: 'none' }} onClick={() => navigate('/desert-safari')}>
              Explore More
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={8}>
              <Box>
                <LeftSideComponents allCart={allCart} setTotalPrice={setTotalPrice} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <RightSideComponents allCart={allCart} totalPrice={totalPrice} />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Page>
  );
};

export default CartMain;
