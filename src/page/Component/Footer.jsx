import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>

     <Box>
     <Box sx={{ padding: "3rem 5%" }}>
        <Grid container spacing={5} alignItems={"start"}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box>
              <img src="/Logo.png" alt="footer Logo" />
            </Box>
            <Typography
              variant="h3"
              sx={{ fontSize: "1rem", marginTop: "1rem" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              obcaecati consequatur vitae maiores adipisci explicabo placeat
              amet ad quod est.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </Box>
          </Grid>
          <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.9rem",
              }}
            >
              Pages
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              Home
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              What We Do
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              Services
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              UAE Visa
            </Typography>
          </Grid>

          <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Support
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
                FAQ's
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
                Support Center
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
                Security
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.9rem",
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              +92 300 000000
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              mail@mail.com
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem" }}>
              address
            </Typography>
          </Grid>
        </Grid>
        <Divider/>


        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'1rem'}}>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat?</Typography>
</Box>
      </Box>



     </Box>

         </>
  );
};

export default Footer;
