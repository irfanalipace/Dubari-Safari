import {
  Box,
  Divider,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  useTheme,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const DetailLeft = ({ ac_data }) => {
  const [date, setDate] = useState("");
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogDetails = () => {
    if (!date) {
      enqueueSnackbar("Please Select Date", { variant: "error" });
    } else {
      const data = {
        date: date,
        person: {
          adult,
          child,
          infant,
        },
        activity: ac_data,
      };
      navigate("/payment-details", { state: data });
    }
  };

  const handleSelectClick = () => {
    if (!date) {
      enqueueSnackbar("Please Select Date", { variant: "error" });
    } else {
      setAccordionExpanded(true);
    }
  };

  const data = [
    {
      title: "Private Arabian Dunes",
      type: "Sharing",
      price: "AED 1,200",
      per: "Per Adult",
    },
    // {
    //     title: "Evening Desert Safari",
    //     type: "Private",
    //     price: "AED 900",
    //     per: "Per Adult",
    // },
    // {
    //     title: "Morning Desert Safari",
    //     type: "Sharing",
    //     price: "AED 600",
    //     per: "Per Adult",
    // },
  ];

  return (
    <Box
      sx={{
        border: "2px solid #EDEDED",
        borderRadius: "20px",
        padding: "30px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: "18px", paddingLeft: "20px" }}
        >
          Select Date & Activity Option
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <Box sx={{ padding: "0px 20px", width: "90%" }}>
          <InputLabel>Please Select Date</InputLabel>
          <TextField
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{
              backgroundColor: "#EDEDED",
              borderRadius: "7px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ padding: "0px 20px", width: "90%" }}>
          <FormControl
            fullWidth
            sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
          >
            <Button
              fullWidth
              onClick={() => setShowDropdowns(!showDropdowns)}
              sx={{
                backgroundColor: "#EDEDED",
                borderRadius: "7px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#EDEDED",
                },
              }}
            >
              Select Person
            </Button>
          </FormControl>
        </Box>
        {showDropdowns && (
          <>
            <Box sx={{ padding: "0px 20px", width: "90%" }}>
              <InputLabel>Adult</InputLabel>
              <FormControl
                fullWidth
                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
              >
                <Select
                  value={adult}
                  onChange={(e) => setAdult(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  {[...Array(5).keys()].map((num) => (
                    <MenuItem key={num + 1} value={num + 1}>
                      {num + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ padding: "0px 20px", width: "90%" }}>
              <InputLabel>Child</InputLabel>
              <FormControl
                fullWidth
                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
              >
                <Select
                  value={child}
                  onChange={(e) => setChild(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  {[...Array(5).keys()].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ padding: "0px 20px", width: "90%" }}>
              <InputLabel>Infant</InputLabel>
              <FormControl
                fullWidth
                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
              >
                <Select
                  value={infant}
                  onChange={(e) => setInfant(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  {[...Array(5).keys()].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </>
        )}
        <Divider sx={{ width: "100%" }} />
        <Box sx={{ padding: "20px", width: "90%" }}>
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                padding: "20px",
                border: "1px solid #EDEDED",
                borderRadius: "10px",
                marginBottom: "10px",
                backgroundColor: "#EDEDED",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#EDEDED" }}>
                  {item.type}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  {item.price}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#EDEDED" }}>
                  {item.per}
                </Typography>
              </Box>
              <Box>
                <Button
                  onClick={handleSelectClick}
                  variant="contained"
                  sx={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Select
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <ActivityCard />
    </Box>
  );
};

export default DetailLeft;

const ActivityCard = () => {
  const dispatch = useDispatch();
  const handleCart = () => {
    const pkg_id = 1;
    const quantity = 3;
    dispatch(addToCart(pkg_id, quantity))
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        padding: "20px",
        border: "1px solid #EDEDED",
        borderRadius: "10px",
        marginBottom: "10px",
        backgroundColor: "#EDEDED",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
          This is the title
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: 600, ml: 10 }}>
          AED 600
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box sx={{ mb: 1 }}>
          <Tooltip title="Add to cart">
            <Button
              onClick={handleCart}
              variant="contained"
              sx={{
                color: "white",
                fontSize: "12px",
              }}
            >
              <AddShoppingCartIcon />
            </Button>
          </Tooltip>
        </Box>

        <Button
          // onClick={handleLogDetails}
          variant="contained"
          sx={{
            color: "white",
            fontSize: "12px",
          }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};
