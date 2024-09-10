import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "./ButtonPrimary.js";
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
const LoginForm = () => {
  return (
    <Box sx={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
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

      {/* Form Fields */}
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

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Primary Button */}
        <PrimaryButton text={"Log In"}></PrimaryButton>

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

export default LoginForm;
