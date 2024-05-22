// CustomCard.js
import React from 'react';
import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { CiStopwatch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const CustomCard = ({ title, description, duration, availability, discountprice, actualprice,handleClick, imageUrl, earnpoints }) => {
    const theme = useTheme();

    return (
        <Box onClick={handleClick} sx={{
            // width: 320,
            // backgroundColor: '#FDF4F1',
            backgroundColor:'white',
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
                <Box sx={{ position: 'absolute', top: 0, right: 0, backgroundColor:theme.palette.primary.main, color:'white', padding: '0.2rem 0.4rem', borderRadius: "0px 5px 0px 0px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box>
                    {earnpoints}
                </Box>

                </Box>
            </Box>

            <Box p={2} sx={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                    {title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '0.9rem', color:'grey' }}>Per person Price</Typography>


<Box gap={1} sx={{display:'flex'}}>
    <Typography sx={{color:'grey', textDecoration:'line-through'}}>{discountprice}</Typography>
    <Typography sx={{color: theme.palette.primary.main, fontWeight:'600'}}>{actualprice}</Typography>

</Box>


                </Box>

<Box sx={{display:'flex', alignItems:'flex-end', justifyContent:'end', textTransform:'none'}}>
<Button variant='contained'>Book Now</Button>

</Box>
            </Box>

        </Box>
    );
};

export default CustomCard;
