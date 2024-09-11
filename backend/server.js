// Import necessary modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

// App configuration
dotenv.config();
const app = express();

// Global middlewares
app.use(cors()); // Handle cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(morgan("dev")); // Log HTTP requests

// Database connection
const db = require("./database/index.js");

// db.dropDB();
//! Note: This command is executed only once when resetting the database

// db.syncDB();
//! Note: This command is executed only once during the initial synchronization of models with the database

db.connectDB();

// Import & Register Routes
const productRoutes = require("./routes/product.route");
app.use("/api/products", productRoutes);
const userRoutes = require("./routes/user.route.js");

app.use('/api/users',userRoutes)
// Start the server
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log("-".repeat(30));
  console.log(`🟢 Server running on : http://localhost:${PORT}`);
  console.log("-".repeat(30));
});
