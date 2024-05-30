import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IoIosPeople } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const Component1 = () => {
  const theme = useTheme()
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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
  };

  const [selectedValue, setSelectedValue] = useState(30); // 30 corresponds to "Mr"
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleContinue = () => {
    navigate("/payment-details");
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
            <IoIosPeople size={35} style={{ color: theme.palette.primary.main }} />
            Lead Passenger Details
          </Typography>
          <Typography sx={{ fonSize: "1rem", color: "grey" }}>
            Please Enter Your Passenger Details
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>Title</label>
              <FormControl fullWidth>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={selectedValue}
                  sx={textFieldStyle}
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>First Name</label>
              <TextField placeholder="First Name" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Last Name</label>
              <TextField placeholder="Last Name" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Email Address</label>
              <TextField placeholder="Email" sx={textFieldStyle} />
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

              {/* <TextField placeholder='Nationality' sx={textFieldStyle} /> */}
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Phone Number</label>
              <TextField placeholder="Phone Number" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Special Request</label>
              <TextField placeholder="Phone Number" sx={textFieldStyle} />
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
          <Typography sx={{ fonSize: "1rem", color: "grey" }}>
            Please Enter your Extra Details
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Pick up Location</label>
              <TextField placeholder="Enter you Address" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Louvre Museum Day Pass - Dated - Without Transfers</label>
              <TextField placeholder="Note" sx={textFieldStyle} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: 2 }}>
              <input type="checkbox" name="checkbox" id="" />
              <Typography sx={{ color: theme.palette.primary.main }}>Apply Earned Points -  2500</Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>
      <Box
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          padding: "3rem 5%",
          borderRadius: "10px",
          marginTop: "2rem",
          background: "#fff",
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>Choose a Payment Method</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#90A3BF' }}>Please enter your Payment Details</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <input type="radio" name="paymentMethod" id="creditCard" />
            <Typography sx={{ fontWeight: 600 }}>Credit Card</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <input type="radio" name="paymentMethod" id="debitCard" />
            <Typography sx={{ fontWeight: 600 }}>Debit Card</Typography>
          </Box>

        </Box>
        <Typography><span style={{ color: theme.palette.primary.main, fontWeight: 600 }}>Note:</span>&nbsp; In the next step you will be redirected to your banks website to verify yourself. </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', mt: 2 }}>
        <Button variant="contained" sx={{ textTransform: 'none', padding: '10px 40px', backgroundColor: theme.palette.primary.main, color: 'white' }}>
          Pay Now
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px", mt: 2 }}>
        <input type="checkbox" name="" id="" />
        <Typography>Buy Clickiny Pay Now, You agree that you read and understand our <span style={{ color: theme.palette.primary.main }}> Terms & Condition</span></Typography>
      </Box>
    </>
  );
};

export default Component1;
{/* <Box sx={{ marginTop: "2rem" }} gap={5}>
          <Button
            variant="contained"
            sx={{
              padding: "0.8rem 3rem",
              backgroundColor: "grey",
              color: "white",
              textTransform: "none",
              fontSize: "0.8rem",
              ":hover": {
                backgroundColor: "grey",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              marginLeft: "2rem",
              padding: "0.8rem 1.5rem",
              textTransform: "none",
              fontSize: "0.8rem",
            }}
            onClick={handleContinue}
          >
            Save & Continue
          </Button>
        </Box> */}