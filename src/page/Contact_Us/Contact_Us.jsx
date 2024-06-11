import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Page from "../../components/page";
import Overlay from "../../components/Image_Overlay/Overlay";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useDispatch } from "react-redux";
import { send_message } from "../../store/actions/ContactUsActions";
import { useSnackbar } from "notistack";
import Loader from "../../components/Loader/Loader";
import FacebookIcon from '@mui/icons-material/Facebook';
import { getContactUs } from "../../store/actions/setting";

const Contact_Us = () => {
  const initialValues = {
    first_name: "",
    company_name: "",
    email: "",
    inquiry_topic: "",
    mobile: "",
    message: "",
  };
  const dispatch = useDispatch();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const is_md = useMediaQuery(theme.breakpoints.down("lg"));
  const is_sm = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(send_message(formValues))
      .then((result) => {
        setFormValues(initialValues);
        enqueueSnackbar(result.data.message, {
          variant: "success",
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  // const dispatch = useDispatch
  const [imageH, setImageH] = useState()
  useEffect(() => {
    (async () => {
      try {
        const result = await dispatch(getContactUs());
        setImageH(result.data.payload || []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);
  console.log(imageH)
  const abc = imageH?.length > 0 ? imageH[0]?.address : '';
  const email = imageH?.length > 0 ? imageH[0]?.email : '';
  const phone = imageH?.length > 0 ? imageH[0]?.phone : '';
  const facebook = imageH?.length > 0 ? imageH[0]?.facebook : '';
  const instagram = imageH?.length > 0 ? imageH[0]?.instagram : '';
  const twitter = imageH?.length > 0 ? imageH[0]?.twitter : '';



  return (
    <Page title="Contact Us"  >
      <Overlay title="Contact Us" imageUrl="/blogimage.png" />
      <Box sx={{ p: is_sm ? 2 : 5 }}>
        <Typography fontWeight="bold" variant="h5" textAlign="center">
          Get In Touch
        </Typography>
        <Box
          sx={{
            height: "70vh",
            mt: 5,
            px: is_sm ? 2 : 5,
            display: "flex",
            position: "relative",
            flexWrap: 'wrap'
          }}
        >
          <Box
            flex={1}
            sx={{ position: "relative", display: is_md ? "block" : "block" }}
          >
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
                <Icon_Title icon={<AddIcCallIcon />} txt={phone} />
                <Icon_Title icon={<EmailIcon />} txt={email} />
                <Icon_Title
                  icon={<PlaceIcon />}
                  txt={abc}
                />
              </Box>
              <Box sx={{ mt: 8 }}>
                <a href={facebook}>
                  <FacebookIcon sx={{ mr: 3, color: 'white' }} />
                </a>
                <a href={instagram}>
                  <InstagramIcon sx={{ mr: 3, color: 'white' }} />
                </a>
                <a href={twitter}>
                  <TwitterIcon sx={{ mr: 3, color: 'white' }} />
                </a>
              </Box>
            </Box>
          </Box>
          <Box flex={2} sx={{ p: 5 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="First Name"
                    name="first_name"
                    value={formValues.first_name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Last Name"
                    name="last_name"
                    value={formValues.last_name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Email Address"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Mobile Number"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                {/* <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Enter Company Name"
                    name="company_name"
                    value={formValues.company_name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid> */}
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Topic Inquiry"
                    name="inquiry_topic"
                    value={formValues.inquiry_topic}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Txt_field
                    label="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    placeholder="Write your message..."
                    required
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", mt: 5, justifyContent: "flex-end" }}>
                {loading ? (
                  <Loader />
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "1rem",
                      padding: "0.8rem 1.5rem",
                      textTransform: "none",
                      fontSize: "0.8rem",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Box>
        <Box sx={{ p: 5, textAlign: "center" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785734046066!2d55.2797092!3d25.197199700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69350dc906f3%3A0x44af9ef3dcd6bde7!2sBook%20Dubai%20Safari!5e0!3m2!1sen!2sae!4v1716339216117!5m2!1sen!2sae"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
      <Typography sx={{ color: "grey", fontWeight: "500", mt: 1 }}>
        {label}
      </Typography>
      <TextField variant="standard" fullWidth {...props} />
    </Box>
  );
};
