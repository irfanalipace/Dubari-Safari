import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getHomeImage } from '../../store/actions/setting';
import Cookies from 'js-cookie'; // Import js-cookie library

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const handleLearn = () => {
        navigate('/desert-safari');
    };
    const dispatch = useDispatch();
    const [imageH, setImageH] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imageUrlFromCookie = Cookies.get('imageUrl');
        if (imageUrlFromCookie) {
            setImageUrl(imageUrlFromCookie);
        } else {
            (async () => {
                try {
                    const result = await dispatch(getHomeImage());
                    setImageH(result.data.payload || []); // Ensure payload is an array
                    // Set the imageUrl in a cookie
                    const imageUrl = result.data.payload.length > 0 ? result.data.payload[0].image_url : '';
                    Cookies.set('imageUrl', imageUrl);
                    setImageUrl(imageUrl);
                } catch (err) {
                    console.log(err);
                }
            })();
        }
    }, [dispatch]);

    return (
        <Box
            sx={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '433px',
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
            <Typography sx={{
                fontSize: isSmall ? '25px' : '48px', fontWeight: 500,
            }}>
                Do More with bookdubaisafari.com
            </Typography>
            <Typography sx={{ fontSize: '17px', width: isSmall ? '100%' : '60%', }}>
                Choose from our curated selection of activities, including desert tours, adventures, city tours, yacht
                cruises, and water adventures. Immerse yourself in the best experiences, tailored for both tourists and
                residents
            </Typography>
            <Box>
                <Button onClick={handleLearn} variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: "white", padding: '10px 30px', textTransform: 'none', fontSize: '16px', fontWeight: 500 }}>Learn More</Button>
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
        </Box>
    );
};

export default Header;
