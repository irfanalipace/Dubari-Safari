import { Box, Button, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Modal, TextField, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import html2pdf from 'html2pdf.js';
import { useDispatch } from 'react-redux';
import { Post_Reviews } from '../../store/actions/categoriesActions';

const ReviewModal = ({ open, handleClose, handleSubmit }) => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmitReview = () => {
        handleSubmit({ rating, description });
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="review-modal-title"
            aria-describedby="review-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <Typography id="review-modal-title" variant="h6" component="h2">
                    Submit Your Review
                </Typography>
                <Rating
                    name="review-rating"
                    value={rating}
                    onChange={handleRatingChange}
                />
                <TextField
                    id="review-description"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <Button variant="contained" color="primary" onClick={handleSubmitReview}>
                    Submit Review
                </Button>
            </Box>
        </Modal>
    );
};

const GenerateInvoice = () => {
    const [imageLink, setImageLink] = useState(null);
    const [cookiesData, setCookie] = useState(null);
    const [cooks, setCooks] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const cookieData = Cookies.get('BookingImage');
        if (cookieData) {
            setImageLink(JSON.parse(cookieData));
        }
    }, []);

    useEffect(() => {
        const cook = Cookies.get('information');
        if (cook) {
            setCookie(JSON.parse(cook));
        }
    }, []);

    useEffect(() => {
        const cooks = Cookies.get('bookingDetails');
        if (cooks) {
            setCooks(JSON.parse(cooks));
        }
    }, []);

    const handlePrintInvoice = () => {
        const invoiceContainer = document.getElementById('invoice-container');
        const opt = {
            margin: 10,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(invoiceContainer).save();
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmitReview = (review) => {
        const activity_id = imageLink?.id; // Replace with the actual activity_id
        const { description: comment, rating } = review;

        dispatch(Post_Reviews({ activity_id, comment, rating }))
            .then(response => {
                console.log('Review submitted successfully:', response);
            })
            .catch(error => {
                console.error('Error submitting review:', error);
            });
    };

    return (
        <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12}>
            <Box id="invoice-container" sx={{ margin: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>Invoice Details</Typography>
              <Typography sx={{ fontSize: '14px', color: '#90A3BF' }}>Paid on {cookiesData?.date}</Typography>
              <Divider sx={{ width: '100%' }} />
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
                <Box flex={1}>
                  {imageLink && <img src={imageLink?.image_url} alt="Invoice" style={{ width: '100%', height: '20vh' }} />}
                </Box>
                <Box flex={4}>
                  <Typography sx={{ fontWeight: 700, color: '#FF5532' }}>{cookiesData?.title}</Typography>
                  <Typography sx={{ color: '#989A9C' }}>{cookiesData?.highlight}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '20px' }}>
                <Box sx={{ padding: '20px', backgroundColor: '#FAFAFA', color: '#989A9C', width: '200px' }}>
                  <Typography>Customer Name :</Typography>
                  <Typography>Child In Tour :</Typography>
                  <Typography>Total Adult In Tour :</Typography>
                  <Typography>Total Infant In Tour :</Typography>
                </Box>
                <Box>
                  <Typography>{cooks?.first_name}</Typography>
                  <Typography>{cookiesData?.child}</Typography>
                  <Typography>{cookiesData?.adult}</Typography>
                  <Typography>{cookiesData?.infant}</Typography>
                </Box>
              </Box>
              <Box sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#FAFAFA' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Tour Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Customer Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Tour Date</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Booking</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{cookiesData?.title}</TableCell>
                    <TableCell>{cooks?.first_name}</TableCell>
                    <TableCell>{cookiesData?.date}</TableCell>
                    <TableCell>1 Booking {cookiesData?.adult} adult, {cookiesData?.child} child </TableCell>
                    <TableCell sx={{ color: '#FF5532' }}>{cookiesData?.total_amount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            
              <Typography sx={{ color: '#667085' }}>Terms & Conditions</Typography>
              <Typography>Please pay within 15 days of receiving this invoice.</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '30px', padding: '30px' }}>
          <Button variant='contained' sx={{ textTransform: 'none', backgroundColor: '#FF5532', color: 'white', padding: '10px 30px' }} onClick={handleOpenModal}>
            Give Review
          </Button>
          <Button variant='contained' onClick={handlePrintInvoice} sx={{ textTransform: 'none', backgroundColor: '#FF5532', color: 'white', padding: '10px 30px' }}>
            Print Invoice
          </Button>
        </Box>
        <ReviewModal open={modalOpen} handleClose={handleCloseModal} handleSubmit={handleSubmitReview} />
      </Box>
      
    );
};

export default GenerateInvoice;
