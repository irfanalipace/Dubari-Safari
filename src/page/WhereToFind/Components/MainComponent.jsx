import { Box, Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";

const MainComponent = () => {
  const theme = useTheme();

  const tickdata = [
    {
      title: "Al Qasr",
    },
    {
      title: "Grand Hyatt Dubai",
    },
    {
      title: "InterContinental Dubai Marina",
    },
    {
      title: "JW Marriott Marquis",
    },
    {
      title: "One & Only Royal Mirage",
    },
    {
      title: "Marriott Al Jaddaf",
    },
  ];

  return (
    <>
      <Box sx={{ padding: "4rem 5%" }}>
        <Box sx={{ textAlign: "center", color: "grey" }}>
          <Typography>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium pariatur praesentium et sequi iusto officia amet ducimus voluptates, perspiciatis a quisquam culpa, nobis cumque ex fugiat vero doloribus inventore.
          </Typography>
        </Box>

        <Grid container spacing={3} marginTop='1rem'>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${"/dubaiimage.png"})`,
                borderRadius: "10px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "none",
                height: "30vh",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  color: "white",

                  minHeight: "40vh",
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "start",
                  paddingLeft: "5%",
                  flexDirection: "column",

                  paddingRight: "5%",
                }}
              >
                <Box minHeight={"8rem"}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontSize: "2rem",
                      fontWeight: "600",
                    }}
                  >
                    In Dubai
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Grid container sx={{ marginTop: "2rem" }} spacing={1}>
              {tickdata.map((val, ind) => (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box sx={{ display: "flex", alignItems: "end" }} key={ind}>
                    <DoneIcon style={{ color: theme.palette.primary.main }} />
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: "700" }}>
                      {val.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

<Typography sx={{marginTop:'2rem', color:theme.palette.primary.main, fontSize:'1.1rem', fontWeight:'600'}}>Open Daily ;  9 AM to 5 PM</Typography>


          </Grid>

<Grid item lg={5} md={6} sm={12} xs={12}>
<Box
        sx={{

          padding: "2rem 5%",
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
          backgroundColor: "#f2f1f1",
        }}
      >
        <Box
          sx={{marginBottom:'1rem'}}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "1.5rem", color:theme.palette.primary.main, fontWeight: "600", marginBottom: "1rem" }}
          >
            Next Step
          </Typography>

          <Box>
          <Button
            variant="contained"
            sx={{ width: "100%", fontSize:'1.1rem', padding:'0.5rem 0rem', textTransform: "none", borderRadius:'40px' }}
          >
            Make an Enquiry
          </Button>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ marginTop: "1rem" }}>

       <Typography>Customer Support Contact</Typography>


<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
    <Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Telephone:</Typography>
    <Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>+92 300 0000000</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
    <Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Email:</Typography>
    <Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>dubai@gmail.com</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
    <Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">WhatsApp:</Typography>
    <Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>+92 300 0000000</Typography>
</Box>
        </Box>



        <Box sx={{ marginTop: "1rem" }}>

<Typography sx={{fontWeight:'600'}}>Location</Typography>
<Typography sx={{color:'#90a3bf', fontSize:'0.9rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas consectetur dignissimos eaque voluptas cum numquam, nesci</Typography>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
<Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Timezone:</Typography>
<Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>GMT +4</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
<Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Booking:</Typography>
<Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>aaooline@arabian - adventures.com</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
<Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Business:</Typography>
<Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>AA - BD@emirates.com</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
<Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">Press:</Typography>
<Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>public.relations@dnata.com</Typography>
</Box>
<Box sx={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
<Typography sx={{color:'#90a3bf', fontWeight:'600', fontSize:'1rem'}} variant="h1">General:</Typography>
<Typography sx={{color:theme.palette.primary.main, fontWeight:'600'}}>aaooline@arabian - adventures.com</Typography>
</Box>


 </Box>


      </Box>


</Grid>




        </Grid>
      </Box>
    </>
  );
};

export default MainComponent;
