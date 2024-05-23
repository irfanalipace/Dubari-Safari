import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
  useTheme,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Side_Image from "../Components/Side_Image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/actions/authActions";

const Login_Main = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formValues))
      .then((result) => {
        if (result.success) {
          setFormValues(initialValues)
          navigate('/')
      } else {
          setErrors('error');
      }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ padding: "2rem 8rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Box>
                  <img src="/Logo.png" alt="Logo" />
                </Box>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: "2rem", fontWeight: "600" }}
                  >
                    Welcome Back
                  </Typography>

                  <Typography
                    variant="h1"
                    sx={{ fontSize: "1rem", color: "grey" }}
                  >
                    Please input your information in the fields below to enter
                    your Journey platform.
                  </Typography>
                </Box>

                <Box sx={{ width: "100%", marginTop: "3rem" }}>
                  <Box sx={{ textAlign: "start" }}>
                    <label>Email</label>
                    <TextField
                      fullWidth
                      sx={{ marginTop: "0.3rem" }}
                      size="small"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      label="Email"
                    />
                  </Box>
                  <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
                    <label>Password</label>
                    <TextField
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
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
                              {showPassword ? (
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

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                      />
                    </FormGroup>
                    <Link
                      to="/forget-password"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ color: theme.palette.primary.main }}>
                        Forget Password
                      </Typography>
                    </Link>
                  </Box>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ width: "100%", padding: "0.5rem 0rem" }}
                  >
                    Sign in
                  </Button>
                </Box>

                <Typography
                  sx={{ marginTop: "1rem", color: "grey", fontSize: "0.9rem" }}
                >
                  or sign in with
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "transparent",
                    color: "black",
                    textTransform: "none",
                    width: "100%",
                    border: "1px solid #ff5532",
                    boxShadow: "none",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Google
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "transparent",
                    color: "black",
                    textTransform: "none",
                    width: "100%",
                    border: "1px solid #ff5532",
                    boxShadow: "none",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Facebook
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "transparent",
                    color: "black",
                    textTransform: "none",
                    width: "100%",
                    border: "1px solid #ff5532",
                    boxShadow: "none",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Iphone
                </Button>

                <Box
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    Don’t have an account?
                  </Typography>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                        marginLeft: "0.5rem",
                      }}
                    >
                      Signup!
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
            }}
          >
            <Side_Image />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login_Main;
