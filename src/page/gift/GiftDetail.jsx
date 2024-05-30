import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { center } from '../../components/Box/styles'
import { useNavigate } from 'react-router';
import ReCaptcha from '../../components/Recaptcha/ReCaptcha';

const GiftDetail = () => {

    const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


    const textFieldStyle = {
        marginTop: "1rem",
        "& .MuiInputBase-root": {
          border: "none",
          "&:hover": {
            borderColor: "transparent",
          },
          "&.Mui-focused": {
            boxShadow: "none",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          display: "none",
        },
        borderRadius: "5px",
        backgroundColor: "#f6f7f9",
      };
    return (
        <>
            <Box sx={{
                padding: '70px',
            }}>
                <Box sx={{
                    borderRadius: '15px',
                    border: ' 1px solid #E1E1E1',
                    padding: '15px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: '30px' }}>
                        <Box flex={1}>
                            <img src="/cardimage.png" alt="" />
                        </Box>
                        <Box flex={3} gap={4}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>Evening Desert Safari</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#A9A9A9' }}>
                                This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience.This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing .
                            </Typography>
                        </Box>
                    </Box>


            <Box sx={{mt:4}}>
                <Typography variant='h1' sx={{fontSize:'1.2rem', fontWeight:'600'}}>Suggest this activity on this gift certificate .</Typography>

                <Box>
                <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    row
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
</FormControl>
                </Box>

<Box>

<Grid container spacing={3} mt={1} sx={{alignItems:'center'}}>
    <Grid item lg={6} md={6} sm={12} xs={12} >
    <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{fontWeight:'700', fontSize:'1rem'}}>Choose the value of this gift card ?</label>
              <FormControl fullWidth>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={selectedValue}
                  sx={textFieldStyle}
                  onChange={handleChange}
                  placeholder='Choose'
                   displayEmpty
                >
                <MenuItem value="" disabled>
              Choose
            </MenuItem>
                  <MenuItem value={10}>Mr.</MenuItem>
                  <MenuItem value={20}>Miss</MenuItem>
                  <MenuItem value={30}>Mr</MenuItem>
                </Select>
              </FormControl>

              {/* <label style={{fontSize:'1.2rem'}}>Title</label>
    <TextField placeholder='Title' size='small' /> */}
            </Box>
    </Grid>

    <Grid item lg={6} md={6} sm={12} xs={12} >
    <Box sx={{ display: "flex", flexDirection: "column", mt:2.5 }}>

              <TextField placeholder="Last Name" sx={textFieldStyle} />
            </Box>
    </Grid>


    <Grid item lg={6} md={6} sm={12} xs={12} >
    <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{fontWeight:'700', fontSize:'1rem'}}>Choose Template :</label>
              <FormControl fullWidth>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={selectedValue}
                  sx={textFieldStyle}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Mr.</MenuItem>
                  <MenuItem value={20}>Miss</MenuItem>
                  <MenuItem value={30}>Mr</MenuItem>
                </Select>
              </FormControl>

              {/* <label style={{fontSize:'1.2rem'}}>Title</label>
    <TextField placeholder='Title' size='small' /> */}
            </Box>
    </Grid>

    <Grid item lg={6} md={6} sm={12} xs={12} >
    <Box sx={{ display: "flex", flexDirection: "column", }}>
<label style={{fontWeight:'700', fontSize:'1rem'}}>Receipient Email : </label>
<TextField placeholder="Default" sx={textFieldStyle} />
</Box>
    </Grid>



    <Grid item lg={12} md={12} sm={12} xs={12} >
    <Box sx={{ display: "flex", flexDirection: "column", }}>
<label style={{fontWeight:'700', fontSize:'1rem'}}>Add a personal message ( it’s optional) </label>
<TextField placeholder="Last Name" sx={textFieldStyle} multiline rows={5}/>
</Box>
    </Grid>


</Grid>


<Box mt={3}>
  {/* <img src='/recaptcha.png' alt='recaptcha'/> */}
  <ReCaptcha/>
</Box>




<Box sx={{display:'flex', justifyContent:'end', mt:4}} gap={3}>
<Button
            variant="contained"
            sx={{
              padding: "0.8rem 2rem",
              backgroundColor: "grey",
              color: "white",
              textTransform: "none",
              fontSize: "0.8rem",
              ":hover": {
                backgroundColor: "grey",
              },
            }}
          >
            Preview Card
          </Button>

          <Button
            variant="contained"
            sx={{
              marginLeft: "2rem",
              padding: "0.8rem 3rem",
              textTransform: "none",
              fontSize: "0.8rem",
            }}
            // onClick={handleContinue}
          >
            Buy Now
          </Button>


</Box>




</Box>







            </Box>




                </Box>



            </Box>
        </>
    )
}

export default GiftDetail