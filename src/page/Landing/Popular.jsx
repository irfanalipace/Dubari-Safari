import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomCard from '../Component/CustomCard';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { getPopularActivities } from '../../store/actions/categoriesActions';


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
        <Box sx={{
            padding: '20px 50px',


            textAlign: 'center'
        }}>
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px',
                padding: isSmall ? '0px' : '0px 20px'
            }}>
                <Typography sx={{ fontSize: isSmall ? '25px' : '37px', fontWeight: 700, }}>Most Popular Things to do in Dubai</Typography>
                <Typography sx={{ color: theme.palette.primary.textPrimary }}>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem r</Typography>
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
