// Import necessary modules
const { Sequelize, DataTypes } = require("sequelize");

const config = require("./config");

// Initialize Sequelize instance / Establish Connection
const Connection = new Sequelize(config.name, config.user, config.password, {
  host: "localhost",
  port: config.port,
  dialect: "mysql",
  logging: (...msg) => console.log("--- DATABASE LOGS:", msg),
});

// Import all models
const models = {
  User: require("../models/user.model")(Connection, DataTypes),
  Product: require("../models/product.model")(Connection, DataTypes),
  // Add other models here
};

// Define associations / Relationships between tables
const defineAssociations = () => {
  //  One User can have many Products
  models.User.hasMany(models.Product, {
    foreignKey: "userId", // Foreign key in Product model
    as: "products", // Alias for User's products
  });

  // Each Product belongs to one User
  models.Product.belongsTo(models.User, {
    foreignKey: "userId", // Foreign key in Product model
    as: "owner", // Alias for the User who owns the product
  });

  // Add other associations here
};

// Function to connect to the database
const connectDB = async () => {
  try {
    await Connection.authenticate();
    console.log("-".repeat(30));
    console.log(
      "🟢 Connection to the database has been established successfully. 🟢"
    );
    console.log("-".repeat(30));
  } catch (error) {
    console.log("-".repeat(30));
    console.error("🔴🔴🔴 Unable to connect to the database:", error);
    console.log("-".repeat(30));
  }
};

// Function to drop all tables in the database

const dropDB = async () => {
  try {
    await Connection.drop({ force: true });
    console.log("-".repeat(30));
    console.log("🟢 All tables have been dropped successfully! 🟢");
    console.log("-".repeat(30));
  } catch (error) {
    console.log("-".repeat(30));
    console.error("🔴 Error while dropping the tables:", error);
    console.log("-".repeat(30));
  }
};

// Function to sync the models with the database
//! Note: This command is executed only the first time during the initial synchronization of the models with the database

const syncDB = async () => {
  try {
    defineAssociations();
    await Connection.sync({ alter: true, force: true });
    console.log("🟢 All models were synchronized successfully. 🟢");
  } catch (error) {
    console.error("🔴🔴🔴 Error during model synchronization:", error);
  }
};

// Export the Sequelize connection, methods, and models
module.exports = { Connection, dropDB, syncDB, connectDB, models };
