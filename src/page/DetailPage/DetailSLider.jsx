import React, { useState } from 'react';
import { Grid, Button, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DetailSlider = () => {
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

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <img src={initialImages[0].itemImageSrc} alt={initialImages[0].alt} style={{ width: '100%', borderRadius: "5px" }} />
                </Grid>
                <Grid item xs={4} sx={{ position: 'relative' }}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <img src={initialImages[1].itemImageSrc} alt={initialImages[1].alt} style={{ width: '100%', borderRadius: "5px" }} />
                        </Grid>
                        <Grid item>
                            <img src={initialImages[2].itemImageSrc} alt={initialImages[2].alt} style={{ width: '100%', borderRadius: "5px" }} />
                        </Grid>
                        <Box sx={{ position: 'absolute', bottom: "20px", right: '10%' }}>
                            <Button variant="contained" color="primary" onClick={handleOpen} style={{ width: '100%', borderRadius: "20px", textTransform: 'none' }}>
                                See All Photos
                            </Button>
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
                        {initialImages.map((image, index) => (
                            <Grid item xs={4} key={index}>
                                <img src={image.itemImageSrc} alt={image.alt} style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default DetailSlider;
