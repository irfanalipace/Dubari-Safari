import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addToWishList, getWishList } from "../../store/actions/wishListActions";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PkgCard = ({ data, categories, ind }) => {
  const base = 'https://dubaisafari.saeedantechpvt.com/';
  const navigate = useNavigate();
  const [value, setValue] = useState(5);
  const theme = useTheme();
  const descriptionStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    color: 'grey'
  };

  const category = categories.find(category => category.id === data.category_id);
  const subCategory = category?.sub_category ? category.sub_category[ind]?.name : '';

  const truncateName = (name) => {
    const words = name.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    } else {
      return name;
    }
  };

  const handleBookNowClick = () => {
    const farFutureDate = new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000));
    const bookingData = {
      id: data.id,
      image_url: `${base}${data?.image_url}`
    };
    Cookies.set('BookingImage', JSON.stringify(bookingData), { expires: farFutureDate });
    navigate(`/details/${data.id}`);
  };

  const [wishList, setWishList] = useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleFavoriteClick = (activityId, activityData) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addToWishList(activityId))
        .then(() => {
          enqueueSnackbar("Added to Wishlist", { variant: "success" });
          setWishList((prevWishList) => [...prevWishList, { activity_id: activityId }]);
        })
        .catch((err) => {
          console.log(err, "Error");
        });
    } else {
      const existingWishListData = localStorage.getItem("wishListData");
      let wishListArray = existingWishListData ? JSON.parse(existingWishListData) : [];
      wishListArray.push(activityData);
      localStorage.setItem("wishListData", JSON.stringify(wishListArray));
      enqueueSnackbar("Added to Wishlist", { variant: "info" });
      setWishList(wishListArray);
    }
  };

  useEffect(() => {
    dispatch(getWishList())
      .then((result) => {
        setWishList(result.data.payload);
      })
      .catch((err) => {
        console.log(err, "Error fetching wishlist");
      });
  }, [dispatch]);

  const isActivityInWishlist = (activityId) => {
    return wishList.some((item) => item.activity_id === activityId);
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: "column", justifyContent: 'space-between', cursor: 'pointer' }}
      onClick={handleBookNowClick}
    >
      <div style={{ position: "relative" }}>
        <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton sx={{ zIndex: 9999999 }} onClick={() => handleFavoriteClick(data.id, data)}>
            {isActivityInWishlist(data.id) ? (
              <FavoriteIcon sx={{ fontSize: "35px", color: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "35px" }} />
            )}
          </IconButton>
        </div>

        <CardMedia
          sx={{ height: 240, borderRadius: "8px" }}
          image={`${base}${data?.image_url}`}
          title="green iguana"
        />
      </div>

      <CardContent>
        <Typography color="textSecondary" component="div">
          {subCategory}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.3rem', fontWeight: '700' }}>
          {truncateName(data?.name)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "grey" }}>
            Per Person Price
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
            <Typography
              sx={{ fontSize: '0.9rem', color: "grey", textDecoration: "line-through" }}
            >
              {data.packages[0].category === "private"
                ? `AED ${data.packages[0].price}`
                : `AED ${data.packages[0].adult_price}`}
            </Typography>

            <Typography
              sx={{ fontSize: '1rem' }}
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              {data.packages[0].category === "private"
                ? `AED ${Math.round(data.packages[0].price - (data.packages[0].price * data.discount_offer / 100))}`
                : `AED ${Math.round(data.packages[0].adult_price - (data.packages[0].adult_price * data.discount_offer / 100))}`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleBookNowClick}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PkgCard;
