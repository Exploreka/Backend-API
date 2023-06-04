const express = require('express');
const router = express.Router();
const tourPackage = require('../controllers/tourPackageController');

// Get all tour package
router.get('/tour_package', tourPackage.getAllTourPackages);

// Get tour package by ID
router.get('/tour_package/:id', tourPackage.getTourPackageById);

// Create a new tour package
router.post('/tour_package', tourPackage.createTourPackage);

// Update an tour package by ID
router.patch('/tour_package/:id', tourPackage.updateTourPackage);

// Delete an tour package by ID
router.delete('/tour_package/:id', tourPackage.deleteTourPackage);

module.exports = router;
