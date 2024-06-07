import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiBookLine } from "react-icons/ri";
import { VscOpenPreview } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

const chooseData = [
    { icon: TfiHeadphoneAlt, title: 'Superior Customer Support', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { icon: RiBookLine, title: 'Fast & Easy Booking', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { icon: VscOpenPreview, title: 'Genuine Reviews & Photos', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { icon: CgWebsite, title: 'No Hidden Fees', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

const ChooseUs = () => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: "0px 20px" }}>
            <Typography sx={{  fontWeight: 700,fontSize: isSmall ? '25px' : '37px', }}>Why Choose Us</Typography>
            <Typography sx={{ color: theme.palette.primary.textPrimary, textAlign: 'center' }}>Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</Typography>
            <Box style={{ padding: isSmall ? '30px 17px' : ''}}>
                <Grid container spacing={5}>
                    {chooseData.length > 0 ? (
                        chooseData.map((val, ind) => (
                            <Grid key={ind} item lg={3} xs={12} sm={12} md={4}>
                                <Box sx={{ display: "flex", flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                                    <val.icon size={25} style={{ color: 'white', backgroundColor: theme.palette.primary.main, padding: '20px', borderRadius: '10px' }} />
                                    <Typography sx={{ fontSize: '18px', fontWeight: 700, textAlign: 'center' }}>{val.title}</Typography>
                                    <Typography sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>{val.description}</Typography>
                                </Box>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ color: 'red', textAlign: 'center', padding: 0 }}>
                            No data found
                        </Typography>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default ChooseUs;
