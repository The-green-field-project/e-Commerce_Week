const crypto = require("crypto");

function generateUniqueId(productId, productName) {
  // Combiner l'ID et le nom du produit
  const combinedString = `${productId}-${productName}`;

  // Générer un hachage SHA-256 pour assurer l'unicité
  const uniqueId = crypto
    .createHash("sha256")
    .update(combinedString)
    .digest("hex");

  return uniqueId;
}

// Exemple d'utilisation
const productId = 1231;
const productName = "Iphone 16bg ";
const uniqueId = generateUniqueId(productId, productName);

console.log("Identifiant Unique:", uniqueId);
