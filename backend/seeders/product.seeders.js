// Import necessary modules
const { Connection, models } = require("../database"); // Adjust the path as needed to your database setup

// Define seed data
const seedProducts = async () => {
  try {
    // Connect to the database
    await Connection.authenticate();
    console.log("🟢 Connected to the database successfully.");

    // Define product data
    const products = [
      {
        name: "Product 1",
        price: 19.99,
        stock: 50,
        description: "Description for product 1",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 2",
        price: 29.99,
        stock: 30,
        description: "Description for product 2",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 3",
        price: 39.99,
        stock: 20,
        description: "Description for product 3",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more products as needed
    ];

    // Use bulkCreate to insert data into the Product table
    await models.Product.bulkCreate(products);
    console.log("🟢 Products were seeded successfully.");
  } catch (error) {
    console.error("🔴 Failed to seed products:", error);
  } finally {
    // Close the database connection
    await Connection.close();
    console.log("🟢 Database connection closed.");
  }
};

// Execute the seeding function
seedProducts();
