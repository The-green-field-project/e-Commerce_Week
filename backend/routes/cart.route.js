
const express = require('express');
const { addToCart, getCartItems, removeFromCart, checkout } = require('../controllers/cartControllers');

const router = express.Router();

// Add item to cart
router.post('/add', addToCart);

// Get items in cart for a user
router.get('/:userId', getCartItems);

// Remove item from cart
router.delete('/remove/:cartItemId', removeFromCart);

// Checkout and create an order
router.post('/checkout', checkout);

module.exports = router;
