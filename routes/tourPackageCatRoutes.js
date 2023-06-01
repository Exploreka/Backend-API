const express = require('express');
const router = express.Router();
const tourPackageCatController = require('../controllers/tourPackageCatController');

// Get attraction facility
router.get('/tour_package_cat/:id_tour_package', tourPackageCatController.getTourPackageCatById);

module.exports = router;