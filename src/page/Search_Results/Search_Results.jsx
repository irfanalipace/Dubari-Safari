import React, { useState } from "react";
import Page from "../../components/page";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";
import { useLocation, useNavigate } from "react-router";
const Search_Results = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000000);

  const handleCategorySelect = (categoryId, subcategoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
  };


  const handleBudgetChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <Page title="Search Results">
      <Box sx={{ p: 5 }}>
        <Button variant="contained" startIcon={<ArrowBack />} onClick={handleBackClick}>
          Back to homepage
        </Button>
        <Box sx={{ display: "flex", mt: 4, gap: 4 }}>
          <Box flex={1}>
            <LeftAside onCategorySelect={handleCategorySelect} onBudgetChange={handleBudgetChange}/>
          </Box>
          <Box flex={3}>
            <RightAside selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} minPrice={minPrice} maxPrice={maxPrice}/>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Search_Results;
