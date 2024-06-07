import {
  Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ReCaptcha from '../../components/Recaptcha/ReCaptcha';
import Cookies from 'js-cookie';

const GiftDetail = ({ ac_data }) => {
  console.log(ac_data, 'hi');

  const [selectedValue, setSelectedValue] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBuyNow = () => {
    const dataObject = {
      discount_price: discountPrice,
      description: description,
      recipient_email: recipientEmail,
    };

    if (selectedValue === 'yes') {
      dataObject.activity_id = ac_data.id;
    }

    const dataString = JSON.stringify(dataObject);
    Cookies.set('gift_data', dataString);
    navigate('/gift-pay');
  };

  const textFieldStyle = {
    marginTop: '1rem',
    '& .MuiInputBase-root': {
      border: 'none',
      '&:hover': {
        borderColor: 'transparent',
      },
      '&.Mui-focused': {
        boxShadow: 'none',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
    borderRadius: '5px',
    backgroundColor: '#f6f7f9',
  };

  const base = 'https://dubaisafari.saeedantechpvt.com/';

  return (
    <Box sx={{ padding: '70px' }}>
      <Box sx={{ borderRadius: '15px', border: '1px solid #E1E1E1', padding: '15px' }}>
        <Box sx={{ display: 'flex', alignItems: 'start', gap: '30px' }}>
          <Box flex={1}>
            <img src={`${base}${ac_data?.image_url}`} alt="" style={{ width: '100%', height: '30vh' }} />
          </Box>
          <Box flex={3} gap={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{ac_data?.name}</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#A9A9A9', wordBreak: 'break-all' }}>
              {ac_data?.description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h1" sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Suggest this activity on this gift certificate.
          </Typography>

          <FormControl>
            <RadioGroup
              aria-labelledby="suggest-activity-label"
              name="radio-buttons-group"
              row
              value={selectedValue}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Grid container spacing={3} mt={1} sx={{ alignItems: 'center' }}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2.5 }}>
                <label style={{ fontWeight: '700', fontSize: '1rem' }}>Enter Discount</label>
                <TextField
                  placeholder="Discount"
                  sx={textFieldStyle}
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem' }}>Recipient Email:</label>
                <TextField
                  placeholder="Recipient Email"
                  sx={textFieldStyle}
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem' }}>Description*</label>
                <TextField
                  placeholder="Description"
                  sx={textFieldStyle}
                  multiline
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
            </Grid>
          </Grid>

          <Box mt={3}>
            <ReCaptcha />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }} gap={3}>
            <Button
              onClick={() => navigate('/preview-card')}
              variant="contained"
              sx={{
                padding: '0.8rem 2rem',
                backgroundColor: 'grey',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.8rem',
                ':hover': {
                  backgroundColor: 'grey',
                },
              }}
            >
              Preview Card
            </Button>

            <Button
              onClick={handleBuyNow}
              variant="contained"
              sx={{
                marginLeft: '2rem',
                padding: '0.8rem 3rem',
                textTransform: 'none',
                fontSize: '0.8rem',
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GiftDetail;
