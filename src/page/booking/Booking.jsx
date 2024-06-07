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
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { BookingUpdate, OrderCancel, getAllBooking } from "../../store/actions/bookingAction";


const Booking = () => {
  const base = 'https://dubaisafari.saeedantechpvt.com/';
  const [bookings, setBooking] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(getAllBooking())
      .then((res) => {
        setBooking(res.data.payload);
        console.log(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleCancel = (id) => {
    dispatch(OrderCancel(id))
      .then((res) => {
        setBooking((prevBookings) => prevBookings.filter(booking => booking.id !== id));
        console.log("Booking cancelled successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id, date) => {
    setSelectedBookingId(id);
    setSelectedDate(date);
    setOpenModal(true);
  };

  const handleUpdate = () => {
    dispatch(BookingUpdate(selectedBookingId, selectedDate))
      .then((res) => {
        setBooking((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === selectedBookingId ? { ...booking, date: selectedDate } : booking
          )
        );
        setOpenModal(false);
        console.log("Booking updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <TableHead sx={{ backgroundColor: "#E3E3E3" }}>
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
              {bookings && bookings.map((val, ind) => (
                <TableRow key={ind}>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "5px", alignItems: 'center' }}>
                      <img src={`${base}${val?.package?.activity?.image_url}`} alt="img" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
                      <Typography sx={{ fontSize: '1rem', fontWeight: '600' }}>{val?.package?.title}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <Avatar />
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', fontWeight: '800' }}>{val?.first_name}</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: 'grey' }}>{val?.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{val?.date}</TableCell>
                  <TableCell>{val?.adult} adult {val?.child} child {val?.infant} infant</TableCell>
                  <TableCell>{val?.total_amount}</TableCell>
                  <TableCell sx={{ fontWeight: '600', color: val.status === "Confirm" ? "green" : "red" }}>
                    {val.status}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Button
                        variant="contained"
                        sx={{ fontSize: '0.7rem', textTransform: 'none' }}
                        onClick={() => handleEdit(val.id, val.date)} // Open modal for editing
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ fontSize: '0.7rem', textTransform: 'none' }}
                        onClick={() => handleCancel(val.id)} // Pass the booking ID to the handler
                      >
                        Cancel
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...modalStyle, width: 400 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Booking Date
            </Typography>
            <TextField
              label="Select Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default Booking;
