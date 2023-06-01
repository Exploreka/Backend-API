const express = require('express');
const router = express.Router();
const wishlistTourPackageController = require('../controllers/whislistTourPackage');

// Get all attractions
router.get('/wishlisttourpackage', wishlistTourPackageController.getAllWishlistTourPackage);

// Get attraction by ID
router.get('/wishlisttourpackage/:id', wishlistTourPackageController.getWishlistTourPackageById);

// Create a new attraction
router.post('/wishlisttourpackage', wishlistTourPackageController.createWishlistTourPackage);

// Update an attraction by ID
router.put('/wishlisttourpackage/:id', wishlistTourPackageController.updateWishlistTourPackage);

// Delete an attraction by ID
router.delete('/wishlisttourpackage/:id', wishlistTourPackageController.deleteWishlistTourPackage);

module.exports = router;
