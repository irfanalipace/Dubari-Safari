import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const SearchCard = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Card sx={{ p: 2 }}>
        {/* <CardContent> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "30vh",
            gap: 4,
          }}
        >
          <Box flex={1}>
            <img
              src="/jeep.jpg"
              style={{ width: "100%", borderRadius: "10px", height: "220px" }}
            />
          </Box>
          <Box flex={3}>Box 2</Box>
        </Box>
        {/* </CardContent> */}
      </Card>
    </Box>
  );
};

export default SearchCard;
