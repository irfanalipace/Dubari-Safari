import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const HelpPageMain = () => {

    const helpcarddata=[
        {
            icon:'/bookingicon.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
        {
            icon:'/paymenticon.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
        {
            icon:'/refunds.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
        {
            icon:'/modification.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
        {
            icon:'/cashbacks.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
        {
            icon:'/bookingicon.png',
            title:'Booking',
            description:` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo quas minus quia animi ipsam ex numquam nam
            labore repellat?`
        },
    ]


  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffc0b3",
          height: "50vh",
          width: "100%",
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
            paddingLeft: "5%",
            paddingRight: "5%",
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

            <Box sx={{ display: "flex", width: "100%" }} gap={3}>
              <Box sx={{ textAlign: "start", width: "100%" }}>
                <TextField
                  name="visa_status"
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
              <Box sx={{ textAlign: "start", width: "100%" }}>
                <TextField
                  name="visa_status"
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

              <Button
                variant="contained"
                sx={{
                  width: "25%",
                  padding: "0rem 2rem",
                  textTransform: "none",
                }}
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

{helpcarddata.map((val, ind)=>(
    <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box
              sx={{
                border: "1px solid #ebebeb",
                padding: "2rem 1rem",
                borderRadius:'15px',
                textAlign: "center",
              }}
            >
              <Box>
                <img src={val.icon} alt="icon" />
              </Box>

              <Typography variant="h1" sx={{fontSize:'1.5rem', fontWeight:'600', marginTop:'0.5rem'}}>{val.title}</Typography>
              <Typography variant="body1" sx={{fontSize:'0.9rem', color:'grey', marginTop:'0.5rem'}}>
                {val.description}
              </Typography>
            </Box>
            </Grid>
))}


          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HelpPageMain;
