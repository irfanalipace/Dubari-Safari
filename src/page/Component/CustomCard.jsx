// CustomCard.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPopularActivities } from "../../store/actions/categoriesActions";
import { useNavigate } from "react-router";

const CustomCard = () => {
  const theme = useTheme();
  const [value, setValue] = useState(5);
  const base = "https://dubaisafari.saeedantechpvt.com/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const popularActivities = useSelector((state) => state.popularActivities.popularActivities.payload)

  const filteredActivities = popularActivities
    ? popularActivities
      .filter((activity) => activity.most_popular_activity === 1)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 8)
    : [];

  // useEffect(()=>{
  //   dispatch(getPopularActivities())
  // },[])

  return (
    <>
      <Grid container spacing={3}>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((val, ind) => (
            <Grid item lg={3} md={6} sm={12} xs={12} key={ind}>
              <Box
                onClick={() => navigate(`/details/${val.id}`)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  padding: "5px",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={`https://dubaisafari.saeedantechpvt.com/storage/uploads/media/${val.image}`}
                    alt="Header"
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
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography sx={{ fontSize: "1.2rem", textAlign:'start', fontWeight: 600 }}>
                    {val.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem", color: "grey" }}>
                      Per person Price
                    </Typography>

                    <Box gap={1} sx={{ display: "flex" }}>
                      {val.packages && val.packages.length > 0 && (
                        <>
                          <Typography
                            sx={{ color: "grey", textDecoration: "line-through" }}
                          >
                            {val.packages[0].category === "private"
                              ? `$ ${val.packages[0].price}`
                              : `$ ${val.packages[0].adult_price}`}
                          </Typography>
                          {/* <Typography
                            fontWeight="bold"
                            color={theme.palette.primary.main}
                          >
                            {val.packages[0].category === "private"
                              ? `$ ${(val.packages[0].price - (val.packages[0].price * val.discount_offer / 100)).toFixed(2)}`
                              : `$ ${(val.packages[0].adult_price - (val.packages[0].adult_price * val.discount_offer / 100)).toFixed(2)}`}
                          </Typography> */}

                          <Typography
                            fontWeight="bold"
                            color={theme.palette.primary.main}
                          >
                            {val.packages[0].category === "private"
                              ? `$ ${Math.round(val.packages[0].price - (val.packages[0].price * val.discount_offer / 100))}`
                              : `$ ${Math.round(val.packages[0].adult_price - (val.packages[0].adult_price * val.discount_offer / 100))}`}
                          </Typography>
                        </>
                      )}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textTransform: "none",
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      readOnly
                    />
                    <Button variant="contained">Book Now</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', width: '100%' }}>
            <Typography sx={{ color: theme.palette.primary.main, textAlign: "center", paddingTop: '50px', fontSize: '20px', fontWeight: 600 }}>
              No Data found
            </Typography>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default CustomCard;
