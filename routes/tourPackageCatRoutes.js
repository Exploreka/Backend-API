const express = require('express');
const router = express.Router();
const tourPackageCatController = require('../controllers/tourPackageCatController');

// Get all tour package
router.get('/tour_package_cat', tourPackageCatController.getAllTourPackageCat);

// Get all category by id tour package
router.get('/tour_package_cat/:id', tourPackageCatController.getTourPackageCatByIdTourPackage);

module.exports = router;