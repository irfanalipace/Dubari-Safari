import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'

const Tab1Card = (props) => {
    const theme =useTheme()


  return (
    <>




        <Grid container sx={{alignItems:'center'}} spacing={5}>



{props.tab1data.map((val, ind)=>(


<Grid item lg={4} md={4} sm={12} xs={12} key={ind}>

<Box

     sx={{
            // width: 320,
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            // margin: '0 auto',
            padding: "5px",
            textAlign:'start'
        }}>

            <Box sx={{ position: 'relative' }}>
                <img src={val.headerimage} alt="Header image" style={{ width: '100%', height: '30vh', borderRadius: '12px', objectFit: 'cover', }} />

            </Box>

            <Box p={2} sx={{ display: 'flex', flexDirection: "column", gap: '1px', alignItems:'start' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {val.title}
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color:theme.palette.primary.main }}>
                    {val.title}
                </Typography>
                <Typography sx={{ fontSize: '1rem', color: theme.palette.primary.textPrimary }}>
                    {val.description}
                </Typography>


            </Box>

        </Box>



</Grid>



))}



        </Grid>

    </>
  )
}

export default Tab1Card