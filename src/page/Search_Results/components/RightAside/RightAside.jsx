import { Box, Button, Card, Rating, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchCard from "../../../../components/SearchCard/SearchCard";
import { useLocation, useNavigate } from "react-router";
import {
  getActivities,

} from "../../../../store/actions/categoriesActions";
import { useDispatch } from "react-redux";
import Loader from "../../../../components/Loader/Loader";

import AccessTimeIcon from "@mui/icons-material/AccessTime";


const RightAside = () => {
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(true);




  const storedKeyword = localStorage.getItem("searchKeyword");
  useEffect(() => {
    const storedKeyword = localStorage.getItem("searchKeyword");
    if (storedKeyword) {
      setKeyword(storedKeyword);
    }else {
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
    filterActivities(keyword);
  }, [keyword, activities,]);

  const filterActivities = (keyword) => {

    if (keyword.trim() === '') {
      setFilteredActivities(activities);
    } else {
      const results = activities.filter((activity) =>
        activity.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredActivities(results);
    }
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
        <Typography variant="h5">No Activity Available</Typography>
      ) : (
        filteredActivities.map((val, ind) => (
          <Box sx={{ mt: 3 }}>
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
                    {/* <IconButton>
                    {fill ? (
                      <FavoriteIcon
                        sx={{ fontSize: "35px ", color: "red" }}
                      />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: "35px " }} />
                    )}
                  </IconButton> */}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {" "}
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
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >

                      <AccessTimeIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                      <Typography sx={{ fontWeight: "bold" }}>
                        {val.duration} hours
                      </Typography>
                      {/* <ThumbUpAltIcon
                      sx={{ color: theme.palette.primary.main }}
                    /> */}
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
