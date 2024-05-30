import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IoSyncOutline } from "react-icons/io5";
import { deleteCart, getCart } from "../../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

const LeftSideComponents = ({ allCart }) => {
  const base = "https://dubaisafari.saeedantechpvt.com";

  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true); // State to track loading
  const calculateTotalGuests = (adult, child, infant) => {
    return adult + child + infant;
  };

  const handleDelete = (id) => {
    setLoading(true);

    dispatch(deleteCart(id))
      .then((res) => {
        setLoading(false);

        enqueueSnackbar("Activity Removed", { variant: "success" });
        const updatedCart = allCart.filter(item => item.id !== id);
        setAllCart(updatedCart);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Box sx={{ mt: 3 }}>
        {allCart.map((val, index) => {
          const image = val.package.activity.activity_images[0]?.filename;

          return (
            <Card sx={{ p: 2, background: "#FDF4F1" }} key={index}>
              <Box
                sx={{
                  minHeight: "30vh",
                  gap: 4,
                }}
              >
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
                      src={`${base}/uploads/gallery/${image}`}
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


                <Box sx={{display:'flex'}}>

<Box flex={2}>

</Box>

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
                      {val.price}
                    </Typography>
                  </Box>
</Box>

                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default LeftSideComponents;
