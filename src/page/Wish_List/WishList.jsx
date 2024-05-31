import React from "react";
import Page from "../../components/page";
import { Box } from "@mui/material";
import SearchCard from "../../components/SearchCard/SearchCard";
const WishList = () => {
  return (
    <Page title="Wishlist | Arabia Horizon">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
flexDirection:'column',
          paddingBottom:'2rem',
          px: 10,
        }}
      >
        <SearchCard fill={true} />
      </Box>
    </Page>
  );
};

export default WishList;
