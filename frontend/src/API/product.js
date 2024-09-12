// Import axios for making HTTP requests
import axios from "axios";

// Define the base URL for the product API
const API_URL = "http://localhost:3100/api/products";

// API object containing all product-related methods
const ProductAPI = {
  /**
   * Method to get all products.
   * @returns {Array} - Array of all products.
   */
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch products:",
        error.response?.data || error.message
      );
      throw new Error("Failed to fetch products.");
    }
  },

  /**
   * Method to get a single product by ID.
   * @param {number} productId - The ID of the product to fetch.
   * @returns {Object} - The product details.
   */
  getProductById: async (productId) => {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch the product:",
        error.response?.data || error.message
      );
      throw new Error("Failed to fetch the product.");
    }
  },
  getProductByProductId: async (productId) => {
    try {
      const response = await axios.get(`${API_URL}/productId/${productId}`);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch the product:",
        error.response?.data || error.message
      );
      throw new Error("Failed to fetch the product.");
    }
  },

  /**
   * Method to create a new product.
   * @param {Object} newProduct - The details of the product to create.
   * @returns {Object} - The created product details.
   */
  createProduct: async (newProduct) => {
    try {
      const response = await axios.post(`${API_URL}/create`, newProduct);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to create the product:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create the product.");
    }
  },

  /**
   * Method to update a product by ID.
   * @param {number} productId - The ID of the product to update.
   * @param {Object} updatedData - The updated product details.
   * @returns {Object} - The updated product details.
   */
  updateProduct: async (productId, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/update/${productId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error(
        "Failed to update the product:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update the product.");
    }
  },

  /**
   * Method to delete a product by ID.
   * @param {number} productId - The ID of the product to delete.
   * @returns {Object} - A message confirming the product deletion.
   */
  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_URL}/delete/${productId}`);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to delete the product:",
        error.response?.data || error.message
      );
      throw new Error("Failed to delete the product.");
    }
  },
};

export default ProductAPI;
