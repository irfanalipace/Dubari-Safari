import { Box, Button, Grid, Rating, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const RelatedData = () => {
  const theme = useTheme();
  const [value, setValue] = useState(5);
  const base = "https://dubaisafari.saeedantechpvt.com/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const popularActivities = useSelector(
    (state) => state.popularActivities.popularActivities.payload
  );

  const filteredActivities = popularActivities
    ? popularActivities
        .filter((activity) => activity.most_popular_activity === 1)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 4)
    : [];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          padding: "0px 20px",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
          Other Experience You Might Like
        </Typography>
        <Typography sx={{ color: theme.palette.primary.textPrimary, fontSize:'14px' }}>
          Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
          sit amet consectetur
        </Typography>

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
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        textAlign: "start",
                        fontWeight: 600,
                        color: theme.palette.primary.textPrimary,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxHeight: "4.5rem",
                        lineHeight: "1.5rem",

                      }}
                    >
                      {val.name}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.8rem", color: "grey" }}>
                        Per person Price
                      </Typography>

                      <Box gap={1} sx={{ display: "flex", alignItems:'center' }}>










                        {val.packages && val.packages.length > 0 && (
                          <>

                          {val?.discount_offer > 0 && (


<Typography
      sx={{
        color: "grey",
        textDecoration: "line-through",
        fontSize:'0.7rem'
      }}
    >
      {val.packages[0].category === "private"
        ? `AED ${val.packages[0].price}`
        : `AED ${val.packages[0].adult_price}`}
    </Typography>

)}


                            <Typography
                              fontWeight="bold"
                              sx={{fontSize:'0.8rem'}}
                              color={theme.palette.primary.main}
                            >
                              {val.packages[0].category === "private"
                                ? `AED ${Math.round(
                                    val.packages[0].price -
                                      (val.packages[0].price *
                                        val.discount_offer) /
                                        100
                                  )}`
                                : `AED ${Math.round(
                                    val.packages[0].adult_price -
                                      (val.packages[0].adult_price *
                                        val.discount_offer) /
                                        100
                                  )}`}
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
                     <Box>
                     <Typography sx={{fontSize:'0.8rem'}}>{val?.reviews?.length}</Typography>

                     <Rating size="small" name="simple-controlled" value={value} readOnly />
                     </Box>
                      <Button variant="contained" sx={{fontSize:'0.7rem'}}>Book Now</Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "10vh",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  textAlign: "center",
                  paddingTop: "50px",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                No Data found
              </Typography>
            </Box>
          )}
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
            mb: 5,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              padding: "10px 30px",
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}

            onClick={()=>{
              navigate('/desert-safari')
            }}
          >
            See All {" "} <ArrowForwardIcon />{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RelatedData;
