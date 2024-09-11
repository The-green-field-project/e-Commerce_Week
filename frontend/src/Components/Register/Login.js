import React, { useState } from 'react';
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "../../UI/ButtonPrimary";
import axios from 'axios';

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

/* Main LoginForm Component */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const response = await axios.post('http://localhost:3100/api/users/login', {
        email,
        password,
      });
      console.log('API response:', response);
      window.location.href = '/';

      // rest of the code...
    } catch (err) {
      console.error('Login error:', err.response?.data || err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };
  


  return (
    <Box sx={{ maxWidth: "400px", margin: "auto", padding: "20px" }} component="form" onSubmit={handleSubmit}>
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Log in to Exclusive
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
        label="Email or Phone Number"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="standard"
        sx={{ marginBottom: 2 }}
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        variant="standard"
        sx={{ marginBottom: 3 }}
        required
      />

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Primary Button */}
        <PrimaryButton onClick={handleSubmit} text={"Log In"} type="submit"></PrimaryButton>

        {/* Forgot Password Link */}
        <Typography
          variant="body2"
          sx={{
            color: "#D9534F",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "underline",
            "&:hover": { color: "#C74742" },
          }}
        >
          Forget Password?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
