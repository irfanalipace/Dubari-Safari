import { Box, Typography } from "@mui/material";
import React from "react";

const Details = ({ title = "", value = "", v_size = "" }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
      <Typography sx={{ color: "grey", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography color="primary" fontWeight="bold" sx={{ fontSize: v_size }}>
        {value}
      </Typography>
    </Box>
  );
};

export default Details;
