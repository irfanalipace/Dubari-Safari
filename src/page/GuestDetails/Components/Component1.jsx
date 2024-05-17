import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Component1 = () => {

    const [selectedValue, setSelectedValue] = useState(30); // 30 corresponds to "Mr"

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>


<Box sx={{border:'1px solid #f0f0f0', padding:'3rem 5%', borderRadius:'10px'}}>


<Box>
    <Typography variant='h1' sx={{fontSize:'1.2rem', fontWeight:'600'}}>Guest Details</Typography>
    <Typography sx={{fonSize:'1rem', color:'grey'}}>Lorem ipsum dolor sit amet.</Typography>

</Box>


<Grid container spacing={4} sx={{marginTop:'1rem'}}>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label>Title</label>
<FormControl fullWidth>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={selectedValue}
        label="Mr"
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
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>First Name</label>
    <TextField placeholder='Title' size='small' />
</Box>

</Grid>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Last Name</label>
    <TextField placeholder='Title' size='small' />
</Box>

</Grid>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Email Address</label>
    <TextField placeholder='Title' size='small' />
</Box>

</Grid>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Nationality</label>
    <TextField placeholder='Title' size='small' />
</Box>

</Grid>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Phone Number</label>
    <TextField placeholder='Title' size='small' />
</Box>

</Grid>

</Grid>


</Box>



<Box sx={{border:'1px solid #f0f0f0', padding:'3rem 5%', borderRadius:'10px', marginTop:'2rem'}}>


<Box>
    <Typography variant='h1' sx={{fontSize:'1.2rem', fontWeight:'600'}}>Morning Desert Safari</Typography>
    <Typography sx={{fonSize:'1rem', color:'grey'}}>Please Enter your Extra Details</Typography>

</Box>


<Grid container spacing={4} sx={{marginTop:'1rem'}}>
<Grid item lg={12} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Pick up Location</label>
    <TextField placeholder='Enter you Address'  />
</Box>

</Grid>
<Grid item lg={12} md={12} sm={12} xs={12}>

<Box sx={{display:'flex', flexDirection:'column'}}>

<label style={{fontSize:'1.2rem'}}>Note</label>
    <TextField placeholder='Note'  />
</Box>

</Grid>
</Grid>

<Box sx={{marginTop:'2rem'}} gap={5}>
<Button variant='contained' sx={{padding:'0.8rem 3rem', backgroundColor:'grey', color:'white',  textTransform:'none', fontSize:'0.8rem', ':hover':{
    backgroundColor:'grey'
}}}>Cancel</Button>

<Button variant='contained' sx={{marginLeft:'2rem', padding:'0.8rem 1.5rem', textTransform:'none', fontSize:'0.8rem'}}>Save & Continue</Button>

</Box>


</Box>

    </>
  )
}

export default Component1