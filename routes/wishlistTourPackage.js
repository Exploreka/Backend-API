const express = require('express');
const router = express.Router();
const wishlistTourPackageController = require('../controllers/whislistTourPackage');

// Get all attractions
router.get('/wishlistattraction', wishlistTourPackageController.getAllWishlistTourPackage);

// Get attraction by ID
router.get('/wishlistattraction/:id', wishlistTourPackageController.getWishlistTourPackageById);

// Create a new attraction
router.post('/wishlistattraction', wishlistTourPackageController.createWishlistTourPackage);

// Update an attraction by ID
router.put('/wishlistattraction/:id', wishlistTourPackageController.updateWishlistTourPackage);

// Delete an attraction by ID
router.delete('/wishlistattraction/:id', wishlistTourPackageController.deleteWishlistTourPackage);

module.exports = router;
