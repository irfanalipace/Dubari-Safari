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
                    <img src="/reviewLeft.png" alt="" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>where would you like to write review?</Typography>
                    <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', paddingTop: '50px' }}>
                        <Link to='https://g.page/r/Cee91tzznq9EEBI/review' target='_blank'>
                            <img src="/googel.png" alt="" />
                        </Link>
                        <Link to='https://www.tripadvisor.com/UserReviewEdit-g295424-d27728117-Book_Dubai_Safari-Dubai_Emirate_of_Dubai.html' target='_blank'>
                            <img src="/rename.png" alt="" />
                        </Link>
                        <Link to='https://www.trustpilot.com/review/bookdubaisafari.com' target='_blank'>
                            <img src="/image 67.png" alt="" />
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <img src="/reviewRight.png" alt="" />
                </Box>
            </Box>
            </Page>
        </>
    )
}

export default Reviews