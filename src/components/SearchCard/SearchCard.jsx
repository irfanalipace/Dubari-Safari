import {
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
const SearchCard = ({ fill, filteredActivities }) => {
  const theme = useTheme();

  console.log(filteredActivities, 'card data')

  return (
    <Box sx={{ mt: 3 }}>
      <Card sx={{ p: 2, background: "#FDF4F1" }}>
        <Box
          sx={{
            display: "flex",
            minHeight: "30vh",
            gap: 4,
          }}
        >
          <Box flex={1}>
            <img
              src="/jeep.jpg"
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "260px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box flex={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontWeight="bold" variant="h6">
                Atlantis Helicoptor Tour
              </Typography>
              <IconButton>
                {fill ? (
                  <FavoriteIcon sx={{ fontSize: "35px ", color: "red" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: "35px " }} />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ color: theme.palette.primary.main }}
              />
              <Typography sx={{ ml: 1 }}>94 reviews / 7k Booked</Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography sx={{ color: "grey" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="grey">
                Duration
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <AccessTimeIcon sx={{ color: theme.palette.primary.main }} />
                <Typography sx={{ fontWeight: "bold" }}>
                  3 hours, 51 minutes
                </Typography>
                <ThumbUpAltIcon sx={{ color: theme.palette.primary.main }} />
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="h6" color="green">
                Available Today
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                $2500
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SearchCard;
