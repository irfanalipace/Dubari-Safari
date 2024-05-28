import { Box, Typography } from '@mui/material'
import React from 'react'

const Reviews = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: '', justifyContent: 'space-between', padding: '20px', }}>
                <Box>
                    <img src="/reviewLeft.png" alt="" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>Where Would you like to put your reviews ?</Typography>
                    <Box sx={{ display: 'flex', gap: '30px', alignItems: '', justifyContent: '' }}>
                        <img src="/googel.png" alt="" />
                        <img src="/rename.png" alt="" />
                        <img src="/image 67.png" alt="" />
                    </Box>
                </Box>
                <Box>
                    <img src="/reviewRight.png" alt="" />
                </Box>
            </Box>
        </>
    )
}

export default Reviews