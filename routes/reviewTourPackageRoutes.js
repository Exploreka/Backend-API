const express = require('express');
const router = express.Router();
const reviewTourPackageController = require('../controllers/reviewTourPackage');

// Get all attractions
router.get('/reviewtourpackage', reviewTourPackageController.getAllReviewTourPackage);

// Get attraction by ID
router.get('/reviewtourpackage/:id', reviewTourPackageController.getReviewTourPackageById);

// Create a new attraction
router.post('/reviewtourpackage', reviewTourPackageController.createReviewTourPackage);

// Update an attraction by ID
router.put('/reviewtourpackage/:id', reviewTourPackageController.updateReviewTourPackage);

// Delete an attraction by ID
router.delete('/reviewtourpackage/:id', reviewTourPackageController.deleteReviewTourPackage);

module.exports = router;
