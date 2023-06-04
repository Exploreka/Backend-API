const express = require('express');
const router = express.Router();
const wishlistTourPackageController = require('../controllers/wishlistTourPackageController');

// Get wishlist by ID user
router.get('/wishlist_tour_package/:id', wishlistTourPackageController.getWishlistTourPackageByUserId);

// Create a new wishlist
router.post('/wishlist_tour_package', wishlistTourPackageController.createWishlistTourPackage);

// Delete an wishlist by ID
router.delete('/wishlist_tour_package/:id', wishlistTourPackageController.deleteWishlistTourPackage);

module.exports = router;
