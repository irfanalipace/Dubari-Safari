import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Badge,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AllActivities from "../Landing/Components/AllActivities";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width:1024px)");

  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleSignup = ()=>{
    navigate('/signup')
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Close drawer when screen size becomes larger
    if (!isSmallScreen) {
      setOpenDrawer(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to="/">
            <img src="/Logo.png" alt="Logo" />
          </Link>
        </Box>

        {isSmallScreen ? (
          <Button onClick={handleDrawerOpen}>
            <MenuIcon />
          </Button>
        ) : (
          <>
            <Box
              width={isSmallScreen ? "100%" : "7rem"}
              marginBottom={isSmallScreen ? "1rem" : "0"}
            >
              <FormControl fullWidth size="small" variant="standard">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ borderBottom: "none" }}
                >
                  What We Do
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                placeholder="Search for Experience"
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    padding: 0, // Set padding to 0
                    "&:hover": {
                      borderColor: "#f7f7f7",
                    },
                    "&.Mui-focused": {
                      boxShadow: "none",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    color: "#f7f7f7",
                  },

                  borderRadius: "0px",
                  backgroundColor: "white",
                }}
                InputProps={{
                  sx: {
                    padding: 0, // Ensure no padding for the input
                  },

                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ padding: 0, margin: 0 }}
                    >
                      <Button
                        sx={{
                          mr: -1.5,
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0px 5px 5px 0px",
                          ":hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                      >
                        <SearchOutlinedIcon
                          onClick={() => navigate("/search-results")}
                        />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HelpOutlineIcon />
              <Typography> Eng/AED</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HelpOutlineIcon />
              <Typography>Help</Typography>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              component={Link}
              to="/wish-list"
            >
              <Badge
                badgeContent={4}
                color="primary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <FavoriteBorderRoundedIcon />
              </Badge>
              <Typography>Wishlist</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartOutlinedIcon />
              <Typography> Cart</Typography>
            </Box>

            <Button
          onClick={handleSignup}

              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "0.5rem 2rem",
                textTransform: "none",
              }}
            >
              Sign-Up
            </Button>
          </>
        )}
      </Box>

      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Box
          gap={3}
          sx={{
            padding: "2rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          {/* Close button in the top right corner */}
          <Button
            onClick={handleDrawerClose}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          >
            <CloseIcon />
          </Button>

          {/* Drawer Content */}
          <Box width="100%" marginBottom="1rem">
            <FormControl fullWidth size="small" variant="standard">
              <InputLabel id="demo-simple-select-label">What We Do</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="What We Do"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HelpOutlineIcon />
            <Typography> Eng/AED</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HelpOutlineIcon />
            <Typography>Help</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FavoriteBorderRoundedIcon />
            <Typography>Wishlist</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartOutlinedIcon />
            <Typography> Cart</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder="Search for Experience"
              size="small"
              variant="outlined"
              sx={{ padding: 0 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <Button
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        ":hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                        },
                      }}
                    >
                      <SearchOutlinedIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
          onClick={handleSignup}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: "0.5rem 2rem",
              textTransform: "none",
              marginTop: "1rem",
            }}
          >
            Sign-Up
          </Button>
        </Box>
      </Drawer>

      <Divider />

      <AllActivities />
    </>
  );
};

export default Navbar;
