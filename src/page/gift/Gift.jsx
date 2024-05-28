import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { FiGift } from "react-icons/fi";
import GiftDetail from './GiftDetail';


const Gift = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <>
            <Box sx={{ backgroundColor: "#ffc0b3", height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: "10px" }}>
                <FiGift style={{ color: '#DD404E', }} size={50} />
                <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#DD404E" }}>The Arabic Horizons Gift</Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#707070", textAlign: 'center', width: '70%' }}>Tired of getting loved ones the same old stuff?. Let them choose the experience of a lifetime. Our gift cards are valid for thousands of things to do all around the world.</Typography>
            </Box>
            <GiftDetail />
        </>
    )
}

export default Gift