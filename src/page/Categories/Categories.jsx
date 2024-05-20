import React from "react";
import Page from "../../components/page";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PkgCard from "../../components/Pkg_Card/PkgCard";

const Categories = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    { name: "Desert Safari Tours", avatar: "/jeep.jpg" },
    { name: "City Tours", avatar: "/jeep.jpg" },
    { name: "Show Cruise", avatar: "/jeep.jpg" },
    { name: "Water Activities", avatar: "/jeep.jpg" },
    { name: "Airport Transfers", avatar: "/jeep.jpg" },
    { name: "Theme Parks", avatar: "/jeep.jpg" },
    { name: "Hop On Hop Off Bus", avatar: "/jeep.jpg" },
  ];
  const cardData = [
    { title: "Show Cruise Dubai", del: 2650, price: 2000 },
    { title: "ruise Dubai", del: 2650, price: 2000 },
    { title: "Show Cruise ", del: 2650, price: 2000 },
    { title: "Show ", del: 2650, price: 2000 },
    { title: "Show  Dubai", del: 2650, price: 2000 },
    { title: "Show Cruise", del: 2650, price: 2000 },
    { title: "ruise Dubai", del: 2650, price: 2000 },
    { title: "Show Cruise ", del: 2650, price: 2000 },
    { title: "Show ", del: 2650, price: 2000 },
    { title: "Show  Dubai", del: 2650, price: 2000 },
    { title: "Show Cruise", del: 2650, price: 2000 },
  ];
  return (
    <Page title="Categories">
      <Box sx={{ p: 10 }}>
        <Button variant="contained" startIcon={<ArrowBack />}>
          Back to home page
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 3 }}>
            Categories
          </Typography>
          <Typography sx={{ color: "grey", fontWeight: "bold" }}>
            View All
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 6 }}>
          {categories.map((val, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mr: 4,
              }}
            >
              <Avatar
                src="/jeep.jpg"
                sx={{ height: "150px", width: "150px" }}
              />
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {val.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ flex: 2, whiteSpace: "nowrap" }}
          >
            Things to do in Abu Dhabi
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Typography fontWeight="bold" sx={{ whiteSpace: "nowrap", mr: 2 }}>
              Sort result by
            </Typography>
            <FormControl fullWidth sx={{ mr: 2 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {cardData.map((val) => {
            return (
              <Grid item xs={12} lg={3}>
                <PkgCard />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Page>
  );
};

export default Categories;