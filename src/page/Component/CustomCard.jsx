// CustomCard.js
import React from 'react';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { CiStopwatch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const CustomCard = ({ title, description, duration, availability, price, imageUrl }) => {
    const theme = useTheme();

    return (
        <Box sx={{
            // width: 320,
            backgroundColor: '#FDF4F1',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            // margin: '0 auto',
            padding: "5px"
        }}>
            <Box sx={{ position: 'relative' }}>
                <img src={imageUrl} alt="Header" style={{ width: '100%', height: '30vh', borderRadius: '12px', objectFit: 'cover', }} />
                <Box sx={{ position: 'absolute', bottom: -12, left: 10, backgroundColor: 'white', padding: '5px 20px', borderRadius: "20px" }}>
                    4.0(23)😊
                </Box>
                <Box sx={{ position: 'absolute', top: 12, right: 12, backgroundColor: 'white', padding: '0px', borderRadius: "5px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CiHeart size={30} />
                </Box>
            </Box>

            <Box p={2} sx={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: '14px', color: theme.palette.primary.textPrimary }}>
                    {description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '16px', color: theme.palette.primary.textPrimary }}>Duration:</Typography>
                    <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}><CiStopwatch style={{ color: theme.palette.primary.main }} /> <span>{duration}</span> </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '18px', color: theme.palette.primary.main }}>Available {availability}</Typography>
                    <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>{price}</Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default CustomCard;
