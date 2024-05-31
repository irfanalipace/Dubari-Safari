import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const RelatedData = () => {

    const theme = useTheme()




    const data = [
        {
            earnpoints: 'Earn R points',
            title: "Morning Desert Safari",

            duration: '3 Hours, 5 minutes',
            availability: "Tomorrow",

            discountprice: '$3,500',
            actualprice: '$2,500',
            imageUrl: "/header.png"
        },

        {
            earnpoints: 'Earn R points',
            title: "Morning Desert Safari",

            duration: '3 Hours, 5 minutes',
            availability: "Tomorrow",

            discountprice: '$3,500',
            actualprice: '$2,500',
            imageUrl: "/header.png"
        },

        {
            earnpoints: 'Earn R points',
            title: "Morning Desert Safari",

            duration: '3 Hours, 5 minutes',
            availability: "Tomorrow",

            discountprice: '$3,500',
            actualprice: '$2,500',
            imageUrl: "/header.png"
        },
        {
            earnpoints: 'Earn R points',
            title: "Morning Desert Safari",

            duration: '3 Hours, 5 minutes',
            availability: "Tomorrow",

            discountprice: '$3,500',
            actualprice: '$2,500',
            imageUrl: "/header.png"
        },

    ];





    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: "0px 20px" }}>
                <Typography sx={{ fontSize: '37px', fontWeight: 700 }}>Other Experience You Might Like</Typography>
                <Typography sx={{ color: theme.palette.primary.textPrimary }}>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</Typography>

                <Grid container spacing={2}>


                    {
                        data.map((val, ind) => (
                            <Grid key={ind} item lg={3} xs={12} sm={12} md={6}>


                                <Box
                                    //   onClick={handleClick}
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
                                            src={val.imageUrl}

                                            alt="Header"
                                            style={{
                                                width: "100%",
                                                height: "30vh",
                                                borderRadius: "12px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Box
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
                                        <Box
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
                                            {/* <Box>{earnpoints}</Box> */}
                                            <Box>end point</Box>

                                        </Box>
                                    </Box>

                                    <Box p={2} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                                            title
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
                                                <Typography sx={{ color: "grey", textDecoration: "line-through" }}>
                                                    3500
                                                </Typography>
                                                <Typography
                                                    sx={{ color: theme.palette.primary.main, fontWeight: "600" }}
                                                >
                                                    2500
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-end",
                                                justifyContent: "end",
                                                textTransform: "none",
                                            }}
                                        >
                                            <Button variant="contained">Book Now</Button>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        ))
                    }








                </Grid>



                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5, mb: 5 }}>
                    <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '10px 30px', borderRadius: '20px', textTransform: 'none', fontSize: '1rem', fontWeight: 700 }}>See All <ArrowForwardIcon /> </Button>
                </Box>
            </Box>

        </>
    )
}

export default RelatedData