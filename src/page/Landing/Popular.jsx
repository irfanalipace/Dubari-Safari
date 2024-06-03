import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import CustomCard from '../Component/CustomCard';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cardData = [
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

const Popular = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/location-detail')
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: "0px 20px" }}>
                <Typography sx={{ fontSize: '37px', fontWeight: 700 }}>Most Popular Things to do in Dubai</Typography>
                <Typography sx={{ color: theme.palette.primary.textPrimary }}>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</Typography>
                <Box sx={{ padding: '30px 50px' }}>
                    <Grid container spacing={2}>
                        {cardData.map((val, ind) => (
                            <Grid key={ind} item lg={3} xs={12} sm={12} md={6}>
                                <CustomCard
                                    handleClick={handleClick}
                                    earnpoints={val.earnpoints}
                                    title={val.title}
                                    discountprice={val.discountprice}
                                    actualprice={val.actualprice}

                                    imageUrl={val.imageUrl}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                        <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '10px 30px', borderRadius: '20px', textTransform: 'none', fontSize: '1rem', fontWeight: 700 }}>See All <ArrowForwardIcon /> </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Popular;
