import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const PriceCard = () => {

    const theme= useTheme()

  return (
    <>
      <Box
        sx={{
          padding: "3rem 5%",
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}
        >
          Morning Desert Safari
        </Typography>
        <Divider />

        <Box sx={{ marginTop: "2rem" }}>
          <Typography>25 Jul 2024</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#90a3bf" }} />
              <Typography sx={{ color: "#90a3bf" }}> 5 x Adult</Typography>
            </Box>

            <Typography sx={{ fontWeight: "600" }}>AED 0</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#90a3bf" }} />
              <Typography sx={{ color: "#90a3bf" }}> 4 x Child</Typography>
            </Box>

            <Typography sx={{ fontWeight: "600" }}>AED 0</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#90a3bf" }} />
              <Typography sx={{ color: "#90a3bf" }}> 5 x Infant</Typography>
            </Box>

            <Typography sx={{ fontWeight: "600" }}>AED 0</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Typography sx={{ color: "#90a3bf" }}>Total</Typography>

            <Typography sx={{ fontWeight: "600" }}>AED 884.00</Typography>
          </Box>


          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Typography sx={{ color: "black", fontWeight:'600', fontSize:'1.5rem' }}>Total Amount</Typography>

            <Typography sx={{ fontWeight: "600", fontSize:'2rem', color:theme.palette.primary.main }}>$ 300</Typography>
          </Box>
          <Typography sx={{ color: "#90a3bf" }}>Overall price and includes all Tax</Typography>



        </Box>
      </Box>
    </>
  );
};

export default PriceCard;
