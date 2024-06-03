import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Popover,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Badge,
  Link as MuiLink,
  Avatar,
  Select,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AllActivities from "../Landing/Components/AllActivities";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosBicycle } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { PiBuildingsBold } from "react-icons/pi";
import { logout } from "../../store/actions/authActions";

const Navbar = () => {
  const theme = useTheme();
  const base='https://dubaisafari.saeedantechpvt.com/'
  const userData = useSelector((state) => state.auth.user);
  console.log(userData, "User Data from BE");
  const authh = useSelector((state) => state.auth.isAuthenticated);

  const cartData = useSelector((state) => state.cart.cart.payload);
  const cartItemCount = cartData?.length;
  // const wishlistData = useSelector((state) => state.wishlist.wishlist.payload);
  // const wishlistCount = wishlistData.length;

  // console.log(authh, "authhhhhhhh");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

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
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenAvailable(token);
  }, []);

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      // localStorage.removeItem("token");
      // setTokenAvailable(false);

      dispatch(logout());
    } else if (value === "Manage Profile") {
      navigate("/manage-profile");
    } else if (value === "Booking") {
      navigate("/all-booking");
    } else if (value === "History") {
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

  const wishListLength = localStorage.getItem("wishListLength");

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  const data = [
    { name: "Desert Safari" },
    { name: "Sightseeing" },
    { name: "Adventure" },
    { name: "Attraction & Experiences" },
    { name: "Cruising & Yachting" },
    { name: "Transportation" },
  ];
  const data1 = [{ name: "Things to do" }, { name: "UAE Visa" }];

  // const ss = useSelector((state) => console.log(state, 'ssssssss'))

  if (location.pathname !== "/") {
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "0.8rem 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: location.pathname === "/" ? "sticky" : "static",
          top: 0,
          zIndex: 10000,
        }}
      >
        <Box>
          <Link to="/">
            <img src="/mainLogo.png" alt="Logo" style={{ height: '70px', width: '70px' }} />
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
              marginBottom={isSmallScreen ? "1rem" : "1rem"}
              sx={{
                position: "relative",
                "&:hover > .dropdown-menu": {
                  display: "block",
                  opacity: 1,
                },

              }}
            >
              <FormControl fullWidth size="small" variant="standard">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ borderBottom: "none", cursor: "pointer" }}
                >
                  What We Do
                </InputLabel>
              </FormControl>

              <Box
                className="dropdown-menu"
                sx={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  zIndex: 1,
                  width: "max-content",
                  padding: "1rem",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "10px 30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <IoIosBicycle
                        size={25}
                        style={{ color: theme.palette.primary.main }}
                      />
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Things To Do
                      </Typography>
                      <FaChevronRight
                        size={20}
                        style={{ color: theme.palette.primary.main }}
                      />
                    </Box>
                    <Divider />
                    {data.map((val, ind) => (
                      <Typography
                        key={ind}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate("/desert-safari")}
                      >
                        {val.name}
                      </Typography>
                    ))}
                  </Box>
                  <Box
                    sx={{ borderLeft: "1px solid #DCDCDC", marginTop: "55px" }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "10px 30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <PiBuildingsBold
                        size={25}
                        style={{ color: theme.palette.primary.main }}
                      />
                      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        Experience Dubai
                      </Typography>
                      <FaChevronRight
                        size={20}
                        style={{ color: theme.palette.primary.main }}
                      />
                    </Box>
                    <Divider />
                    {data1.map((val, ind) => (
                      <Typography
                        key={ind}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate("/desert-safari")}
                      >
                        {val.name}
                      </Typography>
                    ))}
                  </Box>


                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                placeholder="Search for Experience"
                size="small"
                variant="outlined"
                value={searchKeyword}
                onChange={handleSearchChange}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
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
                    <InputAdornment
                      position="end"
                      style={{ padding: 0, margin: 0 }}
                    >
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
                alignItems: "center",
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
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
                  badgeContent={wishListLength}
                  // badgeContent={wishlistCount}

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
                    Wish List
                  </MuiLink>
                </Badge>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
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
                  // badgeContent={0}
                  badgeContent={cartItemCount}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                cursor: "pointer",
              }}
            >
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
                            src={userData ? `${base}${userData.profile_image}` : ""}
                            sx={{ marginRight: "8px" }}
                          />
                          {userData.first_name}
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
            </Box>
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
            <Typography sx={{ fontSize: "1.2rem" }}> Eng/AED</Typography>
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
                      {userData.name}
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
                if (event.key === "Enter") {
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
                  <InputAdornment
                    position="end"
                    style={{ padding: 0, margin: 0 }}
                  >
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
