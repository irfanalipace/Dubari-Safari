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
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const DetailLeft = ({ ac_data }) => {
  const [person, setPerson] = useState(1);
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogDetails = () => {
    if (!date) {
      enqueueSnackbar("Please Select Date", { variant: "error" });
    } else {
      const data = {
        date: date,
        person: person,
        activity: ac_data,
      };
      // console.log(data);
      navigate("/payment-details", { state: data });
    }
  };

  const data = [
    {
      title: "Private Arabian Dunes",
      type: "Sharing",
      price: "AED 1,200",
      per: "Per Adult",
    },
    {
      title: "Evening Desert Safari",
      type: "Private",
      price: "AED 900",
      per: "Per Adult",
    },
    {
      title: "Morning Desert Safari",
      type: "Sharing",
      price: "AED 600",
      per: "Per Adult",
    },
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
          <InputLabel>Person</InputLabel>
          <FormControl
            fullWidth
            sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
          >
            <Select
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              placeholder="Add Person"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={1}>1 Person</MenuItem>
              <MenuItem value={2}>2 Persons</MenuItem>
              <MenuItem value={3}>3 Persons</MenuItem>
              <MenuItem value={4}>4 Persons</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
                  onClick={handleLogDetails}
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
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DetailLeft;
