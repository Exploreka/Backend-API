const express = require('express');
const router = express.Router();
const wishlistAttractionCatController = require('../controllers/wishlistAttractionController');

// Get all attractions
router.get('/wishlistattraction', wishlistAttractionCatController.getAllWishlistAttractions);

// Get attraction by ID
router.get('/wishlistattraction/:id', wishlistAttractionCatController.getWishlistAttractionById);

// Create a new attraction
router.post('/wishlistattraction', wishlistAttractionCatController.createWishlistAttraction);

// Update an attraction by ID
router.put('/wishlistattraction/:id', wishlistAttractionCatController.updateWishlistAttraction);

// Delete an attraction by ID
router.delete('/wishlistattraction/:id', wishlistAttractionCatController.deleteWishlistAttraction);

module.exports = router;
