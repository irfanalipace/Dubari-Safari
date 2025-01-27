import { Box, Typography, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router';

const UnAuthDetail = () => {
    const theme = useTheme()
    const { state } = useLocation();

    const packageData = state?.allData;
    const base = 'https://dubaisafari.saeedantechpvt.com/';
    console.log(packageData, 'stateay');

    return (
        <Box sx={{ padding: '20px' }}>
            {packageData && packageData.map((item, index) => {
                console.log(item, 'item');
                return (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: '5px', overflow: 'hidden', border: '1px solid #E1E1E1', marginBottom: '20px', padding: '10px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box flex={1}>
                                <CardMedia
                                    component="img"
                                    sx={{ flex: 2, width: '100%', height: '30vh', objectFit: 'cover', borderRadius: '5px' }}
                                    image={`${base}${item?.package?.activity?.image_url}`} // Accessing image_url
                                    alt="image"
                                />
                            </Box>

                            <Box flex={3} sx={{ flex: 5, display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {item?.package?.activity?.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {item?.package?.activity?.description}
                                    </Typography>

                                </CardContent>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Category: <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.package?.category}</span></Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Adult:  <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.adult}</span> Child: <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.child}</span> Infant: <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.infant}</span></Typography>
                            {/* {item?.package?.category === 'private' ? (
                                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
                                    Price: <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.package?.price}</span>
                                </Typography>
                            ) : (
                                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
                                    Adult: {item?.adult} Child: {item?.child} Infant: {item?.infant}
                                </Typography>
                            )} */}
                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
                                Total Amount: <span style={{ fontWeight: 500, color: theme.palette.primary.main }}>{item?.total_amount}</span>
                            </Typography>

                        </Box>
                    </Card>
                );
            })}
        </Box>
    );
};

export default UnAuthDetail;
