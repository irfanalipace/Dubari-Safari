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
  Link as MuiLink,
  Avatar,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AllActivities from "../Landing/Components/AllActivities";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const theme = useTheme();
  const authh = useSelector((state) => state.auth.isAuthenticated)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const storedKeyword = localStorage.getItem("searchKeyword");
    if (storedKeyword) {
      setSearchKeyword(storedKeyword);
    }
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [tokenAvailable, setTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenAvailable(token);
  }, []);

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      localStorage.removeItem("token");
      setTokenAvailable(false);
    } else if (value === "Manage Profile") {
      navigate("/manage-profile");
    }
    else if (value === "Booking") {
      navigate("/all-booking");
    }
    else if (value === "History") {
      navigate("/history");
    }
    setSelectedValue("");
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (!isSmallScreen) {
      setOpenDrawer(false);
    }
  };

  const handleSearchClick = () => {

    localStorage.setItem("searchKeyword", searchKeyword);
    navigate(`/search-results`);
  };

  useEffect(() => {
    localStorage.removeItem("searchKeyword");
    setSearchKeyword("");

  }, []);

  const handleSearchChange = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    localStorage.setItem("searchKeyword", keyword);

  };
  useEffect(() => {

    if (location.pathname !== "/search-results") {
      setSearchKeyword("");
      localStorage.removeItem("searchKeyword");
    }
  }, [location.pathname]);

console.log(searchKeyword, 'Search')

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
                value={searchKeyword}
                onChange={handleSearchChange}
                onKeyDown={(event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }}
                sx={{
                  "& .MuiInputBase-root": {
                    padding: 0,
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
                    padding: 0,
                  },
                  endAdornment: (
                    <InputAdornment position="end" style={{ padding: 0, margin: 0 }}>
                      <Button
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          padding: "0.5rem",
                          borderRadius: "0px 5px 5px 0px",
                          ":hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                        onClick={handleSearchClick}
                      >
                        <SearchOutlinedIcon />
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

            <Box
              sx={{
                display: "flex",
                alignItems: "cener",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/help"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <HelpOutlineIcon />
                  Help
                </MuiLink>
              </Typography>
            </Box>
            {/* <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              component={Link}
              to="/help"
            >



              <Typography>Help</Typography>
            </Box> */}

            <Box
              sx={{
                display: "flex",
                alignItems: "cener",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MuiLink
                    component={Link}
                    to="/wish-list"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    <FavoriteBorderRoundedIcon />
                    Wishlist
                  </MuiLink>
                </Badge>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "cener",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MuiLink
                    component={Link}
                    to="/cart"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                    Cart
                  </MuiLink>
                </Badge>
              </Typography>
            </Box>

            {tokenAvailable ? (
              <Box>
                <FormControl sx={{ padding: 0 }}>
                  <Select
                    sx={{
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remove the outline border
                      },
                    }}
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select user" }}
                    style={{ minWidth: "120px", padding: 0 }}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt=""
                          src="/avatar.jpg"
                          sx={{ marginRight: "8px" }}
                        />
                        Profile
                      </Box>
                    )}
                  >
                    <MenuItem
                      value="Manage Profile"
                      onClick={() => handleMenuItemClick("Manage Profile")}
                    >
                      Manage Profile
                    </MenuItem>
                    <MenuItem
                      value="Booking"
                      onClick={() => handleMenuItemClick("Booking")}
                    >
                      Booking
                    </MenuItem>

                    <MenuItem
                      value="History"
                      onClick={() => handleMenuItemClick("History")}
                    >
                      History
                    </MenuItem>

                    <MenuItem
                      value="Logout"
                      onClick={() => handleMenuItemClick("Logout")}
                    >
                      Logout
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
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
            )}
          </>
        )}
      </Box>

      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Box
          gap={2}
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
            <Typography sx={{fontSize:'1.2rem'}}> Eng/AED</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "cener",

              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",

                textTransform: "none",
              }}
            >
              <MuiLink
                component={Link}
                to="/help"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                <HelpOutlineIcon />
                Help
              </MuiLink>
            </Typography>
          </Box>
          {/* <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              component={Link}
              to="/help"
            >



              <Typography>Help</Typography>
            </Box> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "cener",

              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",

                textTransform: "none",
              }}
            >
              <Badge
                badgeContent={4}
                color="primary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/wish-list"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <FavoriteBorderRoundedIcon />
                  Wishlist
                </MuiLink>
              </Badge>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "cener",

              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                textTransform: "none",
              }}
            >
              <Badge
                badgeContent={1}
                color="primary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/cart"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  Cart
                </MuiLink>
              </Badge>
            </Typography>
          </Box>
          {authh ? (
              <Box>
                <FormControl sx={{ padding: 0 }}>
                  <Select
                    sx={{
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remove the outline border
                      },
                    }}
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select user" }}
                    style={{ minWidth: "120px", padding: 0 }}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt=""
                          src="/avatar.jpg"
                          sx={{ marginRight: "8px" }}
                        />
                        Profile
                      </Box>
                    )}
                  >
                    <MenuItem
                      value="Manage Profile"
                      onClick={() => handleMenuItemClick("Manage Profile")}
                    >
                      Manage Profile
                    </MenuItem>

                    <MenuItem
                      value="Booking"
                      onClick={() => handleMenuItemClick("Booking")}
                    >
                      Booking
                    </MenuItem>

                    <MenuItem
                      value="History"
                      onClick={() => handleMenuItemClick("History")}
                    >
                      History
                    </MenuItem>

                    <MenuItem
                      value="Logout"
                      onClick={() => handleMenuItemClick("Logout")}
                    >
                      Logout
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
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
            )}
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
                placeholder="Search for Experience"
                size="small"
                variant="outlined"
                value={searchKeyword}
                onChange={handleSearchChange}
                onKeyDown={(event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }}
                sx={{
                  "& .MuiInputBase-root": {
                    padding: 0,
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
                    padding: 0,
                  },
                  endAdornment: (
                    <InputAdornment position="end" style={{ padding: 0, margin: 0 }}>
                      <Button
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          padding: "0.5rem",
                          borderRadius: "0px 5px 5px 0px",
                          ":hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                        onClick={handleSearchClick}
                      >
                        <SearchOutlinedIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>


        </Box>
      </Drawer>

      <Divider />

      <AllActivities />
    </>
  );
};

export default Navbar;
