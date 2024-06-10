import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const handleLearn = () => {
        navigate('/desert-safari')
    }
    return (
        <Box
            sx={{
                backgroundImage: 'url(/header.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '533px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'left',
                padding: isSmall ? '20px 20px' : '0px 50px',
                gap: '30px',
                position: 'relative'
            }}
        >
            <Typography sx={{ fontSize: isSmall ? '25px' : '48px', fontWeight: 700, fontFamily: 'GT Eesti Display Trial, sans-serif',

             }}>
                Do More with bookdubaisafari.com
            </Typography>
            <Typography sx={{ fontSize: '17px', width: isSmall ? '100%' : '60%', fontFamily: 'GT Eesti Display Trial, sans-serif' }}>
            Choose from our curated selection of activities, including desert tours, adventures, city tours, yacht
cruises, and water adventures. Immerse yourself in the best experiences, tailored for both tourists and
residents
            </Typography>
            <Box>
                <Button onClick={handleLearn} variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '15px 30px', textTransform: 'none', fontSize: '16px', fontWeight: 700 }}>Learn More</Button>
            </Box>
            <Box sx={{ position: 'fixed', bottom: 20, left: 30, display: 'flex', alignItems: 'center', zIndex: 9999 }}>
                <Button onClick={() => navigate('/feedback')} variant='contained' sx={{
                    backgroundColor: '#FBD107',
                    textTransform: 'none',
                    color: "#000",
                    fontWeight: 600,
                    paddingTop: '10px',
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'left bottom',
                    zIndex: 9999
                }}>
                    Feedback
                </Button>
            </Box>
        </Box >
    );
};

export default Header;
