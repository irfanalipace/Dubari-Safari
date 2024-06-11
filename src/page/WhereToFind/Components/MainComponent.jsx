import { Box, Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getFindUs } from "../../../store/actions/setting";

const MainComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const [imageH, setImageH] = useState()
  useEffect(() => {
    (async () => {
      try {
        const result = await dispatch(getFindUs());
        setImageH(result.data.payload || []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);
  console.log(imageH)
  const abc = imageH?.length > 0 ? imageH[0]?.image : '';
  const email = imageH?.length > 0 ? imageH[0]?.email : '';
  const phone = imageH?.length > 0 ? imageH[0]?.phone : '';
  const address = imageH?.length > 0 ? imageH[0]?.address : '';
  const time_zone = imageH?.length > 0 ? imageH[0]?.time_zone : '';
  const whatsapp = imageH?.length > 0 ? imageH[0]?.whatsapp : '';
  const booking_email = imageH?.length > 0 ? imageH[0]?.booking_email : '';
  const business_email = imageH?.length > 0 ? imageH[0]?.business_email : '';
  const press_email = imageH?.length > 0 ? imageH[0]?.press_email : '';
  const general_email = imageH?.length > 0 ? imageH[0]?.general_email : '';
  console.log(abc)
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
      <Box sx={{ padding: "3rem 5%" }}>
        <Box sx={{ textAlign: "center", color: "grey" }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium pariatur praesentium et sequi iusto officia amet ducimus voluptates, perspiciatis a quisquam culpa, nobis cumque ex fugiat vero doloribus inventore.
          </Typography>
        </Box>

        <Grid container spacing={3} marginTop='1rem' height={'100%'}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box>


              <Box
                sx={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${abc})`,
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

              {/* <Grid container sx={{ marginTop: "2rem" }} spacing={1}>
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
            </Grid> */}

              {/* <Typography sx={{ marginTop: '2rem', color: 'black', fontSize: '1.1rem', fontWeight: '600' }}>MAP</Typography> */}
              <Box sx={{ p: 1, textAlign: "center", }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785734046066!2d55.2797092!3d25.197199700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69350dc906f3%3A0x44af9ef3dcd6bde7!2sBook%20Dubai%20Safari!5e0!3m2!1sen!2sae!4v1716339216117!5m2!1sen!2sae"
                  width="100%"
                  // maxHeight="555"
                  height="355"
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12} height={'100%'}>
            <Box
              sx={{
                height: '100%',
                padding: "2rem 5%",
                border: "1px solid #f0f0f0",
                borderRadius: "10px",
                backgroundColor: "#f2f1f1",
              }}
            >
              <Box
                sx={{ marginBottom: '1rem' }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: "1.5rem", color: theme.palette.primary.main, fontWeight: "600", marginBottom: "1rem" }}
                >
                  Next Step
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    sx={{ width: "100%", fontSize: '1.1rem', padding: '0.5rem 0rem', textTransform: "none", borderRadius: '40px' }}
                  >
                    Make an Enquiry
                  </Button>
                </Box>
              </Box>

              <Divider />

              <Box sx={{ marginTop: "1rem" }}>

                <Typography>Customer Support Contact</Typography>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Telephone:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}> {phone}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Email:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{email}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">WhatsApp:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{whatsapp}</Typography>
                </Box>
              </Box>



              <Box sx={{ marginTop: "1rem" }}>

                <Typography sx={{ fontWeight: '600' }}>Location</Typography>
                <Typography sx={{ color: '#90a3bf', fontSize: '0.9rem' }}>{address}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Timezone:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{time_zone}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Booking:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{booking_email}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Business:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{business_email}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">Press:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{press_email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#90a3bf', fontWeight: '600', fontSize: '1rem' }} variant="h1">General:</Typography>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: '600' }}>{general_email}</Typography>
                </Box>
              </Box>


            </Box>


          </Grid>




        </Grid>
      </Box >
    </>
  );
};

export default MainComponent;
