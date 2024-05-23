import { Box, Divider, LinearProgress, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

const ReviewsDetail = () => {
    const [value, setValue] = useState(5);

    return (
        <>
            <Box sx={{ padding: '25px 0px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>Louvre Abu Dhabi Reviews</Typography>
                <Divider sx={{ width: '100%' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography sx={{ fontSize: '42px' }}>5.0/5.0</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: '22px' }}>5 stars</Typography>
                            <Rating
                                name="simple-controlled"
                                value={5}
                                readOnly
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: '22px' }}>4 stars</Typography>
                            <Rating
                                name="simple-controlled"
                                value={4}
                                readOnly
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: '22px' }}>3 stars</Typography>
                            <Rating
                                name="simple-controlled"
                                value={3}
                                readOnly
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: '30%', paddingRight: '30px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LinearProgress variant="determinate" value={80} sx={{ flexGrow: 1, marginRight: '10px' }} />
                            <Typography sx={{ width: '100px' }}>78/66</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LinearProgress variant="determinate" value={50} sx={{ flexGrow: 1, marginRight: '10px' }} />
                            <Typography sx={{ width: '100px' }}>78/66</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LinearProgress variant="determinate" value={80} sx={{ flexGrow: 1, marginRight: '10px' }} />
                            <Typography sx={{ width: '100px' }}>78/66</Typography>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
                    <Box>
                        <img src="/jeep.jpg" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                        <Typography>Muhammad Moaz</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>Muhammd Moaz in etc places</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi alias error perferendis, ipsum fugiat aut sunt facere odit sed repellendus laudantium quas incidunt, corporis voluptas quo. Soluta neque, eum molestiae adipisci eius suscipit dicta doloribus numquam rem cum illo praesentium sequi ducimus tempora?</Typography>
                    </Box>
                    <Box>

                        <Typography sx={{ fontSize: '22px' }}>5.0/5.0</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ backgroundColor: 'green', padding: "5px", color: 'white', borderRadius: '5px', textAlign: 'center' }}>Excellent</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ReviewsDetail;
