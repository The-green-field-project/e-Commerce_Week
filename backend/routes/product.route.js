// Import necessary modules
const express = require("express");
const router = express.Router();

// Import the controller
const productController = require("../controllers/product.controller");

//* Routes

// Get all products
router.get("/", productController.getAllProducts);

// Get a single product by ID
router.get("/:id", productController.getProductById);

// Create a new product
router.post("/", productController.createProduct);

// Update a product by ID
router.put("/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
