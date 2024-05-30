import { Box, Button, Card, IconButton, Rating, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getActivities } from "../../../../store/actions/categoriesActions";
import Loader from "../../../../components/Loader/Loader";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToWishList, getWishList } from "../../../../store/actions/wishListActions";
import { useSnackbar } from "notistack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";


const RightAside = ({ selectedCategory, selectedSubcategory }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
const navigate = useNavigate()
  const storedKeyword = localStorage.getItem("searchKeyword");
  useEffect(() => {
    if (storedKeyword) {
      setKeyword(storedKeyword);
    } else {
      setFilteredActivities(activities);
    }
  }, [storedKeyword]);

  useEffect(() => {
    dispatch(getActivities())
      .then((result) => {
        setActivities(result.data.payload);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "Error fetching categories");
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    filterActivities(keyword, selectedCategory, selectedSubcategory); // Pass category and subcategory to the filter function
  }, [keyword, activities, selectedCategory, selectedSubcategory]);

  const filterActivities = (keyword, selectedCategory, selectedSubcategory) => {
    // Filter activities based on keyword, category, and subcategory
    let filteredResults = activities.filter((activity) => {
      const isMatchedKeyword = activity.name.toLowerCase().includes(keyword.toLowerCase());
      const isMatchedCategory = selectedCategory ? activity.category_id === selectedCategory : true;
      const isMatchedSubcategory = selectedSubcategory ? activity.subcategory_id === selectedSubcategory : true;
      return isMatchedKeyword && isMatchedCategory && isMatchedSubcategory;
    });

    if ((selectedCategory || selectedSubcategory) && filteredResults.length === 0) {
      // If no activities match the selected category or subcategory
      setFilteredActivities([]);
      return;
    }

    setFilteredActivities(filteredResults);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 35).join(" ") + "...";
    } else {
      return description;
    }
  };

  const handleFavoriteClick = (activityId) => {

    console.log(activityId, 'iddddddd')

    dispatch(addToWishList(activityId))
    .then((result) => {

      enqueueSnackbar("Added to Wishlist", { variant: "success" });


    })
    .catch((err) => {
      console.log(err, "Error");
          });

  };




useEffect(()=>{
  dispatch(getWishList())
  .then((result) => {
    setWishList(result.data.payload);

  })
  .catch((err) => {
    console.log(err, "Error fetching categories");

  });
},[dispatch])

const isActivityInWishlist = (activityId) => {
  return wishList.some((item) => item.activity_id === activityId);
};


  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Tours Search Result
        </Typography>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Recommended</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Recommended"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {loading ? (
        <Loader />
      ) : filteredActivities.length === 0 ? (
<Box sx={{display:'flex', ustifyContent:'center', alignItems:'center', height:'50vh',}}>
<Typography variant="h5" sx={{paddingLeft:'20rem'}}>No Activity Available</Typography>
</Box>
      ) : (
        filteredActivities.map((val, ind) => (
          <Box sx={{ mt: 3 }} key={ind} onClick={() => navigate(`/details/${val.id}`)}>
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
                    src={`https://dubaisafari.saeedantechpvt.com/storage/uploads/media/${val.image}`}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "260px",
                      objectFit: "cover",
                    }}
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
                      {val.name}
                    </Typography>

                    <IconButton onClick={() => handleFavoriteClick(val.id)}>
                      {isActivityInWishlist(val.id) ? (
                        <FavoriteIcon sx={{ fontSize: "35px", color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ fontSize: "35px" }} />
                      )}
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
                      {truncateDescription(val.description)}
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
                        {val.duration} hours
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
                      Cancellation Before : {val.cancellation_duration} hours
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      $2500
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        ))
      )}
    </Box>
  );
};

export default RightAside;
