import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const PaymentDetailComponent = () => {

    const [selectedValue, setSelectedValue] = useState(30); // 30 corresponds to "Mr"

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>


<Box sx={{border:'1px solid #f0f0f0', padding:'3rem 5%', borderRadius:'10px'}}>


<Box>
    <Typography variant='h1' sx={{fontSize:'1.2rem', fontWeight:'600'}}>Payment Details</Typography>
    <Typography sx={{fonSize:'1rem', color:'grey'}}>Please enter you payment details</Typography>



</Box>
<Box sx={{marginTop:'1rem', marginBottom:'1rem'}}>
<Typography sx={{fonSize:'1.2rem', color:'black', fontWeight:'600'}}>Pay With :</Typography>

<RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="card" control={<Radio />} label="Card" />
        <FormControlLabel value="bank" control={<Radio />} label="Bank" />

      </RadioGroup>
</Box>

<Grid container spacing={4} >

<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Card Honour</label>
    <TextField placeholder='Enter Name' size='small' />
</Box>

</Grid>





</Grid>
<Box sx={{marginTop:'2rem'}} gap={5}>
<Button variant='contained' sx={{padding:'0.8rem 3rem', backgroundColor:'grey', color:'white',  textTransform:'none', fontSize:'0.8rem', ':hover':{
    backgroundColor:'grey'
}}}>Cancel</Button>

<Button variant='contained' sx={{marginLeft:'2rem', padding:'0.8rem 1.5rem', textTransform:'none', fontSize:'0.8rem'}}>Confirm</Button>

</Box>


</Box>

    </>
  )
}

export default PaymentDetailComponent