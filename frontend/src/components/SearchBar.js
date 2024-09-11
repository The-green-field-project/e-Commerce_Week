// SearchBar.js
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";

/* Styled Components */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%", // Prend toute la largeur disponible
  display: "flex", // Utilise flex pour aligner l'icône et l'input
  alignItems: "center", // Centre l'icône verticalement
  [theme.breakpoints.up("md")]: {
    width: "20em", // Assurez-vous qu'il prend également 100% sur les grands écrans
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
  flex: 1, // Utilise flex pour s'adapter à l'espace disponible
  "& .MuiInputBase-input": {
    padding: "8px 16px", // Padding simplifié pour un espacement uniforme
    width: "100%", // Prend toute la largeur disponible
    transition: "width 0.3s", // Transition douce pour l'élargissement
    [theme.breakpoints.up("md")]: {
      width: "100%", // Assurez-vous que la largeur s'ajuste aussi pour les grands écrans
    },
  },
}));

// const SubmitButton = styled(Button)(({ theme }) => ({
//   marginLeft: theme.spacing(1),
//   padding: theme.spacing(1),
//   fontSize: "8px",
//   color: theme.palette.common.black, // Définit la couleur de la police en noir
//   backgroundColor: "transparent", // Définit le fond transparent
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.black, 0.1), // Garde un effet au survol si nécessaire
//   },
//   boxShadow: "none", // Enlève l'ombre
// }));

const SearchBar = ({ placeholder = "What are you looking for?" }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Submitted value:", searchValue);
    // Ajoutez ici votre logique de changement
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", searchValue);
    // Ajoutez ici votre logique de soumission
  };

  return (
    <Search>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
      <IconButton onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
      {/* <SubmitButton type="submit" variant="contained">
        Search
      </SubmitButton> */}
    </Search>
  );
};

export default SearchBar;
