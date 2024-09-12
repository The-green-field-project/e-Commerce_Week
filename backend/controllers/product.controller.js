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

// Controller function to get a single product by productId
exports.getProductByProductId = async (req, res) => {
  const { id } = req.params; // Assuming 'id' corresponds to 'productId'

  try {
    const product = await models.Product.findOne({
      where: { productId: id }, // Search by the productId field
    });

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
  const {
    name,
    price,
    stock,
    description,
    seller_id,
    mainImageUrl,
    images,
    category_id,
    productId,
  } = req.body;

  console.log("Received data:", req.body);
  // Basic validation: Check if required fields are present
  if (
    !name ||
    !price ||
    !stock ||
    !seller_id ||
    !mainImageUrl ||
    !category_id ||
    !productId
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newProduct = await models.Product.create({
      name,
      price,
      stock,
      description,
      seller_id,
      mainImageUrl,
      images,
      category_id,
      productId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error); // Log detailed error
    throw error;
    res.status(500).json({ error: "Failed to create the product" });
  }
};

// Controller function to update a product by ID
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    price,
    stock,
    description,
    seller_id,
    mainImageUrl,
    images,
    category_id,
  } = req.body;

  try {
    const product = await models.Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.update({
      name,
      price,
      stock,
      description,
      seller_id,
      mainImageUrl,
      images,
      category_id,
    });
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

// Controller function to add an image to the images array of a product
exports.addImageToProduct = async (req, res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;

  console.log(id, imageUrl);
  if (!imageUrl) {
    return res.status(400).json({ error: "Image URL is required" });
  }

  try {
    const product = await models.Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const currentImages = [...product.images] || []; // Ensure current images is an array

    currentImages.push(imageUrl); // Add new image URL to the array

    await product.update({ images: currentImages });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add image to the product" });
  }
};

// {
//   "name": "TabldeEEEEEwwt",
//   "price": 429.99,
//   "stock": 80,
//   "description": "A high-end tablet with a sleek design and powerful features",
//   "seller_id": 3,
//   "category_id": 1,
//   "mainImageUrl": "https://example.com/images/tablet_main.jpg",
//   "images": [
//     "https://example.com/images/tablet1.jpg",
//     "https://example.com/images/tablet2.jpg"
//   ]

// }

////
// {
//   "imageUrl": "https://example.com/images/new_image4.jpg"
// }
