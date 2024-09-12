const { models } = require("../database"); // Adjust the product model based on your project
const crypto = require("crypto");

// Middleware to generate a custom identifier based on product name, category, and a random number
async function generateCustomUniqueIdMiddleware(req, res, next) {
  try {
    const { name, category_id } = req.body;

    // Check if a product with the same name already exists
    const existingProduct = await models.Product.findOne({ where: { name } });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Un produit avec ce nom existe déjà." });
    }

    // Extract the first 12 characters of the name, replace spaces with underscores, and ensure they're lowercase
    const namePart = name.substring(0, 12).replace(/ /g, "_").toLowerCase();

    // Convert category_id to a string and pad with leading zeros to make it three digits
    const categoryPart = String(category_id).padStart(3, "0");

    // Generate a unique identifier using crypto
    const tempId = Date.now();
    const combinedString = `${tempId}-${name}-${category_id}`;
    const uniqueId = crypto
      .createHash("sha256")
      .update(combinedString)
      .digest("hex");

    // Extract the first 12 characters of the uniqueId
    const finalId = uniqueId.substring(0, 12).toLowerCase();

    // Combine the parts to create the custom identifier
    const customUniqueId = `${namePart}-${categoryPart}-${finalId}`;

    // Add the custom identifier to the request body for later use
    req.body.productId = customUniqueId;
    console.log(customUniqueId);
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la génération de l'identifiant." });
  }
}

module.exports = generateCustomUniqueIdMiddleware;
