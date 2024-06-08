import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Booking = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const bookingsData = [
    { id: 1, date: "2024-05-24", tickets: 2, price: "AED100", status: "Confirm" },
    { id: 2, date: "2024-05-25", tickets: 3, price: "AED150", status: "Unpaid" },
    { id: 2, date: "2024-05-25", tickets: 3, price: "AED150", status: "Confirm" },
    { id: 2, date: "2024-05-25", tickets: 3, price: "AED150", status: "Unpaid" },
    { id: 2, date: "2024-05-25", tickets: 3, price: "AED150", status: "Confirm" },
  ];

  const styleFont = {
    fontWeight: 600,
  };

  return (
    <>
      <Box sx={{ padding: "30px" }}>
        <Button
          onClick={handleBack}
          sx={{
            textTransform: "none",
            backgroundColor: "#F3F3F3",
            color: "black",
            padding: "10px 20px",
          }}
        >
          👈🏻Back to HomePage
        </Button>
        <Typography
          sx={{ fontSize: "28px", fontWeight: 700, padding: "30px 0px" }}
        >
          All Bookings
        </Typography>


        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#E3E3E3", }}>
              <TableRow>
                <TableCell sx={styleFont}>Tour Name</TableCell>
                <TableCell sx={styleFont}>Customer Name</TableCell>
                <TableCell sx={styleFont}>Tour Date</TableCell>
                <TableCell sx={styleFont}>How Many Tickets</TableCell>
                <TableCell sx={styleFont}>Price</TableCell>
                <TableCell sx={styleFont}>Status</TableCell>
                <TableCell sx={styleFont}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingsData.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "5px", alignItems:'center' }}>
                      <img src="mainLogo.png" alt="img" style={{height:'40px', width:'40px'}} />
                      <Typography sx={{fontSize:'1rem', fontWeight:'600'}}>package</Typography>
                    </Box>
                  </TableCell>

                 <TableCell>
                 <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                  >
                    <Avatar />
                    <Box>
                      <Typography sx={{fontSize:'0.8rem', fontWeight:'800' }}>name</Typography>
                      <Typography sx={{fontSize:'0.8rem', color:'grey'}}>user@mail.com</Typography>
                    </Box>
                  </Box>
                 </TableCell>

                  <TableCell>{booking.date}</TableCell>

                  <TableCell>1 adult 2 child 3 infant</TableCell>
                  <TableCell>{booking.price}</TableCell>

                  <TableCell sx={{ fontWeight:'600', color: booking.status === "Confirm" ? "green" : "red" }}>
  {booking.status}
</TableCell>


<TableCell>
<Box sx={{ display: "flex", gap: "10px" }}>
                    <Button variant="contained" sx={{fontSize:'0.7rem', textTransform:'none'}}>Edit</Button>
                    <Button variant="contained" sx={{fontSize:'0.7rem', textTransform:'none'}}>Cancel</Button>
                  </Box>
</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Booking;
