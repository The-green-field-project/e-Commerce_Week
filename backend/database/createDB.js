const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Extract database credentials from environment variables
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;

// Initialize Sequelize connection (without specifying a specific database)
const sequelize = new Sequelize(
  `mysql://${username}:${password}@localhost:3306`
);

// Function to drop the database if it exists and then create it
(async () => {
  try {
    // Drop the database if it exists
    await sequelize.query(`DROP DATABASE IF EXISTS \`${databaseName}\`;`);
    console.log(`🟡 Database "${databaseName}" dropped successfully!`);

    // Create the database
    await sequelize.query(`CREATE DATABASE \`${databaseName}\`;`);
    console.log(`🟢 Database "${databaseName}" created successfully!`);
  } catch (error) {
    console.error(`🔴 Error handling database "${databaseName}":`, error);
  } finally {
    await sequelize.close();
  }
})();
