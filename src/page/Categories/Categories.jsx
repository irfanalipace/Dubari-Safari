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
import { getActivities, getCategories } from "../../store/actions/categoriesActions";
import Loader from "../../components/Loader/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("recommended");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [activityCount, setActivityCount] = useState([]);

  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);




  // useEffect(() => {
  //   dispatch(getActivities())
  //     .then((result) => {
  //       const initialActivityCount = result.data.payload;
  //       setActivityCount(initialActivityCount);


  //     })
  //     .catch((err) => {

  //       console.log(err, "ERRR");
  //     });
  // }, []);


  // const activityLength = filtered?.length
  const activityLength = filteredActivities?.length




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
      console.log(activities, "abc");
      if (selectedSubCategory) {
        const filtered = activities.filter((activity) =>
          activity.sub_category?.some((sub) => sub.name === selectedSubCategory)
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
    setSelectedSubCategory(null);
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
          const priceA =
            a.packages[0]?.price ?? a.packages[0]?.adult_price ?? 0;
          const priceB =
            b.packages[0]?.price ?? b.packages[0]?.adult_price ?? 0;
          return priceA - priceB;
        });
      case "High to low price":
        return [...activities].sort((a, b) => {
          const priceA =
            a.packages[0]?.price ?? a.packages[0]?.adult_price ?? 0;
          const priceB =
            b.packages[0]?.price ?? b.packages[0]?.adult_price ?? 0;
          return priceB - priceA;
        });
      default:
        return activities;
    }
  };

  const filteredSubCategories =
    selectedCategory?.sub_category?.map((subCategory) => subCategory.name) ||
    [];

  const sortedActivities = sortCriteria
    ? sortActivities(filteredActivities, sortCriteria)
    : filteredActivities;

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // -------------------------scroll bar design slick slider --------------

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow"
        style={{
          backgroundColor: theme.palette.primary.main, // Background color of the next arrow
          position: "absolute",
          right: "-30px",
          zIndex: 1,
          top: "40%",
          transform: "translateY(-50%)",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span
          style={{
            color: "white", // Inner arrow color
            fontSize: "13px",
            lineHeight: "30px",
          }}
        >
          &#10095;
        </span>
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow"
        style={{
          backgroundColor: theme.palette.primary.main, // Background color of the previous arrow
          position: "absolute",
          left: "-30px",
          zIndex: 1,
          top: "40%",
          transform: "translateY(-50%)",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span
          style={{
            color: "white", // Inner arrow color
            fontSize: "13px",
            lineHeight: "30px",
          }}
        >
          &#10094;
        </span>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Page title="Categories">
      <Box sx={{ padding: isSmall ? "3rem 2rem" : "3rem 5rem" }}>
        {/* <Button
          onClick={handleBack}
          variant="contained"
          startIcon={<ArrowBack />}
        >
          Back to home page
        </Button> */}

        {/* <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ flex: 2, textAlign:'center', fontSize:'25px' }}
          >
            Things to do in Abu Dhabi
          </Typography> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 0 }}>
            {/* Categories */}
          </Typography>
          <Typography sx={{ color: "grey", fontWeight: "bold" }}>
            {/* View All */}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
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
            <>
              <Box>
                <Box>
                  {categories.length <= 8 ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {categories.map((val, index) => (
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
                          <Typography
                            sx={{
                              mt: 1,
                              fontWeight: "bold",
                              fontSize: "0.9rem",
                            }}
                          >
                            {val.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Slider {...settings}>
                      {categories.map((val, index) => (
                        <Box
                          key={index}
                          onClick={() => handleCategoryClick(val)}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column",
                              mr: 4,
                            }}
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
                            <Typography
                              sx={{
                                mt: 1,
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                              }}
                            >
                              {val.name}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Slider>
                  )}
                </Box>
              </Box>
            </>
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
            sx={{ flex: 2, whiteSpace: "nowrap", fontSize: "1.3rem" }}
          >
            {activityLength} Things to do in Abu Dhabi
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              gap: "10px",
              width: "85%",
            }}
          >
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
