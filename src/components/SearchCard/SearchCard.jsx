import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  IconButton,
  Modal,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishList, getWishList } from "../../store/actions/wishListActions";
import Loader from "../Loader/Loader";
import { useSnackbar } from "notistack";

const SearchCard = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const { enqueueSnackbar } = useSnackbar();

  // const wisListData = useSelector((state)=>state.wishlist.wishlist.payload)

  useEffect(() => {
    dispatch(getWishList())
      .then((result) => {
        setWishList(result.data.payload);
        localStorage.setItem("wishListLength", result.data.payload.length);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err, "Error fetching categories");
        setLoading(false); // Set loading to false in case of error
      });
  }, [dispatch]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 35).join(" ") + "...";
    } else {
      return description;
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    dispatch(deleteWishList(id))
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Activity Removed", { variant: "success" });


        setWishList((prevWishList) => prevWishList.filter(item => item.activity_id !== id));

        localStorage.setItem("wishListLength", wishList.length - 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
       {loading ? (

<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'30vh'}}>
<Loader />

</Box>
          ) : wishList.length === 0 ? ( // Check if allCart is empty
            <Typography variant="h1" sx={{ fontSize:'2rem', fontWeight:'700', display: "flex", justifyContent: "center", alignItems: "center", height: "25vh", marginTop:'4rem' }}>
              No Activity is Added yet
            </Typography>
          ) : (
        wishList.map((val, ind) => (
          <Box sx={{ mt: 3 }} key={ind}>
            <Card sx={{ p: 2, background: "#FDF4F1" }}>
              <Box
                sx={{
                  display: "flex",
                  minHeight: "30vh",
                  gap: 4,
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontWeight="bold" variant="h6">
                      {val.activity.name}
                    </Typography>

                    <IconButton onClick={() => handleDelete(val.activity_id)}>
                      <FavoriteIcon sx={{ fontSize: "35px", color: "red" }} />
                    </IconButton>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: theme.palette.primary.main }}
                    />
                    <Typography sx={{ ml: 1 }}>
                      94 reviews / 7k Booked
                    </Typography>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Typography sx={{ color: "grey" }}>
                      {truncateDescription(val.activity.description)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="grey">
                      Duration
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <AccessTimeIcon
                        sx={{ color: theme.palette.primary.main }}
                      />
                      <Typography sx={{ fontWeight: "bold" }}>
                        {val.activity.duration} hours
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography variant="h6" color="green">
                      Available Today
                    </Typography>
                    {/* {val.activity.packages.map(pkg => (
            <Typography variant="h4" fontWeight="bold" fontSize={'1.5rem'} key={pkg.id}>
              $ : {pkg.price}
            </Typography>
          ))} */}


          {val.activity.packages && val.activity.packages.length > 0 && (
                        <Typography variant="h6" fontWeight="bold" color={theme.palette.primary.main}>
                          {val.activity.packages[0].category === "private" ?
                            `$ ${val.activity.packages[0].price}` :
                            `$ ${val.activity.packages[0].adult_price}`}
                        </Typography>
                      )}

                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        ))
      )}
    </>
  );
};

export default SearchCard;
