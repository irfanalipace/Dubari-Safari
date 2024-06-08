import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getPopularActivities } from "../../store/actions/categoriesActions";

const Tab2Card = (props) => {
  const theme = useTheme();

  const base = "https://dubaisafari.saeedantechpvt.com/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 15).join(" ") + "...";
    } else {
      return description;
    }
  };

  const popularActivities = useSelector((state) => state.popularActivities.popularActivities.payload);

  const filteredActivities = popularActivities
    ? popularActivities
      .filter((activity) => activity.home_activity === 1)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3)
    : [];

  return (
    <>
      <Grid container sx={{ alignItems: "center" }} spacing={5}>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((val, ind) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <Box
                onClick={() => navigate(`/details/${val.id}`)}
                sx={{

height:'22rem',
                  // width: 320,
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  padding: "5px",
                  textAlign: "start",
                
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={`https://dubaisafari.saeedantechpvt.com/storage/uploads/media/${val.image}`}
                    alt="Header image"
                    style={{
                      width: "100%",
                      height: "30vh",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  p={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1px",
                    alignItems: "start",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                    {val.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: theme.palette.primary.textPrimary,
                    }}
                  >
                    {truncateDescription(val.description)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography sx={{ color: theme.palette.primary.main, textAlign: "center", paddingTop: '50px', fontSize: '20px', fontWeight: 600 }}>
            No Activities found
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Tab2Card;
