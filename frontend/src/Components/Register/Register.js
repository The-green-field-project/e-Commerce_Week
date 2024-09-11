import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Box, TextField, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { login } from "../../redux/userSlice"; // Adjust the path to your userSlice
import sleep from "../../helpers/sleep"
import { SnackbarProvider, enqueueSnackbar } from "notistack";

/* Styled Components */
const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D9534F",
  color: "#fff",
  padding: "12px 0",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#C74742",
  },
}));

const GoogleButton = styled(Button)(({ theme }) => ({
  color: "#333",
  borderColor: "#ccc",
  padding: "10px 0",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "16px",
  "&:hover": {
    borderColor: "#bbb",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

/* Main SignUpForm Component */
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "client", // default role
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("toast");
    
    try {
    const response = await axios.post('http://localhost:3100/api/users/register', formData);
    const { token } = response.data;

    // Save the token to localStorage or state if needed
  localStorage.setItem('token', token);
   console.log("registered successfully");
    dispatch(login(formData.username));
       enqueueSnackbar('Registered succefully', "success" );
    await sleep(2000);
    window.location.href = '/login';
     } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <Box
        sx={{ maxWidth: "400px", margin: "auto", padding: "20px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Create an account
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", marginBottom: 3 }}
        >
          Enter your details below
        </Typography>

        {/* Display error if any */}
        {error && <Typography color="error">{error}</Typography>}

        {/* Form Fields */}
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          variant="standard"
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          variant="standard"
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          variant="standard"
          sx={{ marginBottom: 3 }}
          required
        />

        {/* Primary Button */}
        <PrimaryButton fullWidth type="submit">
          Create Account
        </PrimaryButton>

        {/* Divider */}
        <Divider sx={{ marginY: 3 }}>OR</Divider>

        {/* Google Sign Up Button */}
        <GoogleButton variant="outlined" fullWidth startIcon={<GoogleIcon />}>
          Sign up with Google
        </GoogleButton>

        {/* Already have an account */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "center", marginTop: 3 }}
        >
          Already have an account?{" "}
          <Typography
            component="span"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
              "&:hover": { color: "#D9534F" },
            }}
          >
            Log in
          </Typography>
        </Typography>
      </Box>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
    </>
  );
};

export default SignUpForm;
