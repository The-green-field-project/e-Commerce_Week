const crypto = require("crypto");

const { models } = require("../database"); // Modèle de produit à adapter selon ton projet

// Middleware pour générer un identifiant unique et vérifier l'existence du produit
async function generateUniqueIdMiddleware(req, res, next) {
  try {
    const { name } = req.body;

    // Vérifier si un produit avec le même nom existe déjà
    const existingProduct = await models.Product.findOne({ where: { name } });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Un produit avec ce nom existe déjà." });
    }

    // Combiner un ID temporaire et le nom pour créer un identifiant unique
    const tempId = Date.now(); // Utilisation d'un timestamp temporaire pour la combinaison
    const combinedString = `${tempId}-${name}`;
    const uniqueId = crypto
      .createHash("sha256")
      .update(combinedString)
      .digest("hex");

    // Ajouter l'identifiant unique à la requête pour une utilisation ultérieure
    req.body.productId = uniqueId;

    next(); // Passer au prochain middleware ou au contrôleur
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la vérification du produit." });
  }
}

module.exports = generateUniqueIdMiddleware;
