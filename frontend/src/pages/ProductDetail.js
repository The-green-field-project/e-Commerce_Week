import Main from "../components/Main";
import ProductDetail from "../components/ProductDetail";
import { Box, Typography, Button, IconButton, Modal } from "@mui/material";
// Component
const Page = () => {
  return (
    <Main sx={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          flex: 1,
          overflowY: "auto", // Allows content to scroll if it overflows
          position: "relative", // Allows fixing of child components
        }}
      >
        <ProductDetail />
      </Box>
    </Main>
  );
};

export default Page;
