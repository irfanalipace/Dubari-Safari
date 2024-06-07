import React, { useEffect, useState } from "react";
import Page from "../../components/page";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PkgCard from "../../components/Pkg_Card/PkgCard";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { getCategories } from "../../store/actions/categoriesActions";
import Loader from "../../components/Loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("recommended");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getCategories())
      .then((result) => {
        const initialCategories = result.data.payload;
        setCategories(initialCategories);
        const categoryIdFromState = location.state?.categoryId;
        if (categoryIdFromState) {
          const initialCategory = initialCategories.find(
            (category) => category.id === categoryIdFromState
          );
          setSelectedCategory(initialCategory);
        } else {
          setSelectedCategory(initialCategories[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "ERRR");
      });
  }, [dispatch, location.state]);

  useEffect(() => {
    if (selectedCategory) {
      const activities = selectedCategory.activity || [];
      console.log(activities, 'abc')
      if (selectedSubCategory) {
        const filtered = activities.filter(activity =>
          activity.sub_category?.some(sub => sub.name === selectedSubCategory)
        );
        setFilteredActivities(filtered);
      } else {
        setFilteredActivities(activities);
      }
    }
  }, [selectedCategory, selectedSubCategory]);

  const handleChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset selected sub-category when a new category is selected
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const sortActivities = (activities, criteria) => {
    switch (criteria) {
      case "A-Z":
        return [...activities].sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A":
        return [...activities].sort((a, b) => b.name.localeCompare(a.name));
      case "Low to high price":
        return [...activities].sort((a, b) => {
          const priceA = a.packages[0]?.price ?? a.packages[0]?.adult_price ?? 0;
          const priceB = b.packages[0]?.price ?? b.packages[0]?.adult_price ?? 0;
          return priceA - priceB;
        });
      case "High to low price":
        return [...activities].sort((a, b) => {
          const priceA = a.packages[0]?.price ?? a.packages[0]?.adult_price ?? 0;
          const priceB = b.packages[0]?.price ?? b.packages[0]?.adult_price ?? 0;
          return priceB - priceA;
        });
      default:
        return activities;
    }
  };

  const filteredSubCategories = selectedCategory?.sub_category?.map((subCategory) => subCategory.name) || [];

  const sortedActivities = sortCriteria
    ? sortActivities(filteredActivities, sortCriteria)
    : filteredActivities;



    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Page title="Categories">
      <Box sx={{ padding: isSmall ? '3rem 2rem':'3rem 5rem' }}>
        {/* <Button
          onClick={handleBack}
          variant="contained"
          startIcon={<ArrowBack />}
        >
          Back to home page
        </Button> */}
        <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ flex: 2, textAlign:'center', fontSize:'25px' }}
          >
            Things to do in Abu Dhabi
          </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 3 }}>
            {/* Categories */}
          </Typography>
          <Typography sx={{ color: "grey", fontWeight: "bold" }}>
            {/* View All */}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          {loading ? (
            <Box>
              <Loader />
            </Box>
          ) : categories.length === 0 ? (
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", width: "100%" }}
            >
              No Categories Found please try again later
            </Typography>
          ) : (
            categories.map((val, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mr: 4,

                }}
                onClick={() => handleCategoryClick(val)}
              >
                <Avatar
                  src={val.image}
                  sx={{
                    height: "100px",
                    width: "100px",
                    border: `4px solid ${selectedCategory === val
                      ? theme.palette.primary.main
                      : "transparent"
                      }`,
                    cursor: "pointer",
                  }}
                />
                <Typography sx={{ mt: 1, fontWeight: "bold", fontSize: '0.9rem' }}>
                  {val.name}

                </Typography>
              </Box>
            ))
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ flex: 2, whiteSpace: "nowrap" }}
          >
            {/* Things to do in Abu Dhabi */}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1, gap: "10px" , width:'85%' }}>
            <Typography fontWeight="bold" sx={{ whiteSpace: "nowrap", mr: 2 }}>
              Sort result by
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Recommended</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortCriteria}
                // label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value="recommended">Recommended</MenuItem>
                <MenuItem value="A-Z">A-Z</MenuItem>
                <MenuItem value="Z-A">Z-A</MenuItem>
                <MenuItem value="Low to high price">Low to high price</MenuItem>
                <MenuItem value="High to low price">High to low price</MenuItem>
              </Select>
            </FormControl>
            {/* {filteredSubCategories.length > 0 && (
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Sub Categories</InputLabel> */}
            {/* <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                >

                  {filteredSubCategories.map((subCategory, index) => (
                    <MenuItem key={index} value={subCategory}>
                      {subCategory}
                    </MenuItem>
                  ))}
                </Select> */}
            {/* </FormControl> */}
            {/* )}  */}
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {sortedActivities.length === 0 ? (
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                mt: 3,
              }}
            >
              No activities found in this category
            </Typography>
          ) : (
            sortedActivities.map((val, index) => (
              <Grid item xs={12} lg={3} key={index}>
                <PkgCard data={val} categories={categories} ind={index} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Page>
  );
};

export default Categories;
