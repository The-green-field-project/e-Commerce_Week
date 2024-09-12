// Import necessary modules
const express = require("express");
const router = express.Router();
const generateUniqueIdMiddleware = require("../middlewares/createUnique copy.js");

// Import the controller functions
const {
  getAllProducts,
  getProductById,
  getProductByProductId,
  createProduct,
  updateProduct,
  deleteProduct,
  addImageToProduct, // Import the new function
} = require("../controllers/product.controller.js");

//* Routes

// Get all products
router.get("/", getAllProducts);

// Get a single product by ID
router.get("/:id", getProductById);

// Get a single product by ProductID
router.get("/productId/:id", getProductByProductId);

// Create a new product
router.post("/", generateUniqueIdMiddleware, createProduct);

// Update a product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

// Add an image to the images array of a product by ID
router.post("/:id/images", addImageToProduct); // New route to add an image

module.exports = router;
