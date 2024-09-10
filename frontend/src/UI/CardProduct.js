import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Rating from "@mui/material/Rating";

/**
 * ProductCard Component
 * Displays product details with an image, price, rating, and action buttons.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product details { image, name, originalPrice, salePrice, rating, reviews }.
 * @param {function} props.onAddToWishlist - Function to handle adding the product to the wishlist.
 * @param {function} props.onViewDetails - Function to handle viewing product details.
 * @returns {JSX.Element} A styled product card component.
 */
const ProductCard = ({ product, onAddToWishlist, onViewDetails }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        // borderRadius: "12px",
        boxShadow: 0,
        overflow: "visible",
        position: "relative",
        padding: "10px",
        margin: "auto",
      }}
    >
      {/* Action Buttons */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <IconButton
          onClick={onAddToWishlist}
          sx={{ backgroundColor: "#fff", boxShadow: 1 }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton
          onClick={onViewDetails}
          sx={{ backgroundColor: "#fff", boxShadow: 1 }}
        >
          <VisibilityOutlinedIcon />
        </IconButton>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
      />

      {/* Product Details */}
      <CardContent sx={{ padding: "10px 0", textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body2"
            sx={{ color: "#D9534F", fontWeight: "bold" }}
          >
            ${product.salePrice}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "text.secondary" }}
          >
            {product.originalPrice && "$" + product.originalPrice}
          </Typography>
        </Box>

        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          <Rating value={product.rating} readOnly size="small" />
          <Typography
            variant="body2"
            sx={{ marginLeft: 0.5, color: "text.secondary" }}
          >
            ({product.reviews})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
