import React from "react";
import { Box, TextField, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google"; // Google icon for the button

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
  return (
    <Box sx={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
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

      {/* Form Fields */}
      <TextField
        fullWidth
        label="Name"
        variant="standard"
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Email or Phone Number"
        variant="standard"
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="standard"
        sx={{ marginBottom: 3 }}
      />

      {/* Primary Button */}
      <PrimaryButton fullWidth>Create Account</PrimaryButton>

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
  );
};

export default SignUpForm;
