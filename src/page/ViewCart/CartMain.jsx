import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Page from "../../components/page";
import LeftSideComponents from "./Components/LeftSideComponents";
import RightSideComponents from "./Components/RightSideComponents";
import { getCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartMain = () => {
  const navigate = useNavigate();
  const [allCart, setAllCart] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0); // Added state for total price

  const theme = useTheme()
  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAllCart = async () => {
    dispatch(getCart())
      .then((res) => {
        const allCartData = res.data.payload;
        console.log(allCartData, "cart data");
        setAllCart(allCartData);
        setLoading(false); // Set loading to false after data fetch
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading to false on error
      });
  };

  useEffect(() => {
    getAllCart();
  }, []);


  return (
    <>
      <Page title="Cart | Arabia Horizon">
        <Box sx={{ padding: "1rem 5%" }}>
          {/* <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<ArrowBack />}
            onClick={handleBack}
          >
            Back to Home
          </Button> */}
          <Typography
            variant="h1"
            sx={{ fontSize: "1.5rem", fontWeight: "700", mt: 3 }}
          >
            Shopping Cart
          </Typography>

          {loading ? ( // Conditional rendering based on loading state
            <Loader />
          ) : allCart.length === 0 ? ( // Check if allCart is empty
           <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
           {/* <Typography variant="h1" sx={{ fontSize:'2rem', fontWeight:'700', display: "flex", justifyContent: "center", alignItems: "center", minHeight: "25vh" }}>
             <Box>
              <ShoppingCartIcon sx={{fontSize:'10rem', color:theme.palette.primary.main}}/>
             </Box>
            </Typography> */}


            <Typography sx={{fontSize:'1.5rem',mb:4, fontWeight:'700'}}>Your Cart is Empty</Typography>

<Button variant="contained"
sx={{textTransform:'none'}}
onClick={()=>{
navigate('/desert-safari')
}}
>
Explore More

</Button>
           </Box>
          ) : (
            <Box sx={{ display: "flex", mt: 2, gap: 4 }}>
              <Box flex={2}>
                <Box>
                  <LeftSideComponents allCart={allCart} setTotalPrice={setTotalPrice} setAllCart={setAllCart} />
                </Box>
              </Box>
              <Box flex={1}>
                <RightSideComponents allCart={allCart} totalPrice={totalPrice} />
              </Box>
            </Box>
          )}
        </Box>
      </Page>
    </>
  );
};

export default CartMain;
