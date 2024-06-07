import { Box, Typography } from '@mui/material'
import React from 'react'

const PreviewCard = () => {
    return (
        <>
            <Box>
                <img src="/preview.png" alt="" style={{ height: '100%', width: '100%' }} />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px 0px" }}>
                    <Box sx={{ backgroundColor: '#EEE', padding: '20px', width: 'fit-content' }}>
                        <Typography>1,000.00 AED</Typography>
                    </Box>
                </Box>
                <Box sx={{ border: '1px solid #EEE', borderRadius: '5px', padding: '30px', display: 'flex' }}>
                    <Box flex={2}>
                        <img src="/preview.png" alt="" style={{ height: '100%', width: '100%' }} />
                    </Box>
                    <Box flex={5}>
                        <Typography>Evening Desert Safari</Typography>
                        <Typography>Evening Desert Safari
                            The atlantis helicopter tour lets you go on a fun helicopter tour of dubai and take in all the mind blowing sights with a birds eye view. Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default PreviewCard