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
  useTheme,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PkgCard from "../../components/Pkg_Card/PkgCard";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getCategories } from "../../store/actions/categoriesActions";
import Loader from "../../components/Loader/Loader";

const Categories = () => {
  const [age, setAge] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
      .then((result) => {
        // console.log(result, 'jj')
        const initialCategory = result.data.payload[0];
        setCategories(result.data.payload);
        setSelectedCategory(initialCategory);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "ERRR");
      });
  }, [dispatch]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const cardData = [{ title: "Show Cruise Dubai", del: 2650, price: 2000 }];

  console.log(categories, 'jj')
  return (
    <Page title="Categories">
      <Box sx={{ p: 10 }}>
        <Button
          onClick={handleBack}
          variant="contained"
          startIcon={<ArrowBack />}
        >
          Back to home page
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 3 }}>
            Categories
          </Typography>
          <Typography sx={{ color: "grey", fontWeight: "bold" }}>
            View All
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 6 }}>
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
                    height: "150px",
                    width: "150px",
                    border: `4px solid ${selectedCategory === val
                      ? theme.palette.primary.main
                      : "transparent"
                      }`,
                    cursor: "pointer",
                  }}
                />
                <Typography sx={{ mt: 1, fontWeight: "bold" }}>
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
            Things to do in Abu Dhabi
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Typography fontWeight="bold" sx={{ whiteSpace: "nowrap", mr: 2 }}>
              Sort result by
            </Typography>
            <FormControl fullWidth sx={{ mr: 2 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {selectedCategory?.activity?.length === 0 ? (
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
            selectedCategory?.activity?.map((val, index) => (
              <Grid item xs={12} lg={3} key={index}>
                <PkgCard data={val} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Page>
  );
};

export default Categories;
