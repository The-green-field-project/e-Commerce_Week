import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'; // Import useDispatch for dispatching actions
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../redux/productsSlice'; // Import your actions

/* Styled Components */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%", // Takes full width
  display: "flex", // Flexbox for aligning icon and input
  alignItems: "center", // Center icon vertically
  [theme.breakpoints.up("md")]: {
    width: "20em", // Adjust width for larger screens
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1, // Flexbox for taking available space
  "& .MuiInputBase-input": {
    padding: "8px 16px",
    width: "100%",
    transition: "width 0.3s",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const SearchBar = ({ placeholder = "What are you looking for?" }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch(); 

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (searched) => {
    dispatch(fetchProductsStart());

    try {
      const response = await fetch(`http://localhost:3100/api/products/search/${searched}`);
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <Search>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        value={searchValue}
      />
      <IconButton onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Search>
  );
};

export default SearchBar;









  



