import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { FiGift } from "react-icons/fi";
import GiftDetail from './GiftDetail';
import { useLocation } from 'react-router-dom'; // Import useLocation

const Gift = () => {
    const location = useLocation(); // Get the location object

    // Access the state data passed from the previous page
    const { state } = location;
    const { ac_data } = state || {};
    // console.log(ac_data, 'gift')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) // Ensure useEffect has dependencies array

    return (
        <>
            <Box sx={{ backgroundColor: "#ffc0b3", height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: "10px" }}>
                <FiGift style={{ color: '#DD404E', }} size={50} />
                <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#DD404E" }}>The Arabic Horizons Gift</Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#707070", textAlign: 'center', width: '70%' }}>Tired of getting loved ones the same old stuff?. Let them choose the experience of a lifetime. Our gift cards are valid for thousands of things to do all around the world.</Typography>
            </Box>
            {/* Pass the data to the GiftDetail component */}
            <GiftDetail ac_data={ac_data} />
        </>
    )
}

export default Gift
