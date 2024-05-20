import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Page from "../../components/page";
import Overlay from "../../components/Image_Overlay/Overlay";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contact_Us = () => {
  return (
    <Page title="Contact Us">
      <Overlay title="Contact Us" />
      <Box sx={{ p: 5 }}>
        <Typography fontWeight="bold" variant="h5" textAlign="center">
          Get In Touch
        </Typography>
        <Box
          sx={{
            height: "70vh",
            mt: 5,
            px: 5,
            display: "flex",
            position: "relative",
          }}
        >
          <Box flex={1} sx={{ position: "relative" }}>
            <img
              src="/contact_detail.png"
              alt="Contact details"
              style={{ width: "100%", height: "100%" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "white",
                p: 5,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Contact Information
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Feel Free to contact with us
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Icon_Title icon={<AddIcCallIcon />} txt="+123456789" />
                <Icon_Title icon={<EmailIcon />} txt="demo@gmail.com" />
                <Icon_Title
                  icon={<PlaceIcon />}
                  txt="123 Elmhurst Street Number 22, New York USA. "
                />
              </Box>
              <Box sx={{ mt: 8 }}>
                <TwitterIcon sx={{ mr: 3 }} />
                <InstagramIcon sx={{ mr: 3 }} />
                <TwitterIcon sx={{ mr: 3 }} />
              </Box>
            </Box>
          </Box>
          <Box flex={2} sx={{ p: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Full Name" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Select Company (Optional)" select />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Select Company (Optional)" select />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Email Address" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Topic Inquiry" select />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Txt_field label="Mobile Number" />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Txt_field
                  label="Message"
                  placeholder="Write your message..."
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", mt: 5, justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "1rem",
                  padding: "0.8rem 1.5rem",
                  textTransform: "none",
                  fontSize: "0.8rem",
                }}
              >
                Confirm Payment
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Contact_Us;

const Icon_Title = ({ icon, txt }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      {icon}
      <Typography sx={{ ml: 2 }}>{txt}</Typography>
    </Box>
  );
};

const Txt_field = ({ label, ...props }) => {
  return (
    <Box>
      <Typography sx={{ color: "grey", fontWeight: "bold", mt: 1 }}>
        {label}
      </Typography>
      <TextField variant="standard" fullWidth {...props} />
    </Box>
  );
};
