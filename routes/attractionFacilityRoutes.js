const express = require('express');
const router = express.Router();
const attractionFacilityController = require('../controllers/attractionFacilityController');

// Get attraction facility
router.get('/attraction_facility/:id_attraction', attractionFacilityController.getAttractionFacilitiesById);

module.exports = router;
