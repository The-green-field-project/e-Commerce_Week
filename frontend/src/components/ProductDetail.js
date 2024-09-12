import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAPI from "../API/product";
import Loading from "./Loading";
import { Box, Typography, Button, IconButton, Modal } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [openZoom, setOpenZoom] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await ProductAPI.getProductByProductId(productId);
        setProduct(data);
        setMainImage(data.mainImageUrl);
      } catch (error) {
        console.error("Failed to fetch the product:", error);
        setError("Erreur lors de la récupération du produit.");
      } finally {
        setLoading(false);
      }
    };
    console.log(product);
    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleZoomOpen = () => {
    setOpenZoom(true);
  };

  const handleZoomClose = () => {
    setOpenZoom(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        p: 2,
      }}
    >
      {/* Product Images Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        <img
          src={mainImage}
          alt={product.name}
          style={{
            width: "40vw",
            height: "40vw",
            maxWidth: "400px", // Cap the size if needed
            maxHeight: "400px", // Cap the size if needed
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            objectFit: "cover", // Ensures the image remains a square
            cursor: "pointer",
          }}
          onClick={handleZoomOpen}
        />
        <Box sx={{ display: "flex", gap: 1, mt: 1, overflowX: "auto" }}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
                border:
                  mainImage === img ? "2px solid #1976d2" : "1px solid #ddd",
                borderRadius: "4px",
                transition: "transform 0.2s",
                objectFit: "cover",
              }}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </Box>
      </Box>

      {/* Product Details Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
        >
          {product.name}
        </Typography>

        {/* Rating and Stock Information */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#FFB400",
              mr: 1,
            }}
          >
            <StarIcon />
            <Typography sx={{ ml: 0.5 }}>4.5 (150 Reviews)</Typography>
          </Box>
          <Typography sx={{ color: product.stock > 0 ? "green" : "red" }}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </Typography>
        </Box>

        {/* Price and Description */}
        <Typography variant="h5" sx={{ mb: 1, color: "#555" }}>
          ${product.price}
        </Typography>
        <Typography sx={{ mb: 3, color: "#666" }}>
          {product.description}
        </Typography>

        {/* Quantity and Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Button
            variant="outlined"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            sx={{ minWidth: "40px" }}
          >
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button
            variant="outlined"
            onClick={() => handleQuantityChange(1)}
            sx={{ minWidth: "40px" }}
          >
            +
          </Button>

          <IconButton onClick={() => console.log("Add to wishlist")}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>

        {/* Add to Cart and Other Actions */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Add to cart")}
            sx={{ padding: "10px 20px", borderRadius: "20px" }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            onClick={() => console.log("Buy now")}
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              borderColor: "#1976d2",
              color: "#1976d2",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>

      {/* Zoom Modal */}
      <Modal
        open={openZoom}
        onClose={handleZoomClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={mainImage}
          alt="Zoomed product"
          style={{
            width: "50%",
            maxHeight: "50%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </Modal>
    </Box>
  );
}

export default ProductDetail;
