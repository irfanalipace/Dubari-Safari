import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomCard from '../Component/CustomCard';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { getPopularActivities } from '../../store/actions/categoriesActions';


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
    const handleActivities = () => {
        navigate('/desert-safari')
    }
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <Box sx={{ padding: '20px 50px',


         textAlign:'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px',
            padding: isSmall ? '0px': '0px 20px'
             }}>
                <Typography sx={{fontSize: isSmall ? '25px' : '37px', fontWeight: 700, }}>Our Most Recommended Tours and Activities</Typography>
                <Typography sx={{ color: theme.palette.primary.textPrimary }}>Dubai is the place to seek out everything you imagine and beyond. Find it all here Things to do in Dubai,
                Culture, nature, thrills, and more...</Typography>
                <Box sx={{ padding: '30px 50px' }}>



                </Box>
            </Box>
            <CustomCard />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '10px 30px', borderRadius: '20px', textTransform: 'none', fontSize: '1rem', fontWeight: 700 }} onClick={handleActivities}>See All <ArrowForwardIcon /> </Button>
            </Box>
        </Box>
    );
};

export default Popular;
