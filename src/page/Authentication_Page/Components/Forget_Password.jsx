import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Forget_Password = () => {
    const navigate = useNavigate()
    
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleRequestOTP = ()=>{
    navigate('/otp-authentication')
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ textAlign: "center", width:'40%', paddingBottom:'2rem' }}>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Forget Your Password
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "grey" }}>
            Don’t worry we can help you out! if you still remember your email
            address you can quickly reset your password.
          </Typography>

          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <label>Email</label>
            <TextField fullWidth sx={{ marginTop: "1rem" }} />
          </Box>
          <Button
          onClick={handleRequestOTP}
            variant="contained"
            sx={{ width: "100%", marginTop:'2rem', padding: "0.5rem 0rem", textTransform:'none', fontSize:'1.1rem' }}
          >
            Request password change
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Forget_Password;
