

const { models } = require("../database")


exports.addToCart = async (req, res) => {
  try {
    const { order_id, product_id, quantity } = req.body;

    if (!order_id || !product_id || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const product = await models.Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    let cartItem = await models.Cart.findOne({
      where: {order_id, product_id },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      await Cart.create({ order_id, product_id, quantity });
    }

    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

// Get cart items for a user
exports.getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await models.OrderItem.findAll({
      where: { order_id: userId },
      // include: [{ model: models.Product, as: 'product' }],
    })

    res.status(200).json(cartItems)
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(500).json({ error: 'Failed to retrieve cart items' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    await models.OrderItem.destroy({ where: { id: cartItemId } });

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
};

// Checkout and create an order
exports.checkout = async (req, res) => {
  const { order_id } = req.body;

  try {
    const cartItems = await models.OrderItem.findAll({ where: { order_id } });

    if (cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    let totalAmount = 0;
    for (const item of cartItems) {
      const product = await models.Product.findByPk(item.product_id);
      if (product) {
        totalAmount += product.price * item.quantity
      }
    }

    const order = await models.Order.create({
      client_id: order_id,
      total_amount: totalAmount,
    });

    // Optionally, you might want to handle order items or update stock here

    // Clear the cart after successful checkout
    await models.Cart.destroy({ where: { order_id } });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Failed to complete checkout' });
  }
};

