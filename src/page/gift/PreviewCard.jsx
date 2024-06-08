import { Box, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
const PreviewCard = () => {
    const theme = useTheme()
    const location = useLocation();
    const { discountPrice, recipientEmail, description, acData } = location.state;
  const base = 'https://dubaisafari.saeedantechpvt.com/';

  useEffect(()=>{
    window.scrollTo(0,0)
  })
    return (
        <>
            <Box>
                {/* <img src="/preview.png" alt="" style={{ height: '100%', width: '100%' }} /> */}

<Typography sx={{color:theme.palette.primary.main, fontSize:'2rem', fontWeight:'700', mt:5, textAlign:'center'}}>Dubai Safari Gift Card</Typography>

<Typography sx={{ fontSize:'3rem', fontWeight:'700', mt:2, textAlign:'center',}}>
Book unforgettable
<br/>
experiences anywhere
<br/>
in the world
</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px 0px", flexDirection:'column' }}>
                    <Box sx={{ backgroundColor: 'white', padding: '50px', border:'6px solid red', borderRadius:'25px', width: 'fit-content', textAlign:'center' }}>

<Typography sx={{color:'black', fontWeight:'700',}}>Redeemable for te Vale of :</Typography>

                        <Typography sx={{color:theme.palette.primary.main, fontSize:'2rem', fontWeight:'700' }}>AED {discountPrice}</Typography>
                    </Box>
{/* <Typography sx={{mt:1, fontWeight:'600'}}>Valid until june 24 2026</Typography> */}

<Typography sx={{mt:1, fontWeight:'600', fontSize:'3rem'}}>Lucky You !</Typography>
<Typography sx={{mt:1, fontWeight:'600', fontSize:'1.5rem'}}>You can book any tour, activity, or attraction you
like on Dubai Safari</Typography>

<Box padding='2rem 20%'>

<Grid container spacing={2}>
<Grid item lg={6} md={12} sm={12} xs={12}>

<Box>
                        <img  src={base + acData?.image_url} alt="" style={{ height: '100%', width: '100%' }} />
                    </Box>

</Grid>

<Grid item lg={6} md={12} sm={12} xs={12}>
<Box>
                        <Typography sx={{fontSize:'1.2rem', fontWeight:'700'}}>{acData?.name}</Typography>
                        <Typography sx={{fontSize:'1rem', }}>
                        {acData?.description}
                        </Typography>
                    </Box>
</Grid>
</Grid>
</Box>
                </Box>
            </Box>
        </>
    )
}

export default PreviewCard