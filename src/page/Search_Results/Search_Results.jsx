import React from "react";
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
  return (
    <Page title="Search Results">
      <Box sx={{ p: 5 }}>
        <Button variant="contained" startIcon={<ArrowBack />} onClick={handleBackClick}>
          Back to homepage
        </Button>
        <Box sx={{ display: "flex", mt: 4, gap: 4 }}>
          <Box flex={1}>
            <LeftAside />
          </Box>
          <Box flex={3}>
            <RightAside/>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Search_Results;
