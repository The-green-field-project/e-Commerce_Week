// Define the Product model
module.exports = (connection, DataTypes) => {
  const Product = connection.define(
    "Product",
    {
      // Define columns
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      // Model options
      tableName: "products",
      timestamps: true,
    }
  );

  return Product;
};
