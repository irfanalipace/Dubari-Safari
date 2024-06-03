import React, { useState } from 'react';
import { Grid, Button, Modal, Box, IconButton, useTheme, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';

const DetailSlider = ({ data1 }) => {
    console.log(data1, 'fff')
    const base = 'https://dubaisafari.saeedantechpvt.com/';
    const navigate = useNavigate()
    const theme = useTheme()
    const initialImages = [
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 1' },
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 2' },
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 3' },
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 4' },
        { itemImageSrc: '/cardimage.png', alt: 'Image 5' },
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 6' },
        { itemImageSrc: '/cardimage.png', alt: 'Image 7' },
        { itemImageSrc: '/specialofferimage.png', alt: 'Image 8' },
        { itemImageSrc: '/cardimage.png', alt: 'Image 9' },
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleBack = () => {
        navigate('/desert-safari')
    }
    const img = data1?.activity_images;
    console.log(img, 'jjj')
    return (
        <div>
            <Grid container spacing={0.5}>
                <Grid item xs={8} sx={{ position: 'relative' }}>
                    <img src={`${base}${img?.[0]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '80vh', objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', top: 50, left: 50 }}>

                        <Button onClick={handleBack} variant='standard' sx={{
                            fontSize: '14px', backgroundColor: '#F3F3F3', borderRadius: '5px', padding: '10px', color: 'black', textTransform: 'none', ':hover':{
                                backgroundColor:'#F3F3F3'
                            }
                        }}><FaLongArrowAltLeft /> &nbsp;&nbsp; Back to Homepage</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ position: 'relative' }}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <img src={`${base}${img?.[1]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '40vh', objectFit: 'cover' }} />
                        </Grid>
                        <Grid item>
                            <img src={`${base}${img?.[2]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '39vh', objectFit: 'cover' }} />
                        </Grid>
                        <Box sx={{ position: 'absolute', top: 50, right: 50 }}>
                            <Button variant="standard" onClick={handleOpen} style={{ width: '100%', borderRadius: "20px", textTransform: 'none', backgroundColor: '#F3F3F3', color: theme.palette.primary.main, fontWeight: 600 }}>
                                See All Photos
                            </Button>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: -20, right: 50, backgroundColor: 'white', padding: '20px', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'right', alignItems: 'right', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <Typography sx={{ fontWeight: 600 }}>Save Up To 3.00 Per Person</Typography>


                            {data1.packages && data1.packages.length > 0 && (
                        <Typography fontWeight="bold" color={theme.palette.primary.main} textAlign={'right'}>
                          {data1.packages[0].category === "private" ?
                            `$ ${data1.packages[0].price}` :
                            `$ ${data1.packages[0].adult_price}`}
                        </Typography>
                      )}



                            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: "white",
                                        fontSize: "12px",
                                        textTransform: 'none'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                sx={{ padding: '100px 0px', }}
                disableScrollLock
            >
                <Box sx={{ width: '80%', margin: 'auto', bgcolor: 'background.paper', padding: 4, overflow: 'scroll', height: '100%', marginBottom: '5%', position: 'relative' }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid container spacing={1}>
                        {data1?.activity_images?.map((image, index) => (
                            <Grid item xs={4} key={index}>
                                <img src={`${base}${image.image_url}`} lt={image.alt} style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default DetailSlider;
