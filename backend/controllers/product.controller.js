// Import necessary modules
const { models } = require("../database"); // Import models from your database setup

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll(); // Fetch all products
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Controller function to get a single product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await models.Product.findByPk(id); // Fetch product by primary key
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the product" });
  }
};

// Controller function to create a new product
exports.createProduct = async (req, res) => {
  const { name, price, stock, description, userId } = req.body; // Extract data from request body
  try {
    const newProduct = await models.Product.create({
      name,
      price,
      stock,
      description,
      userId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the product" });
  }
};

// Controller function to update a product by ID
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, description, userId } = req.body; // Extract data from request body
  try {
    const product = await models.Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.update({ name, price, stock, description, userId }); // Update product details
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the product" });
  }
};

// Controller function to delete a product by ID
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await models.Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.destroy(); // Delete the product
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the product" });
  }
};
