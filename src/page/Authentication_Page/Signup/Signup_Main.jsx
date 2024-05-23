import Side_Image from '../Components/Side_Image';
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    useTheme,
    IconButton,
    InputAdornment,
    MenuItem,

} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { userRegister } from '../../../store/actions/authActions';


const Signup_Main = () => {
    const initialValues = {
        first_name: '',
        last_name:'',
        phone:'',
        visa_status:'',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.password !== formValues.confirmPassword) {
            console.error("Passwords do not match");
            setErrors({ confirmPassword: "Passwords do not match" });
            return;
        }


        const updatedFormValues = {
            ...formValues,
            instagram: null,
            facebook: null,
            twitter: null
        };

        dispatch(userRegister(updatedFormValues)).then((result) => {
            if (result.success) {
                handleRegistrationSuccess(result.payload);
                setFormValues(initialValues)
                navigate('/login')
            } else {
                setErrors(result.payload);
            }
        }).catch((err) => {
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
                                        Create your account
                                    </Typography>

                                    <Typography
                                        variant="h1"
                                        sx={{ fontSize: "1rem", color: "grey" }}
                                    >
                                        Credentials are only used to authenticate the user to use our services. All data will be stored in your database.
                                    </Typography>
                                </Box>

                                <Box sx={{ width: "100%", marginTop: "3rem" }} component="form" onSubmit={handleSubmit}>
                                    <Box sx={{ textAlign: "start" }}>
                                        <label>First Name</label>
                                        <TextField
                                            name="first_name"
                                            value={formValues.first_name}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        />
                                    </Box>
                                    <Box sx={{ textAlign: "start" }}>
                                        <label>Last Name</label>
                                        <TextField
                                            name="last_name"
                                            value={formValues.last_name}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        />
                                    </Box>
                                    <Box sx={{ textAlign: "start" }}>
                                        <label>Phone</label>
                                        <TextField
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        />
                                    </Box>
                                    <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
                                        <label>Email</label>
                                        <TextField
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        />
                                    </Box>

                                    {/* <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
                                        <label>Visa Status</label>
                                        <TextField
                                            name="visa_status"
                                            value={formValues.visa_status}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        />
                                    </Box> */}

                                    <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
                                        <label>Visa Status</label>
                                        <TextField
                                            select
                                            name="visa_status"
                                            value={formValues.visa_status}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
                                        >
                                            <MenuItem value="student">Student</MenuItem>
                                            <MenuItem value="work">Work</MenuItem>
                                            <MenuItem value="tourist">Tourist</MenuItem>
                                            {/* Add other visa status options as needed */}
                                        </TextField>
                                    </Box>

                                    <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
                                        <label>Password</label>
                                        <TextField
                                            name="password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
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
                                            value={formValues.confirmPassword}
                                            onChange={handleChange}
                                            fullWidth
                                            sx={{ marginTop: "0.3rem" }}
                                            size='small'
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
                                    <Box sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', marginTop: '1rem', marginBottom: '1rem' }}>
                                        <input type='checkbox' />
                                        <Typography sx={{ marginLeft: '1rem' }}>I agree with </Typography>
                                        <Link
                                            to="/terms-&-conditions"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Typography sx={{ color: theme.palette.primary.main, marginLeft: '0.5rem' }}>
                                                Terms & Conditions
                                            </Typography>
                                        </Link>
                                    </Box>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ width: "100%", padding: "0.5rem 0rem", textTransform: 'none' }}
                                    >
                                        Sign up
                                    </Button>
                                </Box>

                                <Typography
                                    sx={{ marginTop: "1rem", color: "grey", fontSize: "0.9rem" }}
                                >
                                    or signup with
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
                                        Have an account?
                                    </Typography>
                                    <Link to="/login" style={{ textDecoration: "none" }}>
                                        <Typography sx={{ color: theme.palette.primary.main, marginLeft: '0.5rem' }}>
                                            Login
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

export default Signup_Main;
