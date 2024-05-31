import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Page from "../../components/page";
import { SendHelp } from "../../store/actions/helpAction";
import { enqueueSnackbar } from "notistack";

const HelpPageMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [bookingRefNo, setBookingRefNo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const formValues = {
      email,
      booking_ref_no: bookingRefNo,
      description,
    };

    try {
      const res = await dispatch(SendHelp(formValues));
      // console.log(res, 'ff')
      enqueueSnackbar(res.data.message, { variant: "success" })
      setEmail("");
      setBookingRefNo("");
      setDescription("");
    } catch (error) {
      enqueueSnackbar('Failed to send help request', { variant: "error" })
      console.error("Failed to send help request:", error);
    }
  };

  const helpcarddata = [
    {
      icon: "/bookingicon.png",
      title: "Booking",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
    {
      icon: "/paymenticon.png",
      title: "Payment",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
    {
      icon: "/refunds.png",
      title: "Cancellation & Refunds",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
    {
      icon: "/modification.png",
      title: "Booking Modification",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
    {
      icon: "/cashbacks.png",
      title: "Coupons & Cashbacks",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
    {
      icon: "/quries.png",
      title: "General Queries",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`,
    },
  ];

  return (
    <>
      <Page title="Help | Arabia Horizon">
        <Box
          sx={{
            backgroundColor: "#ffc0b3",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              color: "white",
              minHeight: "50vh",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box minHeight={"3rem"} width="70%">
              <img src="/helpicon.png" alt="icon" />

              <Typography
                sx={{
                  color: "black",
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  fontWeight: "600",
                }}
              >
                Hello How Can we help you?
              </Typography>

              <Box sx={{ display: "flex", justifyContent: 'space-between', gap: '30px' }}>
                <Box sx={{ textAlign: "", width: '110%' }}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "none",
                        "&:hover": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused": {
                          boxShadow: "none",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        display: "none",
                      },
                      borderRadius: "5px",
                      backgroundColor: "#f6f7f9",
                    }}
                    size="small"
                    placeholder="Email"
                  />
                </Box>
                <Box sx={{ textAlign: "", width: '110%' }}>
                  <TextField
                    value={bookingRefNo}
                    onChange={(e) => setBookingRefNo(e.target.value)}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "none",
                        "&:hover": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused": {
                          boxShadow: "none",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        display: "none",
                      },
                      borderRadius: "5px",
                      backgroundColor: "#f6f7f9",
                    }}
                    placeholder="Booking Reference Number"
                    size="small"
                  />
                </Box>
                {/* <Box sx={{ textAlign: "start", width: '150%' }}>
                  <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "none",
                        "&:hover": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused": {
                          boxShadow: "none",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        display: "none",
                      },
                      borderRadius: "5px",
                      backgroundColor: "#f6f7f9",
                    }}
                    placeholder="Enter Your Description"
                    size="small"
                  />
                </Box> */}

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    padding: "0rem 0rem",
                    textTransform: "none",
                  }}
                  onClick={handleSubmit}
                >
                  Get Help
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: "3rem 10%" }}>
          <Box>
            <Grid container spacing={4}>
              {helpcarddata.map((val, ind) => (
                <Grid item lg={4} md={6} sm={12} xs={12} key={ind}>
                  <Box
                    sx={{
                      border: "1px solid #ebebeb",
                      padding: "2rem 1rem",
                      borderRadius: "15px",
                      textAlign: "center",
                      minHeight: "12rem",
                    }}
                  >
                    <Box>
                      <img src={val.icon} alt="icon" />
                    </Box>

                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        marginTop: "0.5rem",
                      }}
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "0.9rem",
                        color: "grey",
                        marginTop: "0.5rem",
                      }}
                    >
                      {val.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "3rem",
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: '600' }}>Can't find what you're looking for?</Typography>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
              gap={3}
            >
              <Box
                sx={{
                  border: "1px solid #ebebeb",
                  borderRadius: "15px",
                  padding: "2rem 4rem",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <img src="/chatico.png" alt="Altttt" />
                </Box>

                <Typography
                  variant="h1"
                  sx={{ fontSize: "1.3rem", fontWeight: "700" }}
                >
                  Chat With Us
                </Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid #ebebeb",
                  borderRadius: "15px",
                  padding: "2rem 4rem",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <img src="/contacticon.png" alt="Altttt" />
                </Box>

                <Typography
                  variant="h1"
                  sx={{ fontSize: "1.3rem", fontWeight: "700" }}
                >
                  Contact Us
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Page>
    </>
  );
};

export default HelpPageMain;
