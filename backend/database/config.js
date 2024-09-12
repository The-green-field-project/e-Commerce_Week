// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();

// Configuration of the database connection with Sequelize
const config = {
  name: "ecommerceWeek",
  user: process.env.DB_USER || "siwar",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 3306,
};

// Export the Configuration for Sequelize
module.exports = config;
