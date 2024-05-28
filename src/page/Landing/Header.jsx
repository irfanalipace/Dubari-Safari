import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
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
                padding: isSmall ? '50px 50px' : '0px 50px',
                gap: '30px',
                position: 'relative'
            }}
        >
            <Typography sx={{ fontSize: '48px', fontWeight: 700 }}>
                UFC Flight Night In Abu Dubai
            </Typography>
            <Typography sx={{ fontSize: '18px', width: isSmall ? '100%' : '60%' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas hic corrupti qui eum non amet similique cumque obcaecati earum odit vero adipisci, fuga maxime sint deserunt saepe assumenda fugiat veniam harum, distinctio voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas hic corrupti qui
            </Typography>
            <Box>
                <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '15px 30px', textTransform: 'none', fontSize: '16px', fontWeight: 700 }}>Learn More</Button>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, left: 30, display: 'flex', alignItems: 'center', zIndex: 9999 }}>
                <Button onClick={() => navigate('/feedback')} variant='contained' sx={{
                    backgroundColor: '#FBD107',
                    textTransform: 'none',
                    color: "#000",
                    fontWeight: 600,
                    padding: '5px',
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'left bottom',
                    zIndex: 9999
                }}>
                    Feedback
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
