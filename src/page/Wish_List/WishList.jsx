import React from "react";
import Page from "../../components/page";
import { Box } from "@mui/material";
import SearchCard from "../../components/SearchCard/SearchCard";
const WishList = () => {
  return (
    <Page title="Wishlist">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          px: 10,
        }}
      >
        <SearchCard fill={true} />
      </Box>
    </Page>
  );
};

export default WishList;
