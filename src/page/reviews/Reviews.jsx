import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/page'
const Reviews = () => {
    return (
        <>
        <Page title='Feedback'>
            <Box sx={{ display: 'flex', alignItems: '', justifyContent: 'space-between', padding: '20px', mt:7, mb:7 }}>
                <Box>
                    <img src="/reviewLeft.svg" alt="" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>where would you like to write review?</Typography>
                    <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', paddingTop: '10px' }}>
                        <Link to='https://g.page/r/Cee91tzznq9EEBI/review' target='_blank'>
<Box>

<img src="/googlee.webp" alt="" width={'150px'}/>


</Box>
                        </Link>
                        <Link to='https://www.tripadvisor.com/UserReviewEdit-g295424-d27728117-Book_Dubai_Safari-Dubai_Emirate_of_Dubai.html' target='_blank'>
<Box>
<img src="/tripadvisor.png" alt="" width='150px' />

</Box>
                        </Link>
                        <Link to='https://www.trustpilot.com/review/bookdubaisafari.com' target='_blank'>
                        <Box>
                        <img src="/trustpilot.png" alt="" width='150px' />
                        </Box>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <img src="/reviewRight.svg" alt="" />
                </Box>
            </Box>
            </Page>
        </>
    )
}

export default Reviews