import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: "3rem 5%",
            color: "white",
          }}
        >
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Typography
                variant="h1"
                sx={{ fontSize: "1.5rem", fontWeight: "700" }}
              >
                We have got amazing deals just for you
              </Typography>

              <Typography sx={{ fontSize: "0.9rem" }}>
              Subscribe to the newsletter and stay up to date...
              </Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <PinterestIcon />
                <InstagramIcon />
              </Box>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your Email"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "none",
                      padding: 0, // Set padding to 0
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
                    borderRadius: "0px",
                    backgroundColor: "white",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          backgroundColor: "black",
                          padding: "1.8rem 1rem",
                          color: "white",
                        }}
                      >
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      "& input::placeholder": {
                        color: "red",
                      },
                      padding: 0, // Ensure no padding for the input
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ padding: "3rem 5%" }}>
          <Grid container spacing={5} alignItems={"start"}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box>
              <Link to='/'>
              <img src="/Logo.png" alt="footer Logo" />

              </Link>
              </Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "1rem", marginTop: "1rem" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia obcaecati
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
                gap={1}
              >
                <img src="/visaimage.png" alt="" />
                <img src="/american.png" alt="" />
                <img src="/mastercard.png" alt="" />
                <img src="/stripe.png" alt="" />
              </Box>
            </Grid>
            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                About Us
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                About Us
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Careers
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Contact Us
              </Typography>
            </Grid>

            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                Services
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Things To Do
              </Typography>

              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                UAE Visa
              </Typography>
            </Grid>

            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
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
                  What We Do
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                  Experience Dubai
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                  Corporate
                </Typography>
                <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/blogs"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Blogs
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/where-to-find-us"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Where to find us
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/help"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Help
                </MuiLink>
              </Typography>

              </Box>
            </Grid>
            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                Terms Of Use
              </Typography>
              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/terms-&-conditions"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Terms & Conditions
                </MuiLink>
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Cookie Policy
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Site Map
              </Typography>
            </Grid>

            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                Mobile
              </Typography>

              <Box>
                <img src="/appstore.png" alt="App Store" />
              </Box>

              <Box sx={{ marginTop: "1rem" }}>
                <img src="/googleplay.png" alt="App Store" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem", color: "grey" }}>
            Copyright © Dubai Safari 2024 All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
