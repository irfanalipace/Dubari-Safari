import { Box, Button, Grid, Rating, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


const RelatedData = () => {
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
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: "0px 20px" }}>
                <Typography sx={{ fontSize: '37px', fontWeight: 700 }}>Other Experience You Might Like</Typography>
                <Typography sx={{ color: theme.palette.primary.textPrimary }}>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</Typography>

                <Grid container spacing={3}>
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((val, ind) => (
                            <Grid item lg={3} md={6} sm={12} xs={12} key={ind}>
                                <Box
                                    onClick={() => navigate(`/details/${val.id}`)}
                                    sx={{
                                        // width: 320,
                                        // backgroundColor: '#FDF4F1',
                                        backgroundColor: "white",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        overflow: "hidden",
                                        // margin: '0 auto',
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
                                        {/* <Box
          sx={{
            position: "absolute",
            bottom: -12,
            left: 10,
            backgroundColor: "white",
            padding: "5px 20px",
            borderRadius: "20px",
          }}
        >
          4.0(23)😊
        </Box>
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            padding: "0.2rem 0.4rem",
            borderRadius: "0px 5px 0px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>{earnpoints}</Box>
        </Box> */}
                                    </Box>

                                    <Box
                                        p={2}
                                        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                                    >
                                        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
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
                                                <Typography
                                                    sx={{ color: "grey", textDecoration: "line-through" }}
                                                >
                                                    {val.discount_offer}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    {/* {actualprice} */}
                                                </Typography>

                                                {val.packages && val.packages.length > 0 && (
                                                    <Typography
                                                        fontWeight="bold"
                                                        color={theme.palette.primary.main}
                                                    >
                                                        {val.packages[0].category === "private"
                                                            ? `$ ${val.packages[0].price}`
                                                            : `$ ${val.packages[0].adult_price}`}
                                                    </Typography>
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
                                            // value={value}
                                            // onChange={(event, newValue) => {
                                            //   setValue(newValue);
                                            // }}
                                            />
                                            <Button variant="contained">Book Now</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ color: theme.palette.primary.main, paddingTop: '50px', fontSize: '20px', fontWeight: 600, margin: '0 auto' }}>
                            No Data found
                        </Typography>
                    )}
                </Grid>



                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5, mb: 5 }}>
                    <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '10px 30px', borderRadius: '20px', textTransform: 'none', fontSize: '1rem', fontWeight: 700 }}>See All <ArrowForwardIcon /> </Button>
                </Box>
            </Box>

        </>
    )
}

export default RelatedData