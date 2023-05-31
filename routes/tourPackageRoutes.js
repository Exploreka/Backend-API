const express = require('express');
const router = express.Router();
const tourPackage = require('../controllers/tourPackage');

// Get all tourPackages
router.get('/tour_package', tourPackage.getAllTourPackages);

// Get tourPackage by ID
router.get('/tour_package/:id', tourPackage.getTourPackageById);

// Create a new tourPackage
router.post('/tour_package', tourPackage.createTourPackage);

// Update an tourPackage by ID
router.put('/tour_package/:id', tourPackage.updateTourPackage);

// Delete an tourPackage by ID
router.delete('/tour_package/:id', tourPackage.deleteTourPackage);

module.exports = router;
