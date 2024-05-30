import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IoSyncOutline } from "react-icons/io5";
import { deleteCart } from "../../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const LeftSideComponents = ({allCart}) => {
  const base = 'https://dubaisafari.saeedantechpvt.com/'

  const navigate = useNavigate()

  const theme = useTheme();
  const dispatch = useDispatch()
  console.log(allCart[0], 'all cart on left side')

  const calculateTotalGuests = (adult, child, infant) => {
    return adult + child + infant;
  };


  const handleDelete = (id) => {
    // setLoading(true);

    console.log(id, 'cart id')

    dispatch(deleteCart(id))
      .then((res) => {
        // setLoading(false);
        // enqueueSnackbar("Activity Removed", { variant: "success" });
        alert('deleted')

        // setWishList((prevWishList) => prevWishList.filter(item => item.activity_id !== id));

        // localStorage.setItem("wishListLength", wishList.length - 1);
      })
      .catch((err) => {
        console.error(err);

      });
  };



  return (
    <>
      <Box sx={{ mt: 3 }}>

{allCart.map((val, index)=>(
  <Card sx={{ p: 2, background: "#FDF4F1" }} key={index}>
          <Box
            sx={{
              display: "flex",
              minHeight: "30vh",
              gap: 4,
            }}
          >
            <Box flex={2}>
              <img
                src={`${base}${val.image}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box flex={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight="bold" variant="h6">
                  {val.package.title}
                </Typography>
              </Box>
              <Box flex={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold" variant="h6">
                    {val.package.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                  <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                  <Typography sx={{ ml: 1, color: "grey" }}>
                    Package Type :   {val.package.highlight}

                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                  <CalendarMonthOutlinedIcon sx={{ color: "black" }} />
                  <Typography sx={{ ml: 1, color: "grey" }}>
                    Tour Date : {val.tour_date}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                  <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
                  <Typography sx={{ ml: 1, color: "grey" }}>
                    1 {val.package.category} car up to{" "}
                    {calculateTotalGuests(
                      val.adult,
                      val.child,
                      val.infant
                    )}
                    pax
                  </Typography>
                </Box>


                <Box sx={{ my: 2 }}>
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                  >
                    Cancelation is not Allowed
                  </Typography>
                </Box>

                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: '1rem' }}>
                  <Button sx={{ textTransform: "none", color: "black" }} onClick={() => handleDelete(val.id)}>

                    <DeleteOutlineOutlinedIcon /> Delete
                  </Button>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    <IoSyncOutline
                      style={{ fontSize: "1.5rem", fontWeight: "800" }}
                    />
                    Update
                  </Button>
                  <Button sx={{ fontSize: '0.8rem', textTransform: "none", color: "black" }}>
                    Please Login to use Promocode
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {val.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default LeftSideComponents;
