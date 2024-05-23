import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ManageProfileMain = () => {
  const [selectedValue, setSelectedValue] = useState(30); // 30 corresponds to "Mr"
  const [visaSelectedValue, setVisaSelectedValue] = useState(""); // 30 corresponds to "Mr"
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleClickShowCurrentPassword = () =>
    setShowCurrentPassword(!showCurrentPassword);

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

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {};
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeVisaStatus = (event) => {
    setVisaSelectedValue(event.target.value);
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
      <Box sx={{ padding: "1rem 5%" }}>
        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Back to Listing
        </Button>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.5rem", fontWeight: "700", mt: 3 }}
        >
          Manage My Account
        </Typography>

        <Box
          sx={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          gap={4}
        >
          <Box sx={{ width: "8rem", height: "8rem" }}>
            <Avatar sx={{ width: "100%", height: "100%" }} />
          </Box>
          <Box>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{ textTransform: "none" }}
            >
              Upload Photo
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ margin: "1rem 0rem" }}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>Title</label>
              <FormControl fullWidth>
                <Select
                  value={selectedValue}
                  sx={textFieldStyle}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Mr.</MenuItem>
                  <MenuItem value={20}>Miss</MenuItem>
                  <MenuItem value={30}>Mr</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>First Name</label>
              <TextField placeholder="First Name" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Last Name</label>
              <TextField placeholder="Last Name" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Email Address</label>
              <TextField placeholder="Email" sx={textFieldStyle} />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
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
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Phone Number</label>
              <TextField placeholder="Phone Number" sx={textFieldStyle} />
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Visa Status</label>
              <FormControl fullWidth>
                <Select
                  value={visaSelectedValue}
                  sx={textFieldStyle}
                  onChange={handleChangeVisaStatus}
                >
                  <MenuItem value="Tourist">Tourise</MenuItem>
                  <MenuItem value="Citizen">Citizen</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ padding: "1rem 2%" }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}
          >
            Change Password
          </Typography>
          <Divider />

          <Grid container spacing={5} sx={{ marginTop: "0rem" }}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "1.2rem" }}>Current Password</label>
                <TextField
                  placeholder="Phone Number"
                  sx={textFieldStyle}
                  type={showCurrentPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCurrentPassword}
                          edge="end"
                        >
                          {showCurrentPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} sx={{ marginTop: "0rem" }}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "1.2rem" }}>Confirm Password</label>
                <TextField
                  placeholder="Phone Number"
                  sx={textFieldStyle}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>

            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "1.2rem" }}>Confirm Password</label>
                <TextField
                  placeholder="Phone Number"
                  sx={textFieldStyle}
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>


<Box sx={{display:'flex', justifyContent:'end', alignItems:'end', mt:2}}>
<Button variant="contained" sx={{justifyContent:'end', textTransform:'none', fontSize:'1.1rem', padding:'0.5rem 2rem'}}>Update Password</Button>

</Box>

        </Box>
      </Box>
    </>
  );
};

export default ManageProfileMain;
