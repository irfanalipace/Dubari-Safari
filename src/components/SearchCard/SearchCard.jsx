import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishList, getWishList } from "../../store/actions/wishListActions";
import Loader from "../Loader/Loader";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

const SearchCard = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const reduxWishList = useSelector((state) => state.wishlist.wishlist.payload);




  useEffect(() => {
    if (token) {
      dispatch(getWishList())
        .then((result) => {
          setWishList(result.data.payload);
          localStorage.setItem("wishListLength", result.data.payload.length);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "Error fetching wishlist");
          setLoading(false);
        });
    } else {
      const localWishList = localStorage.getItem("wishListData");
      setWishList(localWishList ? JSON.parse(localWishList) : []);
      setLoading(false);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token && reduxWishList) {
      setWishList(reduxWishList);
    }
  }, [reduxWishList, token]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 35).join(" ") + "...";
    } else {
      return description;
    }
  };

  const handleDelete = (id) => {

    if (token) {
      setLoading(true);
      dispatch(deleteWishList(id))
        .then((res) => {
          setLoading(false);
          enqueueSnackbar("Activity Removed", { variant: "success" });
          // setWishList((prevWishList) => prevWishList.filter(item => item.activity_id !== id));
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {

      const updatedWishList = wishList.filter(item => item.activity_id === id);
      localStorage.removeItem("wishListData", (updatedWishList))
      console.log(updatedWishList, 'wishhhhh')
      setWishList(updatedWishList);
      enqueueSnackbar("Activity Removed from local wishlist", { variant: "success" });
      localStorage.setItem("wishListData", JSON.stringify(updatedWishList));

    }
  };

  // console.log(wishList, 'wishlisttttttt');


  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
          <Loader />
        </Box>
      ) : wishList?.length === 0 ? (
        <Box sx={{ minHeight: "25vh", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container sx={{ padding: '1rem 20%' }}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                <img src='/wishlist.JPG' alt="image" width={'100%'} />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: '700', display: "flex", justifyContent: "center", alignItems: "center", height: "25vh", marginTop: '4rem' }}>
                  Your Wishlist is empty
                </Typography>
                <Button variant="contained" sx={{ textTransform: 'none' }} onClick={() => navigate('/desert-safari')}>Explore More</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        wishList.map((val, ind) => (
          token ? (
            <Box sx={{ mt: 3 }} key={ind}>
              <Card sx={{ p: 2, background: "#FDF4F1" }}>
                <Box sx={{ display: "flex", minHeight: "30vh", gap: 4 }}>
                  <Box flex={1}>
                    <img
                      src={`https://dubaisafari.saeedantechpvt.com/storage/uploads/media/${val.activity.image}`}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        height: "260px",
                        objectFit: "cover",
                      }}
                      alt={val.activity.name}
                    />
                  </Box>
                  <Box flex={3}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography fontWeight="bold" variant="h6">
                        {val.activity.name}
                      </Typography>
                      <IconButton onClick={() => handleDelete(val.activity_id)}>
                        <FavoriteIcon sx={{ fontSize: "35px", color: "red" }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Rating name="read-only" value={5} readOnly sx={{ color: theme.palette.primary.main }} />
                      <Typography sx={{ ml: 1 }}>94 reviews / 7k Booked</Typography>
                    </Box>
                    <Box sx={{ my: 2 }}>
                      <Typography sx={{ color: "grey" }}>
                        {truncateDescription(val.activity.description)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="h6" color="grey">Duration</Typography>
                      <Box sx={{ display: "flex" }}>
                        <AccessTimeIcon sx={{ color: theme.palette.primary.main }} />
                        <Typography sx={{ fontWeight: "bold" }}>{val.activity.duration} hours</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                      <Typography variant="h6" color="green">
                      Cancellation Before : {val.activity.cancellation_duration} hours

                      </Typography>
                      {val.activity.packages && val.activity.packages.length > 0 && (
                        <Typography variant="h6" fontWeight="bold" color={theme.palette.primary.main}>
                          {val.activity.packages[0].category === "private" ?
                            `AED ${val.activity.packages[0].price}` :
                            `AED ${val.activity.packages[0].adult_price}`}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          ) : (
            <Box sx={{ mt: 3 }} key={ind}>
              <Card sx={{ p: 2, background: "#FDF4F1" }}>
                <Box sx={{ display: "flex", minHeight: "30vh", gap: 4 }}>
                  <Box flex={1}>
                    <img
                      src={`https://dubaisafari.saeedantechpvt.com/storage/uploads/media/${val.image}`}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        height: "260px",
                        objectFit: "cover",
                      }}
                      alt={val.name}
                    />
                  </Box>
                  <Box flex={3}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography fontWeight="bold" variant="h6">
                        {val.name}
                      </Typography>
                      <IconButton onClick={() => handleDelete(val.id)}>
                        <FavoriteIcon sx={{ fontSize: "35px", color: "red" }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Rating name="read-only" value={5} readOnly sx={{ color: theme.palette.primary.main }} />
                      <Typography sx={{ ml: 1 }}>94 reviews / 7k Booked</Typography>
                    </Box>
                    <Box sx={{ my: 2 }}>
                      <Typography sx={{ color: "grey" }}>
                        {truncateDescription(val.description)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="h6" color="grey">Duration</Typography>
                      <Box sx={{ display: "flex" }}>
                        <AccessTimeIcon sx={{ color: theme.palette.primary.main }} />
                        <Typography sx={{ fontWeight: "bold" }}>{val.duration} hours</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                      <Typography variant="h6" color="green">
                      Cancellation Before : {val.cancellation_duration} hours
                       </Typography>
                      {val.packages && val.packages.length > 0 && (
                        <Typography variant="h6" fontWeight="bold" color={theme.palette.primary.main}>
                          {val.packages[0].category === "private" ?
                            `AED ${val.packages[0].price}` :
                            `AED ${val.packages[0].adult_price}`}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          )
        ))
      )}
    </>
  );
};

export default SearchCard;
