// models/product.model.js
module.exports = (connection, DataTypes) => {
  const Product = connection.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      mainImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        // Modifié pour utiliser le type JSON
        type: DataTypes.JSON,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      tableName: "products",
      timestamps: true,
      hooks: {
        beforeCreate: async (product) => {
          // Extraire les initiales des quatre premiers mots du nom
          const nameWords = product.name.split(" ");
          const initials = nameWords
            .map((word) => word.charAt(0)) // Prendre la première lettre de chaque mot
            .join("") // Joindre les initiales
            .substring(0, 4) // Prendre seulement les 4 premières lettres
            .toUpperCase(); // Convertir en majuscules

          // Convertir category_id en une chaîne de 3 caractères
          const categoryPart = String(product.category_id).padStart(3, "0");

          // Obtenir la date actuelle au format yymmdd
          const date = new Date();
          const yy = String(date.getFullYear()).substring(2); // Année sur 2 chiffres
          const mm = String(date.getMonth() + 1).padStart(2, "0"); // Mois sur 2 chiffres
          const dd = String(date.getDate()).padStart(2, "0"); // Jour sur 2 chiffres
          const dateFormatted = `${yy}${mm}${dd}`; // Format yymmdd
          // Utiliser un nombre aléatoire de 4 chiffres pour l'unicité
          const randomPart = Math.floor(10000 + Math.random() * 90000); // Génère un nombre entre 1000 et 9999

          // Combiner les parties pour créer le productId
          const IDF = `${initials}-${categoryPart}-${yy}${randomPart}${mm}`;

          product.productId = IDF.toUpperCase();
        },
      },
    }
  );

  return Product;
};
