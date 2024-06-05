import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IoSyncOutline } from "react-icons/io5";
import { addToCart, deleteCart, getCart } from "../../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

const LeftSideComponents = ({ setTotalPrice  }) => {

//   const base = "https://dubaisafari.saeedantechpvt.com";
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const { enqueueSnackbar } = useSnackbar();
//   const [loading, setLoading] = useState(true);

//   const allCart = useSelector((state) => state.cart.cart.payload);

//   const calculateTotalGuests = (adult, child, infant) => {
//     return adult + child + infant;
//   };

//   const storedData = JSON.parse(localStorage.getItem("addCartData"));

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedData = JSON.parse(localStorage.getItem("addCartData"));

//     if (token && storedData && storedData.length > 0) {
//       storedData.forEach((item) => {
//         const { p_id, q, total, date, adult, child, infant } = item;
//         dispatch(addToCart(p_id, q, total, date, adult, child, infant))
//           .then((res) => {
//             localStorage.removeItem("addCartData");
//             enqueueSnackbar("Activity Added to Cart", { variant: "success" });
//           })
//           .catch((err) => {
//             console.error(err);
//             enqueueSnackbar("Failed to Add Activity to Cart", { variant: "error" });
//           });
//       });
//     }
//   }, [dispatch]);


//   useEffect(() => {
//     const total = allCart.reduce((sum, item) => sum + item.price, 0);
//     setTotalPrice(total);
//   }, [allCart, setTotalPrice]);

//   const handleDelete = (id) => {
//     setLoading(true);

//     dispatch(deleteCart(id))
//       .then((res) => {
//         setLoading(false);
// dispatch(getCart())
//         enqueueSnackbar("Activity Removed", { variant: "success" });

//         // const updatedCart = allCart.filter(item => item.id !== id);
//         // setAllCart(updatedCart);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleNavigate = (id) => {
//     navigate(`/details/${id}`);
//   };

  const base = "https://dubaisafari.saeedantechpvt.com";
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const allCartRedux = useSelector((state) => state.cart.cart.payload);
  const [allCartLocal, setAllCartLocal] = useState([]);

  const calculateTotalGuests = (adult, child, infant) => {
    return adult + child + infant;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedData = JSON.parse(localStorage.getItem("addCartData"));

    if (token && storedData && storedData.length > 0) {
      storedData.forEach((item) => {
        const { p_id, q, price, date, adult, child, infant } = item;
        dispatch(addToCart(p_id, q, price, date, adult, child, infant))
          .then((res) => {
            localStorage.removeItem("addCartData");
            enqueueSnackbar("Activity Added to Cart", { variant: "success" });
          })
          .catch((err) => {
            console.error(err);
            enqueueSnackbar("Failed to Add Activity to Cart", { variant: "error" });
          });
      });
    }
  }, [dispatch, enqueueSnackbar]);


  useEffect(() => {
    if (!token) {
      const storedData = JSON.parse(localStorage.getItem("addCartData")) || [];

      setAllCartLocal(storedData);
    } else {
      dispatch(getCart());
    }
  }, [dispatch, token]);

  useEffect(() => {
    const total = (token ? allCartRedux : allCartLocal).reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);


  }, [allCartRedux, allCartLocal, setTotalPrice]);


  const handleDelete = (id) => {
    setLoading(true);

    dispatch(deleteCart(id))
      .then((res) => {
        setLoading(false);
        dispatch(getCart());
        enqueueSnackbar("Activity Removed", { variant: "success" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  const allCart = token ? allCartRedux : allCartLocal;

console.log(allCart, 'cart data')

  return (
    <>
      <Box sx={{ mt: 3 }}>
      {allCart?.map((val, index) => {


        if (!token) {
        return (
            <Card sx={{ p: 2, background: "#FDF4F1", mb: 4 }}>
                {val?.ac_data?.packages?.map((packageItem, packageIndex) => (



                    <Box key={packageIndex} sx={{ minHeight: "30vh", gap: 4 }}>

                        <Box
                            sx={{
                                display: "flex",
                                minHeight: "30vh",
                                gap: 4,
                            }}
                            onClick={() => handleNavigate(packageItem.activity_id)}
                        >
                            <Box flex={2}>
                                <img
                                    src={`${base}/storage/uploads/media/${val.ac_data.image}`}
                                    alt="Activity"
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
                                        {packageItem.title}
                                    </Typography>
                                </Box>
                                <Box flex={4}>
                                    <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                                        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                                        <Typography sx={{ ml: 1, color: "grey" }}>
                                            Package Type : {packageItem.highlight}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                                        <CalendarMonthOutlinedIcon sx={{ color: "black" }} />
                                        <Typography sx={{ ml: 1, color: "grey" }}>
                                            Tour Date : {val.date}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                                        <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
                                        <Typography sx={{ ml: 1, color: "grey" }}>
                                            1 {packageItem.category} car up to{" "}
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
                                            Cancellation Before :{" "}
                                            {val.ac_data.cancellation_duration} hours
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex' }}>
                            <Box flex={2}></Box>
                            <Box flex={4}>
                                <Divider />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "1rem",
                                    }}
                                >
                                    <Button
                                        sx={{ textTransform: "none", color: "black" }}
                                        onClick={() => handleDelete(packageItem.id)}
                                    >
                                        <DeleteOutlineOutlinedIcon /> Delete
                                    </Button>
                                    <Button sx={{ textTransform: "none", color: "black" }}>
                                        <IoSyncOutline
                                            style={{ fontSize: "1.5rem", fontWeight: "800" }}
                                        />
                                        Update
                                    </Button>
                                    <Button
                                        sx={{
                                            fontSize: "0.8rem",
                                            textTransform: "none",
                                            color: "black",
                                        }}
                                    >
                                        Please Login to use Promocode
                                    </Button>
                                    <Typography
                                        sx={{
                                            fontSize: "1.5rem",
                                            fontWeight: "700",
                                            color: theme.palette.primary.main,
                                        }}
                                    >
                                        $ {val.price}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Card>
          );
        } else {
          // Assuming allCartRedux is a simple array
          return (
            <Card sx={{ p: 2, background: "#FDF4F1", mb:4 }} key={index} >
              <Box sx={{ minHeight: "30vh", gap: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    minHeight: "30vh",
                    gap: 4,
                  }}
                  onClick={() => handleNavigate(val.package.activity_id)}
                >
                  <Box flex={2}>
                    <img
                      // src={`${base}/uploads/gallery/${image}`}
                      src={`${base}/storage/uploads/media/${val.package.activity.image}`}
                      alt="Activity"
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
                      <Box sx={{ display: "flex", alignItems: "start", mt: 1 }}>
                        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                        <Typography sx={{ ml: 1, color: "grey" }}>
                          Package Type : {val.package.highlight}
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
                          Cancellation Before :{" "}
                          {val.package.activity.cancellation_duration} hours
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Box flex={2}></Box>
                  <Box flex={4}>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        sx={{ textTransform: "none", color: "black" }}
                        onClick={() => handleDelete(val.id)}
                      >
                        <DeleteOutlineOutlinedIcon /> Delete
                      </Button>
                      <Button sx={{ textTransform: "none", color: "black" }}>
                        <IoSyncOutline
                          style={{ fontSize: "1.5rem", fontWeight: "800" }}
                        />
                        Update
                      </Button>
                      <Button
                        sx={{
                          fontSize: "0.8rem",
                          textTransform: "none",
                          color: "black",
                        }}
                      >
                        Please Login to use Promocode
                      </Button>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: theme.palette.primary.main,
                        }}
                      >
                        $ {val.price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          );
        }
      })}
      </Box>
    </>
  );
};

export default LeftSideComponents;
