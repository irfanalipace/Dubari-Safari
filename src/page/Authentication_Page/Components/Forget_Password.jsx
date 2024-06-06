import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../../store/actions/authActions";

const Forget_Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(formValues))
      .then((res) => {
        alert("Email sent successfully!");
        // Optionally, you can redirect the user after successful email sending
        // navigate("/login");
      })
      .catch((err) => {
        alert("Error sending email. Please try again.");
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt:5
      }}
    >
      <Box sx={{ textAlign: "center", width: "40%", paddingBottom: "2rem" }}>
        <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
          Forget Your Password
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem", color: "grey" }}>
          Don’t worry we can help you out! if you still remember your email
          address you can quickly reset your password.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <label htmlFor="email">Email</label>
            <TextField
              type="email"
              required
              fullWidth
              sx={{ marginTop: "1rem" }}
              size="small"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              label="Email"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "2rem",
              padding: "0.5rem 0rem",
              textTransform: "none",
              fontSize: "1.1rem",
            }}
          >
            Request password change
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Forget_Password;
