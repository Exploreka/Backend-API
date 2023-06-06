const express = require('express');
const router = express.Router();
const attractionFacilityController = require('../controllers/attractionFacilityController');

// Get all facilities
router.get('/attraction_facility', attractionFacilityController.getAllFacility);

// Get facility by id_attraction
router.get('/attraction_facility/:id', attractionFacilityController.getFacilityByIdAttraction);

module.exports = router;
