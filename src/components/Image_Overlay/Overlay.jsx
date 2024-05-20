import { Box, Typography } from "@mui/material";
import React from "react";

const Overlay = ({ title }) => {
  return (
    <Box
      sx={{
        height: "40vh",
        backgroundImage: "url(/pic.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default Overlay;
