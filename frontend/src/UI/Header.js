import logo from "../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";

/* Styled Components */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

/* Main Header Component */
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 0 }}></Typography>
      <List>
        {["Home", "Contact", "About", "Sign Up"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        padding: {
          xs: "0 10px",
          md: "0 20px",
        },
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Semi-transparent bottom border
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Mobile: Hamburger Menu */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo for Both Mobile and Desktop */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            flexGrow: { xs: 1, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Use an img tag for the logo if it's an image */}
          <img src={logo} alt="Logo" style={{ height: "30px" }} />
          {/* Adjust the src to your logo path */}
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 6 }}>
          {["Home", "Contact", "About", "Sign Up"].map((text, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                cursor: "pointer",
                fontWeight: "500",
                borderBottom: "2px solid transparent",
                transition: "border-bottom 0.3s ease, color 0.3s ease", // Adding transition for border and color
                "&:hover": {
                  borderBottom: "2px solid #D9534F",
                  color: "#D9534F", // Optional: Change color on hover
                },
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* Desktop Search Bar */}
        <Search sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="What are you looking for?"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* Icons */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#D9534F",
              color: "#fff",
              borderRadius: "50%",
              padding: "8px",
            }}
          >
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonOutlineIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Search Bar */}
      <Box sx={{ display: { xs: "flex", md: "none" }, padding: "10px 12px" }}>
        <Search sx={{ width: "100%" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Cherchez sur Jumia"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
