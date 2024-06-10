import React, { useRef, useState } from 'react';
import { Grid, Button, Modal, Box, IconButton, useTheme, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';

const DetailSlider = ({ data1 }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(data1, 'fff')
    const base = 'https://dubaisafari.saeedantechpvt.com/';
    const navigate = useNavigate()

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
    const bookNowRef = useRef(null);

    const handleBookNowClick = () => {
        window.scrollTo({
            top: window.innerHeight / 1.2,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Grid container spacing={0.5}>
                <Grid item xs={8} sx={{ position: 'relative' }}>
                    <img src={`${base}${img?.[0]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '66vh', objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', top: 50, left: 50 }}>

                        <Button onClick={handleBack} variant='standard' sx={{
                            fontSize: '14px', backgroundColor: '#F3F3F3', borderRadius: '5px', padding: '10px', color: 'black', textTransform: 'none', ':hover': {
                                backgroundColor: '#F3F3F3'
                            }
                        }}><FaLongArrowAltLeft /> &nbsp;&nbsp; Back</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ position: 'relative' }}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <img src={`${base}${img?.[1]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '33vh', objectFit: 'cover' }} />
                        </Grid>
                        <Grid item>
                            <img src={`${base}${img?.[2]?.image_url}`} alt='xyz' style={{ width: '100%', borderRadius: "5px", height: '32vh', objectFit: 'cover' }} />
                        </Grid>
                        <Box sx={{ position: 'absolute', top: 50, right: 50, width:'134px' }}>
                            <Button variant="standard" onClick={handleOpen} style={{ width: '100%', borderRadius: "20px", textTransform: 'none', backgroundColor: '#F3F3F3', color: theme.palette.primary.main, fontWeight: 600 }}>
                                See All Photos
                            </Button>
                        </Box>

{/* -------------deleted code save i notepad------ */}


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
