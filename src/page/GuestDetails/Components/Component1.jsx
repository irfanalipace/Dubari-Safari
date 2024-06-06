import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import { Booking } from '../../../store/actions/categoriesActions';

const Component1 = ({ data, onNext }) => {
  const theme = useTheme();
  const [payNow, setPayNow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formValues, setFormValues] = useState({
    title: "Mr",
    first_name: "",
    last_name: "",
    email: "",
    nationality: "",
    phone: "",
    pickup_location: "",
    note: "",
  });

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue || "");
      });
  }, []);

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
    setFormValues({ ...formValues, nationality: event.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProceedToPayment = () => {
    const bookingDetails = {
      ...formValues,
      activity_name: "Snorkeling",
      date: data?.date,
      adult: data?.adult,
      child: data?.child,
      infant: data?.infant,
      total_amount: data?.total_amount,
      status: "pending",
      payment: 'fail',
      package_id: data?.id,
    };

    // Store booking details in cookies
    Cookies.set('bookingDetails', JSON.stringify(bookingDetails));

    onNext();
  };


  const textFieldStyle = {
    marginTop: "1rem",
    "& .MuiInputBase-root": {
      border: "none",
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
    borderRadius: "5px",
    backgroundColor: "#f6f7f9",
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid #f0f0f0",
          padding: "3rem 5%",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", fontWeight: "600", display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            Lead Passenger Details
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "grey" }}>
            Please Enter Your Passenger Details
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>Title</label>
              <FormControl fullWidth>
                <Select
                  value={formValues.title}
                  name="title"
                  sx={textFieldStyle}
                  onChange={handleChange}
                >
                  <MenuItem value="Mr">Mr.</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>First Name</label>
              <TextField
                placeholder="First Name"
                sx={textFieldStyle}
                name="first_name"
                value={formValues.first_name}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Last Name</label>
              <TextField
                placeholder="Last Name"
                sx={textFieldStyle}
                name="last_name"
                value={formValues.last_name}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Email Address</label>
              <TextField
                placeholder="Email"
                sx={textFieldStyle}
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Nationality</label>

              <FormControl fullWidth>
                <Select
                  placeholder="Select Country"
                  labelId="country-select-label"
                  id="country-select"
                  value={selectedCountry}
                  onChange={handleChangeCountry}
                  label="Country"
                  sx={textFieldStyle}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      <img
                        src={country.flag}
                        alt=""
                        style={{ width: "20px", marginRight: "10px" }}
                      />
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Phone Number</label>
              <TextField
                placeholder="Phone Number"
                sx={textFieldStyle}
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Special Request</label>
              <TextField
                placeholder="Special Request"
                sx={textFieldStyle}
                name="note"
                value={formValues.note}
                onChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          border: "1px solid #f0f0f0",
          padding: "3rem 5%",
          borderRadius: "10px",
          marginTop: "2rem",
          background: "#fff",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", fontWeight: "600", display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <BiSolidMessageSquareDetail size={35} style={{ color: theme.palette.primary.main }} />
            Extra Details
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "grey" }}>
            Please Enter your Extra Details
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Pick up Location</label>
              <TextField
                placeholder="Enter your Address"
                sx={textFieldStyle}
                name="pickup_location"
                value={formValues.pickup_location}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Note</label>
              <TextField
                placeholder="Write your special request here"
                sx={textFieldStyle}
                name="note"
                value={formValues.note}
                onChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', mt: 2 }}>
        <Button onClick={handleProceedToPayment} variant="contained" sx={{ textTransform: 'none', padding: '10px 40px', backgroundColor: theme.palette.primary.main, color: 'white' }}>
          Proceed to payment
        </Button>
      </Box>
    </>
  );
};

export default Component1;
