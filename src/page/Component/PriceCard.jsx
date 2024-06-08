import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  CalendarMonthOutlined,
  CalendarViewMonthOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const PriceCard = ({ data }) => {
  const theme = useTheme();

  console.log(data, 'll')


  return (
    <>
      <Box
        sx={{
          padding: "3rem 5%",
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}
        >
          {data?.activity?.name}
        </Typography>
        <Divider />

        <Box sx={{ marginTop: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
              <Typography
                sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
              >
                Adult
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "600" }}>
              {data?.adult}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
              <Typography
                sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
              >
                Child
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "600" }}>
              {data?.child}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
              <Typography
                sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
              >
                Infant
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "600" }}>
              {data?.infant}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarViewMonthOutlined style={{ color: "#000" }} />
              <Typography
                sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
              >
                Date
              </Typography>
            </Box>

            <Typography sx={{ fontWeight: "600" }}>{data?.date}</Typography>
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

            <Typography sx={{ fontWeight: "600" }}>AED {data?.total_amount}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Typography
              sx={{ color: "black", fontWeight: "600", fontSize: "1.5rem" }}
            >
              Total Amount
            </Typography>

            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "2rem",
                color: theme.palette.primary.main,
              }}
            >
              AED {data?.total_amount}
            </Typography>
          </Box>
          <Typography sx={{ color: "#90a3bf" }}>
            Overall price and includes all Tax
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PriceCard;
