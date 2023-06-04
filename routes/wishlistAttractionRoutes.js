const express = require('express');
const router = express.Router();
const wishlistAttractionCatController = require('../controllers/wishlistAttractionController');

// Get wishlist by ID
router.get('/wishlist_attraction/:id', wishlistAttractionCatController.getWishlistAttractionByUserId);

// Add a new wishlist
router.post('/wishlist_attraction', wishlistAttractionCatController.createWishlistAttraction);

// Delete an wishlist by ID
router.delete('/wishlist_attraction/:id', wishlistAttractionCatController.deleteWishlistAttraction);

module.exports = router;
