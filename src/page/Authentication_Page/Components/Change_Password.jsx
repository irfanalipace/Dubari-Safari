import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Change_Password = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleConfirm = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ textAlign: "center", width: "40%", paddingBottom: "2rem" }}>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Change Your Password
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "grey" }}>
            Input your new desired password in the input fields below to create
            a new password.
          </Typography>

          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <label>Password</label>
            <TextField
              name="password"
              // value={formValues.password}
              // onChange={handleChange}
              fullWidth
              sx={{ marginTop: "0.3rem" }}
              size="small"
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

          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <label>Confirm Password</label>
            <TextField
              name="confirmPassword"
              // value={formValues.confirmPassword}
              // onChange={handleChange}
              fullWidth
              sx={{ marginTop: "0.3rem" }}
              size="small"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            onClick={handleConfirm}
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "2rem",
              padding: "0.5rem 0rem",
              textTransform: "none",
              fontSize: "1.1rem",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Change_Password;
