import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AllActivities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const activityData = [
  //   {
  //     icon: "/activity1icon.png",
  //     name: "Desert Safari",
  //     path: "/desert-safari",
  //   },
  //   {
  //     icon: "/activity2icon.png",
  //     name: "Sightseeing",
  //     path: "/sightseeing",
  //   },
  //   {
  //     icon: "/activity3icon.png",
  //     name: "Adventure",
  //     path: "/adventure",
  //   },
  //   {
  //     icon: "/activity4icon.png",
  //     name: "Attractions & Experiences",
  //     path: "/attractions-experiences",
  //   },
  //   {
  //     icon: "/activity5icon.png",
  //     name: "Cruising & Yachting",
  //     path: "/cruising-yachting",
  //   },
  //   {
  //     icon: "/activity6icon.png",
  //     name: "Transportation",
  //     path: "/transportation",
  //   },
  // ];

  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
        <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          All Activities
        </Typography>

        {/* {activityData.map((val, ind) => (
            <Box key={ind} sx={{ display: "flex", alignItems: "center" }} gap={1}>
              <img src={val.icon} alt={`${val.name} icon`} />
              <Button
                sx={{ textTransform: "none", color: "grey" }}
                onClick={() => navigate(val.path)}
              >
                {val.name}
              </Button>
            </Box>
          ))} */}
      </Box>
    </Box>
  );
};

export default AllActivities;
