// seed.js
const { Connection, models } = require("../database"); // Ajuster le chemin si nécessaire
const bcrypt = require("bcrypt"); // For hashing passwords
const { User, Category, Product, Order, OrderItem } = models;

const seedDatabase = async () => {
  try {
    // Connect to the database
    await Connection.authenticate();
    console.log("🟢 Connected to the database successfully.");

    // Define seed data for Users with hashed passwords
    const users = [
      {
        username: "adminUser",
        email: "admin@example.com",
        password: "securepassword", // Will be hashed
        role: "admin",
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "clientUser",
        email: "client@example.com",
        password: "securepassword", // Will be hashed
        role: "client",
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "sellerUser",
        email: "seller@example.com",
        password: "securepassword", // Will be hashed
        role: "seller",
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Hash passwords before seeding users
    for (let user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    // Seed data for Categories
    const categories = [
      {
        name: "Electronics",
        description: "Devices, gadgets and accessories",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Books",
        description: "Fiction, non-fiction, educational books, and more",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Seed data for Products
    const products = [
      {
        name: "Smartphone",
        price: 299.99,
        stock: 100,
        description: "Latest model smartphone with all the features",
        seller_id: 3, // Assurez-vous que cela correspond à l'ID d'un utilisateur de rôle 'seller'
        category_id: 1, // Correspond à la catégorie "Electronics"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laptop",
        price: 999.99,
        stock: 50,
        description: "High-performance laptop for work and play",
        seller_id: 3, // Assurez-vous que cela correspond à l'ID d'un utilisateur de rôle 'seller'
        category_id: 1, // Correspond à la catégorie "Electronics"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mystery Novel",
        price: 14.99,
        stock: 200,
        description: "A thrilling mystery novel with twists and turns",
        seller_id: 3, // Assurez-vous que cela correspond à l'ID d'un utilisateur de rôle 'seller'
        category_id: 2, // Correspond à la catégorie "Books"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Seed data for Orders
    const orders = [
      {
        client_id: 2, // Assurez-vous que cela correspond à l'ID d'un utilisateur de rôle 'client'
        total_amount: 314.98,
        status: "Completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Seed data for OrderItems
    const orderItems = [
      {
        order_id: 1, // Assurez-vous que cela correspond à l'ID d'une commande
        product_id: 1, // Correspond au produit "Smartphone"
        quantity: 1,
        price: 299.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1, // Assurez-vous que cela correspond à l'ID d'une commande
        product_id: 3, // Correspond au produit "Mystery Novel"
        quantity: 1,
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert seed data into the tables
    await User.bulkCreate(users);
    console.log("🟢 Users were seeded successfully.");

    await Category.bulkCreate(categories);
    console.log("🟢 Categories were seeded successfully.");

    await Product.bulkCreate(products);
    console.log("🟢 Products were seeded successfully.");

    await Order.bulkCreate(orders);
    console.log("🟢 Orders were seeded successfully.");

    await OrderItem.bulkCreate(orderItems);
    console.log("🟢 Order items were seeded successfully.");
  } catch (error) {
    console.error("🔴 Failed to seed data:", error);
  } finally {
    // Close the database connection
    await Connection.close();
    console.log("🟢 Database connection closed.");
  }
};

// Execute the seeding function
seedDatabase();
